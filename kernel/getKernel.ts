import { Nullable } from '@/types'
import { KernelContainer } from './KernelContainer'
import { FakeAirbnbAPIClient } from '@/adapters'
import { GetSessionTokenUseCase, IsEmailAlreadyTakenUseCase, LoginUseCase, ProviderOAuthSignInUseCase } from '@/contexts/users/application'

let kernel: Nullable<KernelContainer> = null

export function loadKernel(): void {
  const airbnbAPIClient = new FakeAirbnbAPIClient()

  const loginUseCase = new LoginUseCase(airbnbAPIClient)
  const getSessionTokenUseCase = new GetSessionTokenUseCase(airbnbAPIClient)
  const providerOAuthSignInUseCase = new ProviderOAuthSignInUseCase()
  const isEmailAlreadyTakenUseCase = new IsEmailAlreadyTakenUseCase(airbnbAPIClient)

  kernel = {
    adapters: {
      airbnbAPIClient,
    },
    useCases: {
      users: {
        login: loginUseCase,
        getSessionToken: getSessionTokenUseCase,
        providerOAuthSignIn: providerOAuthSignInUseCase,
        isEmailAlreadyTaken: isEmailAlreadyTakenUseCase,
      },
    },
  }
}

export function getKernel(): KernelContainer {
  if (kernel === null) {
    throw new Error('Kernel not loaded')
  }

  return kernel
}
