import { Box } from "@mui/material";
import React from "react";
import { HeadSwiper } from "../components/HomePage/HeadSwiper";
import { Intro } from "../components/HomePage/Introduce";
import { ViewAll } from "../components/HomePage/ViewAll";
import { LoadProduct } from "../components/HomePage/LoadProduct";

function Body() {
  const sneakerSlides = [
    {
      imageUrl: 'https://source.unsplash.com/random/1200x650/?sneaker',
      title: 'Nike Air Force 1',
      altText: 'Slide 1',
      description: 'The iconic sneaker that started it all'
    },
    {
      imageUrl: 'https://source.unsplash.com/random/1200x650/?Ultraboost',
      title: 'Adidas Ultraboost',
      altText: 'Slide 2',
      description: 'The ultimate running shoe'
    },
    {
      imageUrl: 'https://source.unsplash.com/random/1200x650/?shoes',
      title: 'New Balance 990',
      altText: 'Slide 3',
      description: 'The classic American-made sneaker'
    },
    {
      imageUrl: 'https://source.unsplash.com/random/1200x650/?sandal',
      title: 'New Sandal',
      altText: 'Slide 4',
      description: 'The classic Sandal sneaker'
    },
    {
      imageUrl: 'https://source.unsplash.com/random/1200x650/?sneakers',
      title: 'New clogs',
      altText: 'Slide 5',
      description: 'The classic Clogs The classic American-made sneaker'
    },
  ];
  return (
    <React.Fragment>
      <Box>
        <HeadSwiper slides={sneakerSlides} />

        <Intro />

        {/* Latest product */}
        <LoadProduct
          title="Latest"
          category={["LATEST"]}
          limit={6}
          widthDivide={['33%', '34%', '33%', '33%', '34%', '33%']}
        />

        {/* Trending product */}
        <LoadProduct
          title="Trending"
          category={["TRENDING"]}
          limit={7}
          widthDivide={['33%', '34%', '33%', '25%', '25%', '25%', '25%']}
        />

        {/* Discount product */}
        <LoadProduct
          title="Discount"
          category={["DISCOUNT"]}
          limit={8}
          widthDivide={['25%', '25%', '25%', '25%', '25%', '25%', '25%', '25%']}
        />

        {/* Navigate shop */}
        <ViewAll />
      </Box>
    </React.Fragment>
  )
}
export default Body;