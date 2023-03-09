import React from "react";
import Accessory from "../components/HomePage/Accessory";
import BodyCarousel from "../components/HomePage/BodyCarousel";
import DiscountProducts from "../components/HomePage/DiscountProducts";
import { HeadSwiper } from "../components/HomePage/HeadSwiper";
import { Intro } from "../components/HomePage/Introduce";
import LatestProducts from "../components/HomePage/LatestProducts"
import News from "../components/HomePage/News";
import TrendingProducts from "../components/HomePage/TrendingProducts";
import { ViewAll } from "../components/HomePage/ViewAll";

function Body() {
    const slides = [
        {
            imageUrl: 'https://source.unsplash.com/random/?sneaker',
            altText: 'Slide 1',
        },
        {
            imageUrl: 'https://source.unsplash.com/random/?sneaker',
            altText: 'Slide 1',
        },
        {
            imageUrl: 'https://source.unsplash.com/random/?sneaker',
            altText: 'Slide 1',
        },
        {
            imageUrl: 'https://source.unsplash.com/random/?sneaker',
            altText: 'Slide 2',
        },
        {
            imageUrl: 'https://source.unsplash.com/random/?sneaker',
            altText: 'Slide 3',
        },
    ];
    return (
        <React.Fragment>
            {/* <BodyCarousel /> */}
            <HeadSwiper slides={slides} />
            <Intro />
            <LatestProducts />
            <TrendingProducts />
            <DiscountProducts />
            <Accessory />
            <News />
            <ViewAll />
        </React.Fragment>
    )
}
export default Body;