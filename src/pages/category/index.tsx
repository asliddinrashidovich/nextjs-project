import { CategoryType } from "@/interfaces/category.interface"
import Layout from "@/layout/layout"
import SEO from "@/layout/seo/seo"
import { BlogService } from "@/service/blogservice"
import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

function Category({category}: CategoryBlog) {
  const router = useRouter();
  return (
    <SEO metaTitle="All Categories">
      <Layout>
        <Box  width={{xs: '100%', md: '80%'}}  height={{xs: '30vh', md: '50vh'}} marginTop={'10vh'} borderRadius={'8px'} marginX={'auto'} sx={{justifyContent:'center', flexDirection: 'column', gap: '20px', backgroundColor: 'black', display: 'flex', alignItems: 'center'}}>
          <Typography   variant="h3" fontFamily={'cursive'}>All Categories</Typography>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            {category.map(item => (
              <Button onClick={() => router.push(`/category/${item.slug}`)} key={item.label}>
                #{item.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Layout>
    </SEO>
  )
}
  
export default Category

export const getServerSideProps: GetServerSideProps = async () => {
  const category = await BlogService.getCategory();

  return {
    props: {
      category
    }
  }
}

interface CategoryBlog {
  category: CategoryType[]
}
