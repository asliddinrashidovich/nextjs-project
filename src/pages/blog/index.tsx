import { Content } from "@/components"
import { BlogsType } from "@/interfaces/blog.interface"
import Layout from "@/layout/layout"
import { BlogService } from "@/service/blogservice"
import { Box } from "@mui/material"
import { GetServerSideProps } from "next"

function Blog({blogs}: BlogPageProps) {
  return (
    <Layout>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row' }, padding: '20px', gap:'20px', justifyContent: 'center'} }> 
            <Content blogs={blogs}/>
        </Box>
    </Layout>
  )
}

export default Blog

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
    const blogs = await BlogService.getAllBlogs();

    return {
        props: {
            blogs,
        }
    }
}

interface BlogPageProps {
    blogs: BlogsType[]
}