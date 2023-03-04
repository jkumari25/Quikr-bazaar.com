import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { TfiMobile } from "react-icons/tfi";
import { GrVend,GrSystem } from "react-icons/gr";
import { MdSportsCricket, MdToys } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

export const BrowseByCategory = () => {
  return (
    <>
      <Text fontSize={"20px"} mt="1rem" textAlign={"left"} ml={[20,20,30,35,40]}>
        Browse by Category
      </Text>

      <SimpleGrid columns={[2, 2, 3, 4, 6]} width="80%" m={"auto"} mt={"1rem"} padding="20px" boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" >
        <Box padding={"5px"} _hover={{backgroundColor:"#0083ca",color:"white",cursor:"pointer"}}>
          <TfiMobile size={35} style={{ margin: "auto" }} />
          <Text>Mobile & Tablets</Text>
        </Box>
        <Box padding={"5px"} _hover={{backgroundColor:"#0083ca",color:"white",cursor:"pointer"}}>
          <GrVend size={35} style={{ margin: "auto" }} />
          <Text>Furniture & Decor</Text>
        </Box>
        <Box padding={"5px"} _hover={{backgroundColor:"#0083ca",color:"white",cursor:"pointer"}}>
          <GrSystem size={35} style={{ margin: "auto" }} />
          <Text>Electronics </Text>
        </Box>
        <Box padding={"5px"} _hover={{backgroundColor:"#0083ca",color:"white",cursor:"pointer"}}>
          <MdSportsCricket size={35} style={{ margin: "auto" }} />
          <Text>Sports & Hobbies</Text>
        </Box>
        <Box padding={"5px"} _hover={{backgroundColor:"#0083ca",color:"white",cursor:"pointer"}}>
          <AiOutlineHome size={35} style={{ margin: "auto" }} />
          <Text>Home & LifeStyle</Text>
        </Box>
        <Box padding={"5px"} _hover={{backgroundColor:"#0083ca",color:"white",cursor:"pointer"}}>
          <MdToys size={35} style={{ margin: "auto" }} />
          <Text>Kids & Toys</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};
