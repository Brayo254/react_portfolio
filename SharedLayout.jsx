import React from 'react'
import{Outlet} from 'react-router-dom'
import Header from './src/components/Header'

const SharedLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default SharedLayout