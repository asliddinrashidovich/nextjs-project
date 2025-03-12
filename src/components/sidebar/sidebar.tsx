import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import Image from "next/image";
import { format } from 'date-fns';
import { SidebarProps } from "./sidebar.interface";
import { useRouter } from "next/router";

function Sidebar({latest, category}: SidebarProps) {
    const router = useRouter()
  return (
    <Box sx={{width: {xs: '100%', md: '30%'}}}>
        <Box position={'sticky'} top={'100px'} sx={{transition: 'all ease 0.3s'}}>
            <Box border={'2px solid gray'} borderRadius={'10px'} padding={'20px'} marginTop={'20px'}>
                    <Typography variant="h5" >
                        Latest Blog
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'start', flexDirection:'column', marginTop: '20px'}}>
                        {latest.map(item => (
                            <Box onClick={() => router.push(`/blog/${item.slug}`)} sx={{cursor: 'pointer'}} key={item.title} width={'100%'} marginTop={'20px'}>
                                <Box sx={{display: 'flex', alignItems:'center', gap: '10px'}}>
                                    <Image style={{borderRadius: '10px', objectFit: 'cover'}} src={item.image.url} alt={item.title} width={100} height={100}/>
                                    <Box>
                                        <Typography variant="body1">
                                            {item.title}
                                        </Typography>
                                        <Box sx={{display: 'flex', gap: '15px', alignItems: 'center', marginTop: '20px'}}>
                                        <Avatar src={item.author.avatart.url} sx={{background: 'white'}} alt={item.author.avatar}/>
                                        <Box>
                                            <Typography variant="body2">
                                                {item.author.avatar}
                                            </Typography>
                                            <Box sx={{opacity:'0.5', fontSize: '14px'}}>{format(new Date(item.createdAt), 'dd, MMM, yyyy')}</Box>
                                        </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider sx={{width: '100%', marginTop:'20px'}}/>
                            </Box>
                        ))}
                    </Box>
            </Box>
            <Box border={'2px solid gray'} borderRadius={'10px'} padding={'20px'}  marginTop={'20px'}>
                <Typography variant="h5" >
                    Category
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'start', flexDirection:'column', marginTop: '20px'}}>
                    {category.map(item => (
                        <Box onClick={() => router.push(`/category/${item.slug}`)} key={item.label} sx={{ width:'100%'}}>
                            <Button sx={{height: '50px', width:'100%',justifyContent: 'flex-start'}}>
                                {item.label}
                            </Button>
                            <Divider/>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar

// const data = [
//     {
//       image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
//       title: "Technical SEO with Hygraph",
//       excerpt: "Get started with your SEO implementation when using a Headless CMS",
//       author: {
//         name: "Asliddin Norboyev",
//         image: "https://www.asliddinnorboyev.uz/images/hero/hero_image.png",
//       },
//     },
//     {
//       image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
//       title: "Union Types and Sortable Relations with Hygraph",
//       excerpt:
//         "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
//       author: {
//         name: "Asliddin Norboyev",
//         image: "https://www.asliddinnorboyev.uz/images/hero/hero_image.png",
//       },
//     },
// ];