import { Box } from "@mui/material";
import React from "react";
import DiscountProducts from "../components/HomePage/DiscountProducts";
import { HeadSwiper } from "../components/HomePage/HeadSwiper";
import { Intro } from "../components/HomePage/Introduce";
import LatestProducts from "../components/HomePage/LatestProducts"
import TrendingProducts from "../components/HomePage/TrendingProducts";
import { ViewAll } from "../components/HomePage/ViewAll";

function Body() {
    const sneakerSlides = [
        {
          imageUrl: 'https://source.unsplash.com/random/1200x650/?sneaker',
          altText: 'Slide 1',
          title: 'Nike Air Force 1',
          description: 'The iconic sneaker that started it all'
        },
        {
          imageUrl: 'https://source.unsplash.com/random/1200x650/?Ultraboost',
          altText: 'Slide 2',
          title: 'Adidas Ultraboost',
          description: 'The ultimate running shoe'
        },
        {
          imageUrl: 'https://source.unsplash.com/random/1200x650/?shoes',
          altText: 'Slide 3',
          title: 'New Balance 990',
          description: 'The classic American-made sneaker'
        },
        {
          imageUrl: 'https://source.unsplash.com/random/1200x650/?sandal',
          altText: 'Slide 4',
          title: 'New Sandal',
          description: 'The classic Sandal sneaker'
        },
        {
          imageUrl: 'https://source.unsplash.com/random/1200x650/?sneakers',
          altText: 'Slide 5',
          title: 'New clogs',
          description: 'The classic Clogs The classic American-made sneaker'
        },
      ];
      const images = [
        {
          url: 'https://source.unsplash.com/random/1200x650/?sneaker',
          title: 'Sneakers',
          width: '30%',
        },
        {
          url: 'https://source.unsplash.com/random/1200x650/?nikeairforce1',
          title: 'Nike',
          width: '40%',
        },
        {
          url: 'https://source.unsplash.com/random/1200x650/?Ultraboost',
          title: 'Ultraboost',
          width: '30%',
        },
      ];
      
    return (
        <React.Fragment>
            <Box>
                <HeadSwiper slides={sneakerSlides}/>
                <Intro />
                {/* <ButtonBases images={images}/> */}
                <LatestProducts images={images}/>
                <TrendingProducts />
                <DiscountProducts />
                <ViewAll />
            </Box>
        </React.Fragment>
    )
}
export default Body;