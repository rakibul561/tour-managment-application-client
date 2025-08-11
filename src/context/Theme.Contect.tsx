import type { Theme } from "@/components/providers/theme.provider"
import { createContext } from "react"


type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}
 
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)