import { GetSessionTokenRequestDTO, GetSessionTokenResponseDTO, LoginRequestDTO, LoginResponseDTO } from './DTOs'

export interface AirbnbAPIClient {
  // Users
  login(data: LoginRequestDTO): Promise<LoginResponseDTO>
  getSessionToken(data: GetSessionTokenRequestDTO): Promise<GetSessionTokenResponseDTO>
}
