import { useState, useEffect, useCallback } from 'react'
export default function useTheme() {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [setTheme])

  const setThemeMode = useCallback(
    (themeIn) => {
      console.log({ themeIn })

      if (themeIn && localStorage) {
        localStorage.setItem('theme', themeIn)
        document.documentElement.classList.remove('dark')

        document.documentElement.classList.add(themeIn)
        setTheme(themeIn)
      } else {
        document.documentElement.classList.remove('dark')
        setTheme('light')
      }
    },
    [setTheme]
  )
  return {
    theme,
    setTheme,
    setThemeMode,
  }
}
