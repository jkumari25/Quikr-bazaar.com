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
    position,
  } from "@chakra-ui/react";
  import styles from "./Styles/Navbar.module.css";
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
      <Flex
        justifyContent={"center"}
        style={{ fontFamily: "ProximaNova-bold,Arial,Helvetica,sans-serif" }}
        borderBottom={"2px solid lightgrey"}
        top="0"
        position="sticky"
        backgroundColor="white"
        className={styles.navbar}
        zIndex="1"
        height={['28']}
        >
        <SimpleGrid
          gridTemplateColumns={columns}
          justifyContent="center"
          alignItems={"center"}
        >
          <HStack ml={"2rem"}>
            <SlMenu size={100} />
            <Img width={["20", "30", "30"]} src={RapidGrab} alt="RapidGrab" />
          </HStack>
  
          <HStack spacing={4} mt={[20, 20, 0, 0, 0, 0]}>
            <CiLocationOn style={{marginLeft: "2rem"}} />
            <p>All India</p>
            <FiChevronDown />
  
            <InputGroup borderRadius={"none"} width={"450px"}>
              <InputLeftAddon
                bg={"none"}
                children="All Categories"
                width={"8rem"}
                borderRadius="none"
              />
              <Input type="text" placeholder="Search Products" />
  
              <InputRightElement width={"10%"} bg="#0083ca" color={"white"}>
                <CiSearch size={"20px"} />
              </InputRightElement>
            </InputGroup>
          </HStack>
  
          <HStack spacing={"2.8rem"}>
            <Flex gap={"1.5rem"}>
              <Box></Box>
              <Box></Box>
              <Button _hover={"none"} bg={"none"}>
                <VscAccount size={22} />
              </Button>
              <Button _hover={"none"} bg={"none"} width="0.5rem">
                Login/Register
              </Button>
            </Flex>
            <Button bg={"#fcec52"}>Post Free Add</Button>
          </HStack>
        </SimpleGrid>
      </Flex>
    );
  };
  