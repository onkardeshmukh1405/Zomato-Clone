import React from 'react'
import "./topBrands.css";
import Slider from "react-slick";
import NextArrow from '../../Commom/carousel/nextarrow';
import PreArrow from '../../Commom/carousel/preArrow';

const TopBrandsList =[
    {
        id: 1,
        time: "26 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png",
    },
    {
        id: 2,
        time: "37 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png",
    },
    {
        id: 3,
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5a27a3f43344ecdb49c575d0284ebc40_1629438578.png",
    },
    {
        id: 4,
        time: "41 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
    },
    {
        id: 5,
        time: "40 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7b151c330d82c3f35e211dd8e5b06a411705813727.png",
    },
    {
        id: 6,
        time: "48 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png",
    },
    {
        id: 7,
        time: "41 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png",
    },
    {
        id: 8,
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655798578.png",
    },
    {
        id: 9,
        time: "40 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/05a2c24a8de3f8fe07fc46a07fdbba99_1611576819.png",
    },
    {
        id: 10,
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/dc25345966698c3077d648ecf3c5b3d1_1643349142.png",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PreArrow/>,
  };

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
    <div className="collection-title">Top brands for you</div>
    <Slider {...settings}>
    {TopBrandsList.map((brand)=> {
        return <div>
            <div className="top-brands-cover">
                <img src={brand.cover} className="top-brands-image" alt={brand.time} />
            </div>
        </div>
    })} </Slider>
    </div>
  )
}

export default TopBrands