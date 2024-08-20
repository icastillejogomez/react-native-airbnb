import { AirbnbAPIClient } from '@/adapters'
import { LoginRequestDTO, LoginResponseDTO } from '@/adapters/airbnb-api-client/DTOs'

export class LoginUseCase {
  constructor(private readonly airbnbAPIClient: AirbnbAPIClient) {}

  async execute(data: LoginRequestDTO): Promise<LoginResponseDTO> {
    return this.airbnbAPIClient.login(data)
  }
}
