import { FC, PropsWithChildren, useState, useEffect, useMemo, useCallback } from 'react'
import * as SecureStore from 'expo-secure-store'

import { AuthContext } from './AuthContext'
import { AuthContextProps } from './AuthContextProps'
import { Nullable, UserSession } from '@/types'
import { useGetSessionToken, useLogin } from '@/hooks'
import { Constants } from '@/Constants'

const STORAGE_KEY = Constants.secureStore.keys.refreshToken

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const loginUseCase = useLogin()
  const getSessionTokenUseCase = useGetSessionToken()
  const [refreshToken, setRefreshToken] = useState<Nullable<string>>(null)
  const [sessionToken, setSessionToken] = useState<Nullable<string>>(null)
  const [userProfile, setUserProfile] = useState<Nullable<UserSession['profile']>>(null)
  const [isReady, setIsReady] = useState(false)

  const fetchUserProfile = useCallback(async (sessionToken: string) => {
    // TODO: Move this logic to api client
    return {
      uid: '123',
      name: 'John',
      lastname: 'Doe',
      username: 'johndoe',
      email: 'john.doe@example.com',
      avatarURL: null,
    } satisfies UserSession['profile']
  }, [])

  const fetchSessionToken = useCallback(
    async (refreshToken: string) => {
      return await getSessionTokenUseCase.execute({ refreshToken })
    },
    [getSessionTokenUseCase],
  )

  const getSessionToken = useCallback(async () => {
    if (!isReady) {
      throw new Error('Auth not ready')
    }

    if (!refreshToken) {
      throw new Error('No refresh token found')
    }

    // TODO: Check if token is expired
    const expired = true
    if (expired) {
      const { sessionToken } = await fetchSessionToken(refreshToken)
      setSessionToken(sessionToken)
      return sessionToken
    }

    return sessionToken
  }, [isReady, refreshToken, sessionToken, fetchSessionToken])

  useEffect(() => {
    SecureStore.getItemAsync(STORAGE_KEY)
      .then((refreshToken) => {
        if (refreshToken) {
          setRefreshToken(refreshToken)
          return fetchSessionToken(refreshToken)
        }
        return Promise.reject(new Error('No refresh token found'))
      })
      .then(({ sessionToken }) => {
        setSessionToken(sessionToken)
        return fetchUserProfile(sessionToken)
      })
      .then((userProfile) => {
        setUserProfile(userProfile)
        return Promise.resolve()
      })
      .catch((error) => {
        if (error instanceof Error && error.message !== 'No refresh token found') {
          return Promise.reject(error)
        }
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
      .finally(() => {
        setIsReady(true)
      })
  }, [setRefreshToken, setSessionToken, fetchSessionToken, fetchUserProfile])

  const login = useCallback(
    async (email: string, password: string) => {
      const { refreshToken } = await loginUseCase.execute({ email, password })
      const { sessionToken } = await fetchSessionToken(refreshToken)
      const userProfile = await fetchUserProfile(sessionToken)
      setUserProfile(userProfile)
      setRefreshToken(refreshToken)
      setSessionToken(sessionToken)
      SecureStore.setItemAsync(STORAGE_KEY, refreshToken)
    },
    [loginUseCase, fetchSessionToken, fetchUserProfile, setUserProfile, setRefreshToken, setSessionToken],
  )

  const logout = useCallback(async () => {
    SecureStore.deleteItemAsync(STORAGE_KEY)
    setRefreshToken(null)
    setSessionToken(null)
    setUserProfile(null)
  }, [])

  const value: AuthContextProps = useMemo(
    () =>
      !isReady
        ? null
        : ({
            login,
            logout,
            getSessionToken,
            userProfile,
          } satisfies AuthContextProps),
    [getSessionToken, login, logout, userProfile, isReady],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
