import { Nullable, UserSession } from '@/types'

export type AuthContextProps = Nullable<{
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  getSessionToken: () => Promise<Nullable<string>>
  userProfile: Nullable<UserSession['profile']>
}>
