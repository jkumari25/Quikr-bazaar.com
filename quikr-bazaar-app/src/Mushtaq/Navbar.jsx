import {
  Box,
  Flex,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  InputLeftElement,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  HStack,
  SimpleGrid,
  Img,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SlMenu } from "react-icons/sl";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import RapidGrab from "./rapid_grab.jpg";

export const Navbar = () => {
  const columns = useBreakpointValue({
    base: "100%",
    md: "80%",
    lg: "12%50%30%",
  });

  return (
    <Box
      style={{ fontFamily: "ProximaNova-bold,Arial,Helvetica,sans-serif" }}
      padding={"12px"}
      borderBottom={"2px solid lightgrey"}
    >
      <SimpleGrid
        gridTemplateColumns={columns}
        justifyContent="center"
        alignItems={"center"}
      >


        <HStack>
          <SlMenu size={22} />
          <Img width={["20", "30", "30"]} src={RapidGrab} alt="RapidGrab" />
        </HStack>
        
        <HStack spacing={4} ml={"8rem"} mt={[20, 20, 0, 0, 0, 0]}>
          <CiLocationOn />
          <p>All India</p>
          <FiChevronDown />
          <InputGroup borderRadius={"none"} width={"450px"} >
            <InputLeftAddon
              bg={"none"}
              children="All Categories"
              width={"8rem"}
              borderRadius="none"
            />
            <Input type="text" placeholder="Search Products" />

            <InputRightElement width={"10%"} bg="skyblue">
              <CiSearch />
            </InputRightElement>
          </InputGroup>
        </HStack>

        <HStack
           spacing={"2.8rem"}
        >
          <Flex gap={"1.5rem"}>
          <Button _hover={"none"} bg={"none"} >
            <VscAccount size={22}  />
          </Button>
          <Button _hover={"none"} bg={"none"} width="0.5rem" >
            Login/Register
          </Button>
        </Flex>
          <Button
            bg={"#fcec52"}
          >Post Free Add</Button>
        </HStack>
      </SimpleGrid>
     
    </Box>
  );
};
