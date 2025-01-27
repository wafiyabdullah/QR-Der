import { useState, useEffect } from 'react'
import './index.css'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [isDark, setIsDark] = useState(false)

  // Apply theme class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Main content */}
      <div className="p-4 sm:ml-64">
        <div className={`p-6 mt-4 rounded-xl shadow-lg ${
          isDark 
            ? 'bg-gray-900 border border-purple-900/20' 
            : 'bg-white border border-gray-200'
        }`}>
          <MainContent activeMenu={activeMenu} />
        </div>
      </div>

      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </div>
  )
}

export default App
