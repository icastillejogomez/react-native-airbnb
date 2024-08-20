import { useState } from 'react'
import { getKernel } from './getKernel'
import { KernelContainer } from './KernelContainer'

export function useKernel(): KernelContainer {
  const [kernel] = useState<KernelContainer>(getKernel())

  return kernel
}
