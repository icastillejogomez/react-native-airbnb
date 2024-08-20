export interface UserProfileDTO {
  id: string
  type: 'user' | 'host'
  firstName: string
  lastName: string
  email: string
  picture: string
}
