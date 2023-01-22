import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import style from "./styles/ProductCard.module.css";

const ProductCard = ({ image, category, title, desc, location, price }) => {
  return (
    <SimpleGrid
      className={style.hovr}
      // border={"2px solid"}
      paddingY="3"
      columns={['1','2','3']}
      paddingX={['0','2','4']}
      gap={"60px"}
      marginTop="40px"
      borderRadius="8px"
      bg={"white"}
      marginStart={['16','10','0']}
      //  justifyContent="space-between"
    >
      {/* <HStack backgroundColor="white" border="2px solid brown"> */}
      <Stack
        // border=" 2px solid red"
        width="100%"
      >
        <Img
          borderRadius="8px"
          width={["280px", "300px", "240px"]}
          height={["200px", "250px", "280px"]}
          src={image}
          alt="image"
        />
      </Stack>

      <Stack textAlign={"start"}>
        <Text
          fontSize={['18','18','18']}
          fontWeight={["500", "500", "600"]}
          color="#008bcf"
        >
          {title}
        </Text>

        <Text color="gray">{category}</Text>
        <Text color="gray">{desc}</Text>
        <Text color="gray">{location}</Text>
      </Stack>
      <Stack
       w={['100%','100%','60%']}
        // border={"2px solid red"}
      >
        <Text
          fontSize={["18", "18", "22"]}
          fontWeight={["400", "400", "600"]}
          color="#0083ca"
        >
          Starting from
        </Text>
        <Text
          fontSize={["20", "24", "28"]}
          fontWeight={["400", "500", "700"]}
          color="#0083ca"
          paddingBottom={"16px"}
        >
          {" "}
          ₹{price}
        </Text>
        <Button className={style.hvr} bg="" padding="4">
          View Details
        </Button>
      </Stack>

      {/* </HStack> */}
    </SimpleGrid>
  );
};

export default ProductCard;
