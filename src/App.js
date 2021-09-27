import React, { useState } from 'react'
import SidebarLinks from './components/SidebarLinks'
import About from './pages/About'
import Experiance from './pages/Experiance'
import Awards from './pages/Awards'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Interest from './pages/Interest'
import Footer from './components/Footer'
import ProfileFoto from './components/ProfileFoto'

const App = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div
      onClick={() => setOpenSideBar(false)}
      className="min-h-screen min-w-screen bg-white lg:justify-end flex relative"
    >
      <aside
        className={`${!openSideBar && "transform -translate-x-full lg:transform-none"
          } h-screen w-11/12 lg:w-1/4 bg-green-800 fixed flex flex-col items-center justify-center space-y-6 left-0 top-0 z-10 duration-500`}
      >
        <ProfileFoto />
        <SidebarLinks />
      </aside>
      <main className="lg:w-3/4 px-5 sm:px-10 relative">
        <About />
        <Experiance />
        <Education />
        <Skills />
        <Interest />
        <Awards />
        <Footer />
      </main>
    </div>
  )
}

export default App
