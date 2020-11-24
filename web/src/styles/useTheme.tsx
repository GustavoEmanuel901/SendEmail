import React, { createContext, useContext } from 'react'

import usePersistedState from '../utils/usePersistedState'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import light from './themes/light'
import dark from './themes/dark'

const ThemeContext = createContext<any>(null)

const AppProvider:React.FC =  ({ children }) => { 
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme' , light)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <ThemeContext.Provider value={{
            toggleTheme
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default AppProvider

export function useTheme(){
    const context = useContext(ThemeContext)
    if (!context) throw new Error('Not Context')
    const { toggleTheme } = context
    return { toggleTheme }
}