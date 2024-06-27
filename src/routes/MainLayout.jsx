import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const location = useLocation();
  const noHeaderPaths = ["/signUp", "/login", "/forget-Password",];
  return (
    <div>
         <div>
         {!noHeaderPaths.includes(location.pathname) && <Header />}
      <main>
        <Outlet />
      </main>
      {!noHeaderPaths.includes(location.pathname) && <Footer />}
    </div>
    </div>
  )
}

export default MainLayout