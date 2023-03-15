import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  Img,
} from "@chakra-ui/react";
import styles from "./Styles/MobileAndTablets.module.css";
import { BiRupee } from "react-icons/bi";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const productsAr = [
  {
    id: 1,
    image:
      "https://teja9.kuikr.com/i5/20230120/SONY-WH-1000XM4-VB201705171774173-ak_LWBP216517753-1674236836.webp",
    title: "SONY WH-1000XM4",
    price: "13,500",
    city: "Mumbai",
    price: "13,500",
  },
  {
    id: 2,
    image:
      "https://teja9.kuikr.com/i4/20230120/brand-New-washing-machine-in-almost-new-condition-with-cover-available-for-saleBills-and-warranty-card-available-VB201705171774173-ak_LWBP1561327581-1674236501_lg.webp",
    title: "New washing machine",
    price: "13,500",
    city: "Mumbai",
  },
  {
    id: 3,
    image:
      "https://teja9.kuikr.com/i6/20230120/godrej-refrigerator-190-L-VB201705171774173-ak_LWBP1809870134-1674236460_lg.webp",
    title: "Godrej refrigerator",
    price: "9,500",
    city: "Delhi",
  },
  {
    id: 4,
    image:
      "https://teja9.kuikr.com/i4/20230120/Whirlpool-in-good-condition-with-1-year-warranty-VB201705171774173-ak_LWBP1764123522-1674235907_lg.webp",
    price: "8,500",
    city: "Chennai",
    title: "Whirlpool in good condition",
  },
  {
    id: 5,
    image:
      "https://teja9.kuikr.com/i5/20230120/Washing-machine-good-condition-VB201705171774173-ak_LWBP278382178-1674219200_lg.webp",
    price: "9,500",
    city: "Hyderabad",
    title: "Washing machine",
  },
  {
    id: 6,
    image:
      "https://teja9.kuikr.com/i6/20230113/Xbox-One-s-Gears-of-war-edition-with-2tb-storage-and-disc-drive-VB201705171774173-ak_LWBP1626202625-1673557206.webp",
    price: "11,500",
    city: "Pune",
    title: "Xbox One s Gears ",
  },
  {
    id: 7,
    image:
      "https://teja9.kuikr.com/i6/20230120/selling-for-limited-time-VB201705171774173-ak_WBP642627200-1674232776.png",
    price: "10,500",
    city: "Bangalore",
    title: "Selling for limited time",
  },
  {
    id: 8,
    image:
      "https://teja9.kuikr.com/i6/20230120/Sony-PS3-500gb-with-20-games-VB201705171774173-ak_LWBP1182972551-1674232259_lg.webp",
    price: "12,500",
    city: "Kolkata",
    title: "Sony PS3 500gb",
  },
  {
    id: 9,
    image:
      "https://teja9.kuikr.com/i4/20230120/WhatsApp-8076641990-OnePlus-Y1S-80-cm--32-inch--HD-Ready-LED-Smart-Android-TV-with-Android-11-and-Bezel-Less-Frame-VB201705171774173-ak_LWBP584326926-1674232093.webp",
    price: "9,500",
    city: "Chennai",
    title: "HD Ready LED Smart Android TV",
  },
  {
    id: 10,
    image:
      "https://teja9.kuikr.com/i5/20230119/Lenovo-Thinkpad-T450s-Touchscreen-Laptop-12GB-Ram-and-512GB-SSD-VB201705171774173-ak_LWBP1365777376-1674113751_lg.webp",
    price: "11,500",
    city: "Chennai",
    title: "Lenovo Thinkpad",
  },
];
export const ElectronicsAndAppliancesSlider = () => {
  return (
    <Box
    // border={"2px solid red"}
      className={styles["list-products"]}
      style={{ width: "80%", margin: "auto" }}
    >
      <Box>
        <Flex>
          <Box className={styles.heading}>
            <Text style={{ fontSize: "18px", fontWeight: "600" }}>
              Electronics & Appliances
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Link className={styles.pull_right} to="#">
              View All Results
              <Box className={styles["right-chevron"]}> {">"} </Box>
            </Link>
          </Box>
        </Flex>

        <Box position={"relative"} zIndex="1">
        <Carousel responsive={responsive}>
          {productsAr.map((el) => {
            return (
              <Flex
                className={styles.hvr}
                // className={styles.image_card}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  
                  justifyContent={"center"}
                  alignItems={"center"}
                  padding="2"
                  borderRadius="8"
                  textAlign={"start"}
                  key={el.id}
                >
                  <Img
                    // border={"2px solid green"}
                    marginStart="2"
                    borderRadius="8"
                    className={styles.pic}
                    width={["150", "180", "220px"]}
                    height={["180", "200", "220px"]}
                    src={el.image}
                    alt={el.title}
                  />
                  <p className={styles.title}>{el.title}</p>
                  <Flex
                    justifyContent="flex-start"
                    className={styles.price_city}
                    paddingY="2"
                  >
                    <Box> {el.price}</Box>
                    <Spacer />
                    <Box>{el.city}</Box>
                  </Flex>
                  <Button colorScheme="teal" variant="outline">
                    View
                  </Button>
                </Box>
              </Flex>
            );
          })}
        </Carousel>
        </Box>
      </Box>
    </Box>
  );
};
