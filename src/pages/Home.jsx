import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
  )
}

export default Home