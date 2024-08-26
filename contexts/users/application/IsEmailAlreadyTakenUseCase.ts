import { AirbnbAPIClient } from '@/adapters'
import { IsEmailAlreadyTakenRequestDTO, IsEmailAlreadyTakenResponseDTO } from '@/adapters/airbnb-api-client/DTOs'

export class IsEmailAlreadyTakenUseCase {
  constructor(private readonly airbnbAPIClient: AirbnbAPIClient) {}

  async execute(data: IsEmailAlreadyTakenRequestDTO): Promise<IsEmailAlreadyTakenResponseDTO> {
    return this.airbnbAPIClient.isEmailAlreadyTaken(data)
  }
}
