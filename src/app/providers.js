'use client'

import { Provider } from '@/components/ui/provider'
import system from './theme'

export function Providers({ children }) {
    return <Provider value={system}>{children}</Provider>
}