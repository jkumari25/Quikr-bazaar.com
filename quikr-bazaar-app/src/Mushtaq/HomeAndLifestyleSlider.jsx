import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import styles from "./Styles/MobileAndTablets.module.css";
import { BiRupee } from "react-icons/bi";
import { border } from "@chakra-ui/react";

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
      "https://teja8.kuikr.com/i5/20230120/2-seater-sofa-set-with-cusions-VB201705171774173-ak_LWBP651326158-1674219539.jpeg",
    title: "2-seater sofa set with cusions.",
    price: "13,500",
    city: "Mumbai",
  },
  {
    id: 2,
    image:
      "https://teja9.kuikr.com/i5/20230120/urgent-sell-money-problem-VB201705171774173-ak_LWBP1530335902-1674219410.jpeg",
    title: "Urgent sell money problem",
    price: "13,500",
  },
  {
    id: 3,
    image:
      "https://teja8.kuikr.com/i4/20230120/-93370--42102---sofa-set-for-sale-in-good-condition-VB201705171774173-ak_LWBP1117493808-1674219065.png",
    title: "sofa set for sale in good condition",
    price: "9,500",
    city: "Delhi",
  },
  {
    id: 4,
    image:
      "https://teja9.kuikr.com/i4/20230120/All-types-of-stone-material-VB201705171774173-ak_WBP745266501-1674218736.png",
    price: "8,500",
    city: "Chennai",
    title: "All types of stone material",
  },
  {
    id: 5,
    image:
      "https://teja9.kuikr.com/i6/20230120/Wheel-Chair-_-Unused-MPR---10-200---Selling-Price---4-000---VB201705171774173-ak_LWBP234110039-1674218891.webp",
    price: "9,500",
    city: "Hyderabad",
    title: "Wheel Chair",
  },
  {
    id: 6,
    image:
      "https://teja9.kuikr.com/i5/20230120/Pierre-Cardin-New-Watch-VB201705171774173-ak_WBP1863025159-1674218069.png",
    price: "11,500",
    city: "Pune",
    title: "Pierre Cardin New Watch",
  },
  {
    id: 7,
    image:
      "https://teja9.kuikr.com/i4/20230120/Dining-table-for-sale-in-good-condition-VB201705171774173-ak_LWBP1795590636-1674218814.webp",
    price: "10,500",
    city: "Bangalore",
    title: "Dining table",
  },
  {
    id: 8,
    image:
      "https://teja9.kuikr.com/i5/20230120/Kurti-set-at-cheaper-VB201705171774173-ak_LWBP596959600-1674218641_lg.webp",
    price: "12,500",
    city: "Kolkata",
    title: "Kurti set at cheaper",
  },
  {
    id: 9,
    image:
      "https://teja9.kuikr.com/i6/20230120/6-seater-Glass-top-Dinning-VB201705171774173-ak_LWBP204947963-1674217599_lg.webp",
    price: "9,500",
    city: "Chennai",
    title: "6 seater Glass top Dinning",
  },
  {
    id: 10,
    image:
      "https://teja9.kuikr.com/i4/20230120/Men-Branded-Watches-For-Men---Women-All-TYps-Laxuary-Branded-WAtch--COD--Availeble-all-india-ship-VB201705171774173-ak_LWBP825574218-1674193251.webp",
    price: "1,00,000",
    city: "Chennai",
    title: "Watches",
  },
];
export const HomeAndLifestyleSlider = () => {
  return (
    <Box
      className={styles["list-products"]}
      style={{ width: "80%", margin: "auto" }}
    >
      <Box>
        <Flex>
          <Box className={styles.heading}>
            <Text style={{ fontSize: "18px", fontWeight: "600" }}>
              Home & Lifestyle
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
                justifyContent={"center"}
                alignItems={"center"}
                className={styles.hvr}
              >
                <Box
                  marginTop="2"
                  key={el.id}
                  // border="2px solid red"
                  padding="2"
                  borderRadius={"8"}
                  textAlign="start"
                >
                  <Img
                    // border={"2px solid brown"}
                    marginStart="3"
                    borderRadius="8"
                    className={styles.pic}
                    width={["150", "180", "180px"]}
                    height={["180", "200", "220px"]}
                    src={el.image}
                    alt={el.title}
                  />
                  <p>{el.title}</p>
                  <Flex justifyContent="flex-start" paddingY="2">
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
