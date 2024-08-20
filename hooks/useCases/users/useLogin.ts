import { LoginUseCase } from '@/contexts/users/application'
import { useKernel } from '@/kernel'

export function useLogin(): LoginUseCase {
  const kernel = useKernel()

  return kernel.useCases.users.login
}
