import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { TfiMobile } from "react-icons/tfi";
import { GrVend,GrSystem } from "react-icons/gr";
import { MdSportsCricket,MdToys } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

export const BrowseByCategory = () => {
  return (
    <>
      <Text
        textAlign={"left"}
        ml={[12, 20, 28, 40, 40, 40]}
        fontSize={"20px"}
        mt="1rem"
      >
        Browse by Category
      </Text>
      
        <SimpleGrid columns={[1,1,2,4,6]}  boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" width={"80%"} m="auto">
          <Box  padding="5px" _hover={{background:"#008BCF"}}>
            <TfiMobile size={35} style={{ margin:"auto" }} />
            <Text>Mobile & Tablets</Text>
          </Box>
          <Box padding="5px" _hover={{background:"#008BCF"}}>
            <GrVend size={35} style={{ margin:"auto" }} />
            <Text>Furniture & Decor</Text>
          </Box>
          <Box padding="5px" _hover={{background:"#008BCF"}}>
            <GrSystem size={35} style={{ margin:"auto" }} />
            <Text>Electronics</Text>
          </Box>
          <Box padding="5px" _hover={{background:"#008BCF"}}>
            <MdSportsCricket size={35} style={{ margin:"auto" }} />
            <Text>Sports & Hobbies</Text>
          </Box>
          <Box padding="5px" _hover={{background:"#008BCF"}}>
            <AiOutlineHome size={35} style={{ margin:"auto" }} />
            <Text>Home & LifeStyle</Text>
          </Box>
          <Box padding="5px" _hover={{background:"#008BCF"}}>
            <MdToys size={35} style={{ margin:"auto" }} />
            <Text>Kids & Toys</Text>
          </Box>
        </SimpleGrid>
     
    </>
  );
};
