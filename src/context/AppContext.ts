import { createContext } from "react"

import { AppContextType  } from "../Types/AppContextType"

const AppContext = createContext<AppContextType | null>(null)

export { AppContext }