import { Kernel, getKernel } from '@/constants'
import { useState } from 'react'

export function useKernel(): Kernel {
  const [kernel] = useState<Kernel>(getKernel())

  return kernel
}
