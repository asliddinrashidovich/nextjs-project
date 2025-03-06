import { Content, Hero, Sidebar } from '@/components'
import Layout from '@/layout/layout'
import { Box } from '@mui/material'
import React from 'react'

function Index() {
  return (
    <Layout>
      <Hero/>
      <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row' }, padding: '20px', gap:'20px'} }> 
        <Sidebar/>
        <Content/>
      </Box>
    </Layout>
  )
}

export default Index