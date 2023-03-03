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
  Image,
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
      "https://teja9.kuikr.com/i5/20230119/OPPO-A77---mystery-orange--4GB---4GB--128-GB---VB201705171774173-ak_LWBP1076304187-1674139067.png",
    title: "Apple iphone",
    price: "13,500",
    city: "Mumbai",
  },
  {
    id: 2,
    image:
      "https://teja9.kuikr.com/i4/20230119/Rog-5s-12-256-VB201705171774173-ak_LWBP1304927883-1674134122.png",
    title: "All Electronics",
    price: "13,500",
  },
  {
    id: 3,
    image:
      "https://teja10.kuikr.com/i5/20230120/phone-in-gud-conditiononly-side-but-misssing--VB201705171774173-ak_LWBP1977897106-1674188176.jpeg",
    title: "Samsung",
    price: "9,500",
    city: "Delhi",
  },
  {
    id: 4,
    image:
      "https://teja10.kuikr.com/i5/20221102/9289238871-WhatsApp---call-me-new-brand-warranty-card-bill-box--all-accessories-VB201705171774173-ak_LWBP1022016775-1667392939.jpeg",
    price: "8,500",
    city: "Chennai",
    title: "Apple iphone",
  },
  {
    id: 5,
    image:
      "https://teja8.kuikr.com/i5/20230120/Call-Me-98396-74107-APPLE-iPHONE-X-256GB--ALL-ACCESSORIES--REPLACEMENT-WARRANTY-WITH-BILL-BOX-AVAILABLE-VB201705171774173-ak_LWBP233212309-1674184941.jpeg",
    price: "9,500",
    city: "Hyderabad",
    title: "Samsung",
  },
  {
    id: 6,
    image:
      "https://teja10.kuikr.com/i6/20230119/Sale-98385-95448-Apple-iPhone-X-256GB--58-Inches-OLED-Screen--Apple-A11-Bionic-Processor--12-12MP-Rear-Camera-with-6-months-brand-warranty-and-accessories-VB201705171774173-ak_LWBP1339289414-1674107323.jpeg",
    price: "11,500",
    city: "Pune",
    title: "Apple iphone",
  },
  {
    id: 7,
    image:
      "https://teja8.kuikr.com/i6/20230119/Sale-98385-95448-Apple-iPhone-X-256GB--58-Inches-OLED-Screen--Apple-A11-Bionic-Processor--12-12MP-Rear-Camera-with-6-months-brand-warranty-and-accessories-VB201705171774173-ak_LWBP1474916135-1674107457.jpeg",
    price: "10,500",
    city: "Bangalore",
    title: "Samsung",
  },
  {
    id: 8,
    image:
      "https://teja8.kuikr.com/i4/20230119/Sale-98385-95448-Apple-iPhone-X-256GB--58-Inches-OLED-Screen--Apple-A11-Bionic-Processor--12-12MP-Rear-Camera-with-6-months-brand-warranty-and-accessories-VB201705171774173-ak_LWBP1473647682-1674107707.jpeg",
    price: "12,500",
    city: "Kolkata",
    title: "Samsung",
  },
  {
    id: 9,
    image:
      "https://teja8.kuikr.com/i5/20230119/Sale-98385-95448-Apple-iPhone-X-256GB--58-Inches-OLED-Screen--Apple-A11-Bionic-Processor--12-12MP-Rear-Camera-with-6-months-brand-warranty-and-accessories-VB201705171774173-ak_LWBP391893820-1674107534.jpeg",
    price: "9,500",
    city: "Chennai",
    title: "Apple iphone",
  },
  {
    id: 10,
    image:
      "https://teja8.kuikr.com/i5/20230119/Sale-98385-95448-Apple-iPhone-X-256GB--58-Inches-OLED-Screen--Apple-A11-Bionic-Processor--12-12MP-Rear-Camera-with-6-months-brand-warranty-and-accessories-VB201705171774173-ak_LWBP1261272097-1674108131.jpeg",
    price: "11,500",
    city: "Chennai",
    title: "Samsung",
  },
];
export const MobileAndTabletsSlider = () => {
  return (
    <Box
      className={styles["list-products"]}
      style={{ width: "80%", margin: "auto" }}
    >
      <Box>
        <Flex>
          <Box className={styles.heading}>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Mobile & Tablets
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
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  padding="2"
                  borderRadius="8"
                  textAlign={"start"}
                  key={el.id}
                >
                  <Image
                    borderRadius="8"
                    className={styles.pic}
                    width={["150", "180", "220px"]}
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
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    className={styles.view}
                  >
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
