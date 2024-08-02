import React from 'react'

import {Outlet, useNavigation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Navbar from './components/Hero'

const layout = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
<main>
    <Outlet/>
</main>
    
    </>
    
  )
}

export default layout