import { AirbnbAPIClient } from '@/adapters'
import { GetSessionTokenUseCase, LoginUseCase } from '@/contexts/users/application'

export type KernelContainer = {
  adapters: {
    airbnbAPIClient: AirbnbAPIClient
  }
  useCases: {
    users: {
      login: LoginUseCase
      getSessionToken: GetSessionTokenUseCase
    }
  }
}
