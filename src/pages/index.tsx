import { Content, Hero, Sidebar } from '@/components'
import { BlogsType } from '@/interfaces/blog.interface'
import { CategoryType } from '@/interfaces/category.interface'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { BlogService } from '@/service/blogservice'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import React from 'react'

function Index({blogs, latest, category}: HomePageProps) {

  return (
    <SEO>
      <Layout>
        <Hero blogs={blogs.slice(0, 3)}/>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row' }, padding: '20px', gap:'20px'} }> 
          <Sidebar latest={latest} category={category}/>
          <Content blogs={blogs}/>
        </Box>
      </Layout>
    </SEO>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () =>{
  const blogs = await BlogService.getAllBlogs();
  const latest = await BlogService.getLatestBlogs();
  const category = await BlogService.getCategory();

  return {
    props: {
      blogs,
      latest,
      category
    }
  }
}

interface HomePageProps {
  blogs: BlogsType[];
  latest: BlogsType[];
  category: CategoryType[];
}