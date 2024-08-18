import { createContext } from 'react'
import { AuthContextProps } from './AuthContextProps'

export const AuthContext = createContext<AuthContextProps>(null)
