import { Content, Hero, Sidebar } from '@/components'
import { BlogsType } from '@/interfaces/blog.interface'
import Layout from '@/layout/layout'
import { BlogService } from '@/service/blogservice'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import React from 'react'

function Index({blogs}: HomePageProps) {
  console.log(blogs)


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

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () =>{
  const blogs = await BlogService.getAllBlogs()
  return {
    props: {
      blogs
    }
  }
}

interface HomePageProps {
  blogs: BlogsType[]
}