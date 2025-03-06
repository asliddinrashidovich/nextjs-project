import React from 'react'
import { LayoutProps } from './layout.props'
import { Footer, Navbar } from '@/components'
import { Box } from '@mui/material'

function Layout({children}: LayoutProps) {
  return (
    <>
        <Navbar/>
        <Box height={'100%'}>{children}</Box>
        <Footer/>
    </>
  )
}

export default Layout