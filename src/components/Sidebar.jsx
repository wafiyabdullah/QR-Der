import { useState, useRef, useEffect } from 'react'

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const sidebarRef = useRef(null)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && 
          !event.target.closest('[data-drawer-toggle="logo-sidebar"]')) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      {/* Mobile sidebar toggle */}
      <button
        onClick={toggleSidebar}
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="fixed top-4 left-4 z-40 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        ref={sidebarRef}
        id="logo-sidebar" 
        className={`fixed top-0 left-0 z-50 w-64 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-purple-900/20">
          <a href="/" className="flex items-center ps-2.5 mb-5">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="QR Order Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-purple-300">QR Order</span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a 
                href="#" 
                onClick={() => setActiveMenu('dashboard')}
                className={`flex items-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-purple-500/10 hover:text-gray-900 dark:hover:text-purple-300 transition-all duration-200 ${
                  activeMenu === 'dashboard' 
                    ? 'bg-gray-100 text-gray-900 dark:bg-purple-500/20 dark:text-purple-300' 
                    : ''
                }`}
              >
                <svg className="w-5 h-5 text-gray-500 dark:text-purple-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => setActiveMenu('kanban')}
                className={`flex items-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-purple-500/10 hover:text-gray-900 dark:hover:text-purple-300 transition-all duration-200 ${
                  activeMenu === 'kanban' 
                    ? 'bg-gray-100 text-gray-900 dark:bg-purple-500/20 dark:text-purple-300' 
                    : ''
                }`}
              >
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-purple-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-xs font-medium text-gray-800 bg-gray-200 dark:text-purple-300 dark:bg-purple-500/20 rounded-full">Pro</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => setActiveMenu('inbox')}
                className={`flex items-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-purple-500/10 hover:text-gray-900 dark:hover:text-purple-300 transition-all duration-200 ${
                  activeMenu === 'inbox' 
                    ? 'bg-gray-100 text-gray-900 dark:bg-purple-500/20 dark:text-purple-300' 
                    : ''
                }`}
              >
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-purple-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-xs font-medium text-gray-800 bg-gray-200 dark:text-purple-300 dark:bg-purple-500/20 rounded-full">3</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => setActiveMenu('users')}
                className={`flex items-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-purple-500/10 hover:text-gray-900 dark:hover:text-purple-300 transition-all duration-200 ${
                  activeMenu === 'users' 
                    ? 'bg-gray-100 text-gray-900 dark:bg-purple-500/20 dark:text-purple-300' 
                    : ''
                }`}
              >
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-purple-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => setActiveMenu('products')}
                className={`flex items-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-purple-500/10 hover:text-gray-900 dark:hover:text-purple-300 transition-all duration-200 ${
                  activeMenu === 'products' 
                    ? 'bg-gray-100 text-gray-900 dark:bg-purple-500/20 dark:text-purple-300' 
                    : ''
                }`}
              >
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-purple-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
