import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { Avatar, Box, Typography } from '@mui/material'
import Image from "next/image";
import { format } from 'date-fns';



const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    }
  };
  
  function Hero() {
    return (
      <Box height={'70vh'}>
        <Carousel responsive={responsive}>
            {data.map(item => (
              <Box key={item.image} >
                <Box sx={{position: 'relative', width: '100%', height: '70vh'}}>
                  <Image src={item.image} alt={item.title} style={{objectFit: 'cover',}} fill/>
                  <Box sx={{position: 'absolute', top: '0', left: '0', right: '0', bottom:'0', width: '100%', height:'100%', backgroundColor: 'rgba(0, 0, 0, 0.6)'}}/>
                  <Box width={{xs: '100%', sm: '70%'}} position={'relative'} color={'white'} sx={{top: '50%', transform: "translateY(-50%)", paddingLeft: '50px'}}  zIndex={999}>
                    <Typography variant='h2' >{item.title}</Typography>
                    <Typography variant='h5'>{item.excerpt}</Typography>
                    <Box sx={{display: 'flex', gap: '15px', alignItems: 'center', marginTop: '20px'}}>
                      <Avatar src={item.author.image} sx={{background: 'white'}} alt={item.author.name}/>
                      <Box>
                        <Typography>
                          {item.author.name}
                        </Typography>
                        <Box>{format(new Date(), 'dd, MMM, yyyy')} * 10min read</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
        </Carousel>
    </Box>
  )
}

export default Hero

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

