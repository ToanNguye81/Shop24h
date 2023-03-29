import { Box } from "@mui/material";
import React from "react";
import { CartV2Component } from "../components/CartV2Component";
import DiscountProducts from "../components/HomePage/DiscountProducts";
import { HeadSwiper } from "../components/HomePage/HeadSwiper";
import { Intro } from "../components/HomePage/Introduce";
import LatestProducts from "../components/HomePage/LatestProducts"
import ProductCategories from "../components/HomePage/ProductCategories";
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
          width: '33%',
        },
        {
          url: 'https://source.unsplash.com/random/1200x650/?nikeairforce1',
          title: 'Nike',
          width: '34%',
        },
        {
          url: 'https://source.unsplash.com/random/1200x650/?Ultraboost',
          title: 'Ultraboost',
          width: '33%',
        },
      ];
      
      const products=[ {
        "name": "Bitis Hunter",
        "brand": "Bitis",
        "description": "Bitis Tử Thần",
        "type": "Trending",
        "imageUrl": "https://product.hstatic.net/1000230642/product/hsm001200den__2__5b334f3afd484a40bec4abe17b476c8f_grande.jpg",
        "buyPrice": 890,
        "promotionPrice": 800,
    },
    {
        "name": "Nike Út Anh",
        "brand": "Tony",
        "description": "Nike út sờ anh",
        "type": "Nike 98",
        "imageUrl": "https://www.thehypeplace.com/7644-cart_default/nike-dunk-low-next-nature-white-black-w.jpg",
        "buyPrice": 1200,
        "promotionPrice": 1000,
    },
    {
        "name": "Balenciaga Triple S",
        "brand": "Balenciaga",
        "description": "Giày Balenciaga Triple S Trainer White Black Red Rep 1:1 - Mẫu Giày Hot Nhất 2023",
        "type": "Triple S",
        "imageUrl": "https://sneakerhanoi.com/cdn1/images/202111/goods_img/giay-balenciaga-triple-s-trainer-white-black-red-rep-11-P2115-1636202672206.jpg",
        "buyPrice": 500,
        "promotionPrice": 450,
    },
    {
        "name": "WMNS AIR MAX 270 REACT HYPER PINK",
        "brand": "NIKE",
        "description": "Max Air 270 unit and full Nike React foam midsole deliver unrivaled, all-day comfort from heel to toe.",
        "type": "WMNS AIR MAX 270 REACT HYPER PINK",
        "imageUrl": "https://cdn11.bigcommerce.com/s-pbq04mq4he/images/stencil/1280x1280/products/5396/1566/_DSC0622__56903.1670003839.jpg?c=1",
        "buyPrice": 400,
        "promotionPrice": 200,
    }]
      
    return (
        <React.Fragment>
            <Box>
                <HeadSwiper slides={sneakerSlides}/>
                <Intro />
                <LatestProducts images={images}/>
                <ProductCategories/>
                <TrendingProducts products={products}/>
                <DiscountProducts />
                <ViewAll />
            </Box>
        </React.Fragment>
    )
}
export default Body;