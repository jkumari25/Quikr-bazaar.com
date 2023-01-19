import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const productsAr = [
  {id:1, image:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png", title:"All Furnitures"  },
  {id:2, image:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png", title:"All Electronics"  },
  {id:3, image:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png", title:"Sofa Sets"  },
  {id:4, image:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/bed.png", title:"Bed Sets"  },
  {id:5, image:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png", title:"Wardrobes"  },
  {id:6, image:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png", title:"TVs"  },
  {id:7, image:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png", title:"Laptops"  },
  {id:8, image:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png", title:"Refrigerators"  },
  {id:9, image:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png", title:"Recliners"  },
  {id:10,image:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/dining-tables.png", title:"Dining Tables"  },
]

const PopularProductsSlider = () => {
  return (
    <Box>
      <h1>Most Popular Product</h1>
      <Carousel responsive={responsive}>
        {
          productsAr.map((el) => {
            return <Flex justifyContent={"center"} alignItems={"center"}>
              <Box key={el.id}>
                <img src={el.image} alt={el.title} />
                <p>{el.title }</p>
              </Box>
            </Flex>
          })
        }
      </Carousel>
    

    </Box>
  );
}

export default PopularProductsSlider;
