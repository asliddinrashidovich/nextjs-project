import { Avatar, Box, Divider, Typography } from "@mui/material"
import { format } from "date-fns";
import Image from "next/image";
import { ContentProps } from "./content.interface";
import { useRouter } from "next/router";

function Content({blogs}: ContentProps) {
  const router = useRouter()

  return (
    <Box sx={{width: {xs: '100%', md: '70%'}}} height={'200vh'} > 
        {blogs.map(item => (
          <Box key={item.id} sx={{backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '8px', width: '100%', padding: '20px',cursor: 'pointer'}} 
          onClick={() => router.push(`/blog/${item.slug}`)}>
            <Box position={'relative'} width={'100%'} sx={{height: {xs: '30vh', md:'50vh'}}}>
              <Image src={item.image.url} alt={item.title} fill style={{objectFit: 'cover', borderRadius: '10px'}} />
            </Box>
            <Typography variant="h4" marginTop={'30px'}>
              {item.title}
            </Typography>
            <Typography variant="body1" color={'gray'}>
              {item.excerpt}
            </Typography>
            <Divider sx={{marginTop:'20px'}}/>
            <Box sx={{display: 'flex', gap: '15px', alignItems: 'center', marginTop: '20px'}}>
              <Avatar src={item.author.avatart.url} sx={{background: 'white'}} alt={item.author.avatar}/>
              <Box>
                <Typography>
                  {item.author.avatar}
                </Typography>
                <Box color={'gray'}>{format(new Date(), 'dd, MMM, yyyy')} </Box>
              </Box>
            </Box>
          </Box>
        ))}
    </Box>
  )
}

export default Content

// const data = [
//   {
//     image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
//     title: "Technical SEO with Hygraph",
//     excerpt: "Get started with your SEO implementation when using a Headless CMS",
//     author: {
//       name: "Asliddin Norboyev",
//       image: "https://www.asliddinnorboyev.uz/images/hero/hero_image.png",
//     },
//   },
//   {
//     image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
//     title: "Union Types and Sortable Relations with Hygraph",
//     excerpt:
//       "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
//     author: {
//       name: "Asliddin Norboyev",
//       image: "https://www.asliddinnorboyev.uz/images/hero/hero_image.png",
//     },
//   },
// ];