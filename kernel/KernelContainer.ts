import { AirbnbAPIClient } from '@/adapters'
import { GetSessionTokenUseCase, IsEmailAlreadyTakenUseCase, LoginUseCase, ProviderOAuthSignInUseCase } from '@/contexts/users/application'

export type KernelContainer = {
  adapters: {
    airbnbAPIClient: AirbnbAPIClient
  }
  useCases: {
    users: {
      login: LoginUseCase
      getSessionToken: GetSessionTokenUseCase
      providerOAuthSignIn: ProviderOAuthSignInUseCase
      isEmailAlreadyTaken: IsEmailAlreadyTakenUseCase
    }
  }
}
