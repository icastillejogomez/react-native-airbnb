import { UserProfileDTO } from '../shared'

export interface LoginResponseDTO {
  refreshToken: string
  sessionToken?: string
  userProfile?: UserProfileDTO
}
