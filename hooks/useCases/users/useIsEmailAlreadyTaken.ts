import { IsEmailAlreadyTakenUseCase } from '@/contexts/users/application'
import { useKernel } from '@/kernel'

export function useIsEmailAlreadyTaken(): IsEmailAlreadyTakenUseCase {
  const kernel = useKernel()

  return kernel.useCases.users.isEmailAlreadyTaken
}
