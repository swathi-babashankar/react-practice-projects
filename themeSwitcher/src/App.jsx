import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import { useEffect, useState } from 'react'

function App() {
  
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () =>{

    setThemeMode("dark")

  }

  const lightMode = () => {

    setThemeMode("light")

  }

  // DOM operation to change the class value
  const themeRemover = document.querySelector("html").classList.remove("light", "dark");
  const themeChanger = document.querySelector("html").classList.add(themeMode);

  useEffect( () => {
    themeRemover
    themeChanger

  }, [themeMode])



  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-screen">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4" width={600}>
                 <ThemeButton/>
              </div>
              <div className="w-40 max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
        </div>

         </ThemeProvider>

  )
}

export default App
