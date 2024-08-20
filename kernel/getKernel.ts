import { Nullable } from '@/types'
import { KernelContainer } from './KernelContainer'
import { FakeAirbnbAPIClient } from '@/adapters'
import { GetSessionTokenUseCase, LoginUseCase } from '@/contexts/users/application'

let kernel: Nullable<KernelContainer> = null

export function loadKernel(): void {
  const airbnbAPIClient = new FakeAirbnbAPIClient()

  const loginUseCase = new LoginUseCase(airbnbAPIClient)
  const getSessionTokenUseCase = new GetSessionTokenUseCase(airbnbAPIClient)

  kernel = {
    adapters: {
      airbnbAPIClient,
    },
    useCases: {
      users: {
        login: loginUseCase,
        getSessionToken: getSessionTokenUseCase,
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
