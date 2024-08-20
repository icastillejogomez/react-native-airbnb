import { GetSessionTokenUseCase } from '@/contexts/users/application'
import { useKernel } from '@/kernel'

export function useGetSessionToken(): GetSessionTokenUseCase {
  const kernel = useKernel()

  return kernel.useCases.users.getSessionToken
}
