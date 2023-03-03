import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Radio,
  Image,
  useToast,
  Card,
} from "@chakra-ui/react";
import { useRef } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { Footer } from "../Mushtaq/Footer";
import WithSubnavigation from "../Mushtaq/WithSubNavigation";


const Payment = () => {
  const [payableAmount, setPayableAmount] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [cardNumber, setCardnumber] = useState("");
  const [cardname, setCardname] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [upi, setUpi] = useState("");
  const [cash, setCash] = useState("");
  const [register, setRegister] = useState("");
  const [password, setPassword] = useState("");
  const [register2, setRegister2] = useState("");
  const [password2, setPassword2] = useState("");
  const toast = useToast();
  const navigateTo = useNavigate();

  useEffect(() => {
    setPayableAmount(localStorage.getItem("payableAmount") || 0);
    // cleanup
    return () => {
      localStorage.removeItem("payableAmount");
    };
  }, []);

  const handleSubmit = () => {
    toast({
      title: "Processing...",
      status: "info",
      duration: 2500,
      isClosable: true,
    });
    setTimeout(() => {
      toast({
        title: "Order Placed Successfully",
        status: "success",
        duration: 3500,
        isClosable: true,
      });
      navigateTo("/homepage");
    }, 2500);
    // navigate("/Otp")
  };
  return (
    <div>
      <WithSubnavigation/>
      <Box
        display={{ lg: "flex", md: "flex", sm: "grid" }}
        gap="20px"
        padding={"30px"}
        justifyContent="space-between"
        align={"center"}
        justify={"center"}
      >
        <Box
          width={"45%"}
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          borderRadius="20px"
          height={"80vh"}
        >
          <Flex
            // minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Please Fill Address For Shipping
                </Heading>
                {/* <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool features ✌
                </Text> */}
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="PinCode" isRequired>
                        <FormLabel>Pin Code</FormLabel>
                        <Input type="number" />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="MobileNo">
                        <FormLabel>Mobile Number</FormLabel>
                        <Input type="number" value="8558021138" />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="name" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl id="HouseAddress" isRequired>
                    <FormLabel>Flat / House no/ Building Name</FormLabel>
                    <Input type="text" />
                    {/* <InputGroup>
                      <Input type={showPassword ? "text" : "password"} />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup> */}
                  </FormControl>
                  <HStack>
                    <Box>
                      <FormControl id="city" isRequired>
                        <FormLabel>City</FormLabel>
                        <Input type="text" />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="state">
                        <FormLabel>State</FormLabel>
                        <Input type="text" />
                      </FormControl>
                    </Box>
                  </HStack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Box>
        <Box
          width={"45%"}
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          borderRadius="20px"
        >
          <Card padding={"20px"}>
            <Heading color={"green"}>
              {" "}
              Payable Amount - Rs. {payableAmount}
            </Heading>
            <Box
              textAlign="left"
              mt={5}
              pt={3}
              pl={2}
              width="100%"
              height="100%"
            >
              <Text fontSize={15} as="b">
                Choose Any One Option
              </Text>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" textAlign="left" display="flex">
                        <Box pr={2} mt={5}>
                          {" "}
                          <Image
                            w="20px"
                            h="20px"
                            src="https://tse2.mm.bing.net/th?id=OIP.F2WzA_N_bDQn2WSA8AolfAHaF7&pid=Api&P=0"
                          />{" "}
                        </Box>
                        <Box pr={1} mt={5}>
                          CREDIT/DEBIT CARDS{" "}
                        </Box>
                      </Box>
                      <AccordionIcon mt={5} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Stack>
                        <Box display="flex">
                          <Input
                            type="number"
                            name="alternumber"
                            placeholder="Card Number "
                            variant="flushed"
                            maxLength="12"
                            value={cardNumber}
                            onChange={(e) => {
                              setCardnumber(e.target.value);
                            }}
                          />{" "}
                          <Image
                            w="20px"
                            h="20px"
                            className="user"
                            src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                            alt="user"
                          />{" "}
                        </Box>
                        <Box display="flex">
                          <Input
                            type="text"
                            name="alternumber"
                            placeholder="Card UserName"
                            variant="flushed"
                            value={cardname}
                            onChange={(e) => {
                              setCardname(e.target.value);
                            }}
                          />{" "}
                          <Image
                            w="20px"
                            h="20px"
                            className="user"
                            src="https://cdn-icons-png.flaticon.com/512/875/875610.png"
                            alt="user"
                          />
                        </Box>
                        <Box display="flex" mt={8}>
                          <Box>
                            <Input
                              type="number"
                              name="mobile"
                              maxLength="2"
                              placeholder="Month"
                              variant="flushed"
                              value={month}
                              onChange={(e) => {
                                setMonth(e.target.value);
                              }}
                            />
                          </Box>
                          <Box pl={4}>
                            <Input
                              type="number"
                              name="alternumber"
                              placeholder="Year"
                              maxLength="4"
                              variant="flushed"
                              value={year}
                              onChange={(e) => {
                                setYear(e.target.value);
                              }}
                            />
                          </Box>
                          <Box pl={4} display="flex">
                            <Input
                              type="number"
                              name="alternumber"
                              placeholder="cvv"
                              maxLength="3"
                              variant="flushed"
                              value={cvv}
                              onChange={(e) => {
                                setCvv(e.target.value);
                              }}
                            />
                            <Image
                              w="15px"
                              h="15px"
                              className="user"
                              src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                              alt="user"
                            />
                          </Box>
                        </Box>
                        <Box>
                          <Button onClick={handleSubmit}>Pay Now </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        mt={5}
                        flex="1"
                        textAlign="left"
                        display="flex"
                      >
                        <Box pr={2} mt={5}>
                          {" "}
                          <Image
                            w="20px"
                            h="20px"
                            src="https://tse1.mm.bing.net/th?id=OIP.XjrLqW94tDW93_Tq_7JWzAHaHa&pid=Api&P=0"
                          />
                        </Box>{" "}
                        <Box pr={1} mt={5}>
                          {" "}
                          UPI PAYMENT
                        </Box>
                      </Box>

                      <AccordionIcon mt={5} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Stack>
                        <Box pl={4}>
                          <Input
                            type="email"
                            name="alternumber"
                            placeholder="Ex- mobileno@ybl or userid@okhdfcbank"
                            variant="flushed"
                            value={upi}
                            onChange={(e) => {
                              setUpi(e.target.value);
                            }}
                          />
                        </Box>
                        <Box>
                          <Button onClick={handleSubmit}>Pay Now </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        mt={5}
                        flex="1"
                        textAlign="left"
                        display="flex"
                      >
                        <Box pr={2} mt={5}>
                          <Image
                            w="20px"
                            h="20px"
                            src="https://tse1.mm.bing.net/th?id=OIP.frkMALy3NuQXFoJ1hSlYHwAAAA&pid=Api&P=0"
                          />
                        </Box>{" "}
                        <Box pr={1} mt={5}>
                          {" "}
                          CASH ON DELIVERY
                        </Box>
                      </Box>
                      <AccordionIcon mt={5} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Stack>
                        <Box pl={4}>
                          <Radio
                            size="md"
                            name="1"
                            colorScheme="green"
                            value={cash}
                            onChange={(e) => {
                              setCash(e.target.value);
                            }}
                          >
                            cash on delivery
                          </Radio>
                        </Box>
                        <Box>
                          <Button onClick={handleSubmit}>Pay Now </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        mt={5}
                        textAlign="left"
                        display="flex"
                      >
                        <Box pr={2} mt={5}>
                          <Image
                            w="20px"
                            h="20px"
                            src="https://tse4.mm.bing.net/th?id=OIP.s5ks8hCxIrrGy09rFRF21wHaHa&pid=Api&P=0"
                          />
                        </Box>{" "}
                        <Box pr={1} mt={5}>
                          {" "}
                          MOBILE BANKING
                        </Box>
                      </Box>
                      <AccordionIcon mt={5} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Stack>
                        <Box>
                          <Input
                            type="number"
                            value={register}
                            onChange={(e) => {
                              setRegister(e.target.value);
                            }}
                            placeholder="Registered No."
                            variant="flushed"
                          />
                          <Input
                            type="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            placeholder="password"
                            variant="flushed"
                          />
                        </Box>
                        <Box>
                          <Button onClick={handleSubmit}>Pay Now </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        mt={5}
                        flex="1"
                        textAlign="left"
                        display="flex"
                      >
                        <Box pr={2} mt={5}>
                          <Image
                            w="20px"
                            h="20px"
                            src="https://tse3.mm.bing.net/th?id=OIP.E9dKeQ_vx1MUbLp63z3WigHaHa&pid=Api&P=0"
                          />
                        </Box>{" "}
                        <Box pr={2} mt={5}>
                          {" "}
                          NET BANKING
                        </Box>
                      </Box>

                      <AccordionIcon mt={5} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Stack>
                        <Box>
                          <Input
                            type="number"
                            value={register2}
                            onChange={(e) => {
                              setRegister2(e.target.value);
                            }}
                            placeholder="Registered No."
                            variant="flushed"
                          />
                          <Input
                            type="password"
                            value={password2}
                            onChange={(e) => {
                              setPassword2(e.target.value);
                            }}
                            placeholder="password"
                            variant="flushed"
                          />
                        </Box>

                        <Box>
                          <Button onClick={handleSubmit}>Pay Now </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Card>
        </Box>
        {/* <Otp /> */}

      </Box>
      <Footer />
    </div>
  );
};

export default Payment;