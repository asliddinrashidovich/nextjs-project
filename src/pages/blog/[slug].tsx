import { Sidebar } from "@/components"
import { readingTime } from "@/helpers/timeRead"
import { BlogsType } from "@/interfaces/blog.interface"
import { CategoryType } from "@/interfaces/category.interface"
import Layout from "@/layout/layout"
import SEO from "@/layout/seo/seo"
import { BlogService } from "@/service/blogservice"
import { Avatar, Box, Divider, Typography } from "@mui/material"
import { format } from "date-fns"
import { GetServerSideProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"

function DetailedBlogPage({blog, latest, category}: DetailedBlogProps) {
    const router = useRouter();
    return  (
        <SEO metaTitle={`${router.query.slug}`}>
            <Layout>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', md:'row' }, padding: '20px', gap:'20px'} }> 
                    <Box  sx={{width: {xs: '100%', md: '70%'}}} >
                        <Box sx={{backgroundColor: 'black', padding: '20px', marginBottom: '30px', borderRadius: '8px',height: {xs: '30vh', md:'50vh'}}}  position={'relative'} width={'100%'}>
                            <Image src={blog.image.url} alt={blog.title} fill style={{objectFit: 'cover', borderRadius: '10px'}} />
                        </Box>
                        <Box sx={{display: 'flex', gap: '15px', alignItems: 'center', marginTop: '20px'}}>
                            <Avatar src={blog.author.avatart.url} sx={{background: 'white'}} alt={blog.author.avatar}/>
                            <Box>
                                <Typography>
                                {blog.author.avatar}
                                </Typography>
                                <Box color={'gray'}>{format(new Date(), 'dd, MMM, yyyy')} * {readingTime(blog.description.text)}min read</Box>
                            </Box>
                        </Box>
                        <Box display={'flex'} rowGap={'10px'} flexDirection={'column'}>
                            <Typography variant="h3" marginTop={'20px'}>
                                {blog.title}
                            </Typography>
                            <Typography color={'gray'}>{blog.excerpt}</Typography>
                            <Divider/>
                            <div style={{opacity: '.8'}} dangerouslySetInnerHTML={{__html: blog.description.html}} />
                        </Box>
                    </Box>
                    <Sidebar latest={latest} category={category}/>
                </Box> 
            </Layout>
        </SEO>
    )
}

export default DetailedBlogPage

export const getServerSideProps: GetServerSideProps =  async ({query}) => {
    const blog = await BlogService.getDetailedBlogs(query.slug as string)
    const latest = await BlogService.getLatestBlogs();
    const category = await BlogService.getCategory();

    return {
        props: {
            blog,
            latest,
            category
        }
    }
}

interface DetailedBlogProps  {
    blog: BlogsType
    category: CategoryType[];
    latest: BlogsType[];
}