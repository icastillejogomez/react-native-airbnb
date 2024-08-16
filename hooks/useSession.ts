import { useEffect, useState } from 'react'
import { UserSession } from '@/types'

type UseSession = () => {
  session: UserSession | null
  loaded: boolean
}

export const useSession: UseSession = () => {
  const [loaded, setLoaded] = useState(false)
  const [session, setSession] = useState<UserSession | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setSession({
        uid: '123',
        name: 'Nacho',
        lastname: 'Gomez',
        username: 'nachoogoomez',
        email: 'nacho@gmail.com',
        avatarURL: 'https://avatars.githubusercontent.com/u/123456?v=4',
      })
      // setLoaded(true)
    })
  }, [setLoaded])

  return { session, loaded }
}
