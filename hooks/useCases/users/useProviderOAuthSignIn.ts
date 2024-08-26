import { ProviderOAuthSignInUseCase } from '@/contexts/users/application'
import { useKernel } from '@/kernel'

export function useProviderOAuthSignIn(): ProviderOAuthSignInUseCase {
  const kernel = useKernel()

  return kernel.useCases.users.providerOAuthSignIn
}
