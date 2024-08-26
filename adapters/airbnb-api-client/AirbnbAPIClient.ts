import {
  GetSessionTokenRequestDTO,
  GetSessionTokenResponseDTO,
  IsEmailAlreadyTakenRequestDTO,
  IsEmailAlreadyTakenResponseDTO,
  LoginRequestDTO,
  LoginResponseDTO,
} from './DTOs'

export interface AirbnbAPIClient {
  // Users
  isEmailAlreadyTaken(data: IsEmailAlreadyTakenRequestDTO): Promise<IsEmailAlreadyTakenResponseDTO>
  login(data: LoginRequestDTO): Promise<LoginResponseDTO>
  getSessionToken(data: GetSessionTokenRequestDTO): Promise<GetSessionTokenResponseDTO>
}
