import React from 'react'
import { LayoutProps } from './layout.props'
import { Footer, Navbar } from '@/components'
import { Box } from '@mui/material'

function Layout({children}: LayoutProps) {
  return (
    <>
        <Navbar/>
          <Box minHeight={'91vh'} pt={'9vh'}>{children}</Box>
        <Footer/>
    </>
  )
}

export default Layout