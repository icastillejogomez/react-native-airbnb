import { AirbnbAPIClient } from './AirbnbAPIClient'
import { GetSessionTokenRequestDTO, GetSessionTokenResponseDTO, LoginRequestDTO, LoginResponseDTO } from './DTOs'

const VALID_USER_EMAIL = 'john@acme.com'
const VALID_USER_PASSWORD = 'acme1234'
const VALID_REFRESH_TOKEN = 'refreshToken'
const VALID_SESSION_TOKEN = 'sessionToken'

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
}
