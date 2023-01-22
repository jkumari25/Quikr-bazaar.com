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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { SlMenu } from "react-icons/sl";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import RapidGrab from "./rapid_grab.jpg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const columns = useBreakpointValue({
    base: "100%",
    md: "80%",
    lg: "12%50%30%",
  });

  const navigate=useNavigate();
  return (
    <Flex
    justifyContent={"center"}
    style={{ fontFamily: "ProximaNova-bold,Arial,Helvetica,sans-serif" }}
    borderBottom={"2px solid lightgrey"}
    top="0"
    position="sticky"
    backgroundColor="white"
    zIndex="1"
    height={['28']}
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
            <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton 
       isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Login' : 'Login'}
      </MenuButton>
      <MenuList>
      <Button backgroundColor={"blue"}  margin={".5rem"}><MenuItem color={"black"} onClick={() => navigate("/admin")}>Admin</MenuItem></Button> 
      <Button backgroundColor={"green"}><MenuItem  onClick={() => navigate("/login")}>User</MenuItem></Button> 
      </MenuList>
    </>
  )}
</Menu>
          <Button marginLeft={"-21px"}
          onClick={() => navigate("/signup")}>
            Register
          </Button>
       
          <Button
            
            
            
            bg={"#fcec52"}
            >Post Free Add</Button>
             </Flex>
        </HStack>
      </SimpleGrid>
     
    </Flex>
  );
};
