import React from 'react'
import Navbar from '../components/navbar'
import PopularMoviesWrapper from '../components/popular-movies'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Home