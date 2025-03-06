import { navItems } from "@/config/constants"
import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import Image from "next/image";
import { format } from 'date-fns';

function Sidebar() {
  return (
    <Box sx={{width: '30%'}}>
        <Box position={'sticky'} top={'100px'} sx={{transition: 'all ease 0.3s'}}>
        <Box border={'2px solid gray'} borderRadius={'10px'} padding={'20px'}>
                <Typography variant="h5" >
                    Latest Blog
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'start', flexDirection:'column', marginTop: '20px'}}>
                    {data.map(item => (
                        <Box key={item.image} width={'100%'} marginTop={'20px'}>
                            <Box sx={{display: 'flex', alignItems:'center', gap: '10px'}}>
                                <Image style={{borderRadius: '10px', objectFit: 'cover'}} src={item.image} alt={item.title} width={100} height={100}/>
                                <Box>
                                    <Typography variant="body1">
                                        {item.title}
                                    </Typography>
                                    <Box sx={{display: 'flex', gap: '15px', alignItems: 'center', marginTop: '20px'}}>
                                    <Avatar src={item.author.image} sx={{background: 'white'}} alt={item.author.name}/>
                                    <Box>
                                        <Typography variant="body2">
                                            {item.author.name}
                                        </Typography>
                                        <Box sx={{opacity:'0.5', fontSize: '14px'}}>{format(new Date(), 'dd, MMM, yyyy')}</Box>
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
                    {navItems.map(item => (
                        <Box  key={item.route} sx={{ width:'100%'}}>
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

const data = [
    {
      image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
      title: "Technical SEO with Hygraph",
      excerpt: "Get started with your SEO implementation when using a Headless CMS",
      author: {
        name: "Asliddin Norboyev",
        image: "https://www.asliddinnorboyev.uz/images/hero/hero_image.png",
      },
    },
    {
      image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
      title: "Union Types and Sortable Relations with Hygraph",
      excerpt:
        "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
      author: {
        name: "Asliddin Norboyev",
        image: "https://www.asliddinnorboyev.uz/images/hero/hero_image.png",
      },
    },
];