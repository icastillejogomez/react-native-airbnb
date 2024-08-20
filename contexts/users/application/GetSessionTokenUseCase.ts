import { AirbnbAPIClient } from '@/adapters'
import { GetSessionTokenRequestDTO, GetSessionTokenResponseDTO } from '@/adapters/airbnb-api-client/DTOs'

export class GetSessionTokenUseCase {
  constructor(private readonly airbnbAPIClient: AirbnbAPIClient) {}

  async execute(data: GetSessionTokenRequestDTO): Promise<GetSessionTokenResponseDTO> {
    return this.airbnbAPIClient.getSessionToken(data)
  }
}
