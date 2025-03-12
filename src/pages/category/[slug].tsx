import { Content, Sidebar } from "@/components"
import { BlogsType } from "@/interfaces/blog.interface"
import { CategoryType } from "@/interfaces/category.interface"
import Layout from "@/layout/layout"
import { BlogService } from "@/service/blogservice"
import { Box } from "@mui/material"
import { GetServerSideProps } from "next"

function Category({ blogs, latest, category}: DetailedCategoryBlogProps) {
  return (
    <Layout>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row' }, padding: '20px', gap:'20px'} }> 
        <Sidebar latest={latest} category={category}/>
        <Content blogs={blogs}/>
      </Box>
    </Layout>
    
  )
}

export default Category

export const getServerSideProps: GetServerSideProps =  async ({query}) => {
    const blogs = await BlogService.getDetailedCategoryBlog(query.slug as string)
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

interface DetailedCategoryBlogProps  {
    blogs: BlogsType[]
    category: CategoryType[];
    latest: BlogsType[];
}