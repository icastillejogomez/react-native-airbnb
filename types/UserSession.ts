import { Nullable } from './Nullable'

export type UserSession = {
  sessionToken: string
  refreshToken: string
  profile: {
    uid: string
    name: string
    lastname: string
    username: string
    email: string
    avatarURL: Nullable<string>
  }
}
