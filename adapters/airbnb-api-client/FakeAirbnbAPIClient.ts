import { Constants } from '@/Constants'
import { AirbnbAPIClient } from './AirbnbAPIClient'
import {
  GetSessionTokenRequestDTO,
  GetSessionTokenResponseDTO,
  IsEmailAlreadyTakenRequestDTO,
  LoginRequestDTO,
  LoginResponseDTO,
} from './DTOs'

const VALID_USER_EMAIL = Constants.auth.registerUser.email
const VALID_USER_PASSWORD = Constants.auth.registerUser.password
const VALID_REFRESH_TOKEN = Constants.auth.validRefreshToken
const VALID_SESSION_TOKEN = Constants.auth.validSessionToken
// const VALID_PROFILE = Constants.auth.registerUser.profile

export class FakeAirbnbAPIClient implements AirbnbAPIClient {
  public async login({ email, password }: LoginRequestDTO): Promise<LoginResponseDTO> {
    if (email !== VALID_USER_EMAIL) {
      throw new Error('Email not found')
    }

    if (password !== VALID_USER_PASSWORD) {
      throw new Error('Invalid password')
    }

    return {
      refreshToken: VALID_REFRESH_TOKEN,
    }
  }

  public async getSessionToken({ refreshToken }: GetSessionTokenRequestDTO): Promise<GetSessionTokenResponseDTO> {
    if (refreshToken !== VALID_REFRESH_TOKEN) {
      throw new Error('Invalid refresh token')
    }

    return { sessionToken: VALID_SESSION_TOKEN }
  }

  public async isEmailAlreadyTaken({ email }: IsEmailAlreadyTakenRequestDTO): Promise<boolean> {
    return email === VALID_USER_EMAIL
  }
}
