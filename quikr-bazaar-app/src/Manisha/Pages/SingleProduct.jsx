import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate,Link } from "react-router-dom";
import { getsingleProduct } from "../../Redux/ProductDetails/singleProductAction";
import {
  border,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

import style from "../Componets/styles/ProductDetail.module.css";
import { Navbar } from "../../Mushtaq/Navbar";
import { Footer } from "../../Mushtaq/Footer";


const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, product } = useSelector(
    (store) => store.singleProductManager
  );
  useEffect(() => {
    dispatch(getsingleProduct({ id }));
  }, [id]);
  console.log(product);
  let details = product?.Details || [];

  let hoverimg = (e) => {
    let fullImg = document.getElementById("image-box");
    fullImg.src = e.target.src;
  };
  const columns = useBreakpointValue({
    base: "80%",
    md: "80%",
    lg: "30% 70%",
  });
  const toast = useToast();
  const navigate = useNavigate();

  // Modal

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
    <Navbar/>
    <Box
      id="about"
      paddingY={["20", "40", "90"]}
      h="fit-content"
      boxSize="border-box"
      // border="2px solid red"
      bg="#f3f3f3"
    
    >
      <SimpleGrid
        justifyContent={"center"}
        alignItems="center"
        width={["100%", "90%", "75%"]}
        // border={"3px solid brown"}
        spacing={["10", "20", "25"]}
        margin={"auto"}
        gridTemplateColumns={columns}
      >
        <Stack
          width={["100%", "90%", "100%"]}
          // border={"3px solid green"}
          borderRadius="8"
          bg="white"
          // height={["480"]}
          marginBottom={['0','0',"0" ,"265"]}
          h="fit-content"
          backgroundColor="white"
        >
          <Img
            height={["320px", "350px", "400px"]}
            h="fit-content"
            boxSizing="border-box"
            id="image-box"
            paddingY="20%"
            paddingX="10%"
            width={"100%"}
            src={product.image}
            alt="about"
          />

          <HStack
            paddingBottom={"6"}
            justifyContent="center"
            alignItems="center"
          >
            <Img
              className={style.hvr}
              onMouseOver={hoverimg}
              height="70px"
              border="2px solid gray"
              width="30%"
              src={product.image}
              alt="mobile"
            />
            <Img
              className={style.hvr}
              onMouseOver={hoverimg}
              height="70px"
              border="2px solid gray"
              width="30%"
              src={details[0]?.img2}
              alt="mobile"
            />
            <Img
              className={style.hvr}
              onMouseOver={hoverimg}
              height="70px"
              // border="2px solid gray"
              width="30%"
              src={details[0]?.img1}
              alt="mobile"
            />
          </HStack>
        </Stack>
        <Stack padding="8" backgroundColor="white" borderRadius="8">
          <Stack textAlign="start">
            <Text fontWeight="700" fontSize={["22", "26", "32"]}>
              {product.title}
            </Text>

            <Text
              fontSize={["18px", "20px", "22px"]}
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationColor: "#008bcf ",
                fontWeight: "600",
              }}
            >
              Specifications
            </Text>

            <SimpleGrid  fontSize={["16px", "18px","20", "16px"]} fontWeight={["500","500","500","400"]} columns="2" spacing={"4"}>
              <Text color="gray">RAM</Text>
              <Text>{details[0]?.RAM}</Text>
              <Text color="gray">Storage</Text>
              <Text>{details[0]?.Storage}</Text>
              <Text color="gray">Color</Text>
              <Text>{details[0]?.Color}</Text>
              <Text color="gray">Category</Text>
              <Text>{product.category}</Text>
              <Text color="gray">Location</Text>
              <Text>{product.location}</Text>
              <Text color="gray">Description</Text>
              <Text>{details[0]?.description}</Text>
              <Text color="gray">Address</Text>
              <Text>{details[0]?.Address}</Text>
            </SimpleGrid>
            <Stack
              //  border="2px solid red"
              height="fit-content"
              width="fit-content"
            >
              <Text
                fontSize={["18", "24", "28"]}
                fontWeight={["400", "500", "700"]}
                color="#0083ca"
              >
                ₹ {product.price}
              </Text>
              <HStack paddingY="20px" spacing={["14", "18", "28"]}>
                <Button
                  paddingY={["2", "4", "6"]}
                  fontSize={["12", "16", "20"]}
                  fontWeight={["700"]}
                  paddingX={["5", "20", "30"]}
                  className={style.hvr}
                  bg=""
                  onClick={onOpen}
                >
                  CHAT
                </Button>
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>CHAT</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input ref={initialRef} placeholder="Name" />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Mobile Number</FormLabel>
                        <Input placeholder="Mobile Number" />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Email Address</FormLabel>
                        <Input placeholder="Last name" />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3}>
                        Save
                      </Button>
                      <Button onClick={onClose}>CONTINUE</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

              <Link to="/CartPage">  <Button
                  paddingY={["2", "4", "6"]}
                  fontSize={["12", "16", "20"]}
                  fontWeight={["700"]}
                  paddingX={["2", "6", "10"]}
                  className={style.hvr}
                  bg=""
                  onClick={() => {
                    toast({
                      position: "top",
                      title: "Add To Cart.",

                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                    // setTimeout(() => {
                    //   navigate("/");
                    // }, 2000);
                  }}
                >
                  ADD TO CART
                </Button>
                </Link>
              </HStack>

              <Flex
                // border="2px solid blue"
                height="fit-content"
                width={["100%", "75%", "65%"]}
                justifyContent="space-evenly"
                padding="2"
                borderRadius="6"
                backgroundColor="#f1fcfd"
                textColor="#71d7e8"
              >
                {/* <Stack> */}
                <Stack alignItems={"center"} justifyContent="center">
                  <Img
                    width="50%"
                    // border={"1px solid black"}
                    borderRadius="50%"
                    src="https://teja9.kuikr.com/core/clsfd/assets/ic-get-all-details-2x.png"
                    alt="logo"
                  />
                  <Text>Get all details</Text>
                </Stack>
                <Stack alignItems={"center"} justifyContent="center">
                  <Img
                    width="50%"
                    // border={"1px solid black"}
                    borderRadius="50%"
                    src="https://teja9.kuikr.com/core/clsfd/assets/ic-schedule-visit-bazaar-2x.png"
                    alt="logo"
                  />
                  <Text>Schedule a visit</Text>
                </Stack>
                <Stack alignItems={"center"} justifyContent="center">
                  <Img
                    width="50%"
                    // border={"1px solid black"}
                    borderRadius="50%"
                    src="https://teja9.kuikr.com/core/clsfd/assets/ic-negotiate-2x.png"
                    alt="logo"
                  />
                  <Text>Negotiate price</Text>
                </Stack>

                {/* </Stack> */}
              </Flex>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
    <Footer/>
    </>
  );
};

export default SingleProduct;
