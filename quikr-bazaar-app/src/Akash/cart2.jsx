import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "../Components/Navbar";
const CartPage = () => {
  const toast = useToast();
  const { userData } = useSelector((store) => {
    console.log("store", store);
    return store.authReducer;
  });

  const navigateTo = useNavigate();
  const goto = (path) => {
    navigateTo(path);
  };
  const dispatch = useDispatch();
  const [bag, setBag] = useState([]);
  const [coupon, setCoupon] = useState({
    applied: false,
    percent: 10,
  });
  useEffect(() => {
    console.log("userdata", userData);
    if (!userData || JSON.stringify(userData) === "{}") {
      navigateTo("/login");
      toast({
        title: "Please SignIn First.",

        status: "success",
        duration: 6000,
        isClosable: true,
      });
      return;
    }
  }, [userData]);
  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setBag(cart);
    }
  }, []);
  const RemoveProduct = (product) => {
    let newArr = [];
    let flag = 0;
    newArr = bag.filter((item) => {
      if (item.name === product.name) {
        if (flag === 0) {
          flag = 1;
          return false;
        } else {
          return true;
        }
      } else {
        return item.name !== product.name;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newArr));
    setBag(newArr);
  };
  const Calculate = (type) => {
    let result = 0;
    if (type === "producttotal") {
      bag.forEach((item) => {
        result += item.price;
      });
    }
    if (type === "producttotal_coupon_applied") {
      bag.forEach((item) => {
        result += item.price;
      });
      // check for coupon
      if (coupon.applied) {
        result = (result - (result * coupon.percent) / 100).toFixed(2);
      }
      //
    }
    // if (type === "discount") {
    //   bag.forEach((item) => {
    //     result += item.price;
    //   });
    //   result -= 100;
    // }
    if (type === "checkouttotal") {
      bag.forEach((item) => {
        result += item.price;
      });
      result += 65;
    }
    if (type === "checkouttotal_coupon_applied") {
      bag.forEach((item) => {
        result += item.price;
      });
      result += 65;
      // check for coupon
      if (coupon.applied) {
        result = (result - (result * coupon.percent) / 100).toFixed(2);
      }
      //
    }
    return result;
  };
  const ApplyCoupon = () => {
    console.log("applying coupon");
    setCoupon((prev) => {
      return {
        ...prev,
        applied: !prev.applied,
      };
    });
  };
  const Pay = () => {
    localStorage.setItem(
      "payableAmount",
      coupon.applied
        ? Calculate("checkouttotal_coupon_applied")
        : Calculate("checkouttotal")
    );
    toast({
      title: "Please Provide your shipping Address ",
      description: "And Choose Payment Method",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    navigateTo("/payment");
  };
  return (
    <div>
      <Navbar />

      <Box padding={"20px"}>
        {bag.length === 0 ? (
          <Box>
            <Heading> Cart is Empty</Heading>
            <Image
              src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
              alt="err"
              margin={"auto"}
            />
          </Box>
        ) : null}
        <Box
          display={{ lg: "flex", sm: "grid" }}
          marginTop="50px"
          justifyContent="space-around"
          // direction={{ base: "column", sm: "row" }}
        >
          <Box>
            {bag.map((item) => {
              return (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  // overflow="hidden"
                  variant="outline"
                  marginBottom="20px"
                  marginLeft={"20px"}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={item.img1}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody gap={"20px"} display={"grid"}>
                      <Heading size="lg">{item.brand}</Heading>

                      <Heading size={"md"}>{item.title}</Heading>
                      <Heading size={"sm"}>Rs : {item.price}</Heading>
                    </CardBody>

                    <CardFooter gap={"20px"}>
                      <Text display={"flex"}>
                        <Text marginTop={"10px"}>Quantity</Text>
                        <Select
                          variant="solid"
                          colorScheme="blue"
                          placeholder="1"
                        >
                          <option value="option1"> 2</option>
                          <option value="option2"> 3</option>
                          <option value="option3"> 4</option>
                        </Select>
                      </Text>

                      <Button
                        variant="solid"
                        backgroundColor={"#D3145A"}
                        color="white"
                        onClick={() => {
                          RemoveProduct(item);
                        }}
                      >
                        Delete
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              );
            })}
          </Box>
          {bag.length !== 0 ? (
            <Box width={{ lg: "35%" }}>
              <Card
                // direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                padding={"10px"}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Image
                    height={"40px"}
                    src="https://img0.junaroad.com/images/icons/coupon_icon_v2.png"
                  />
                  <Box>
                    <Heading size={"sm"}>APPLY COUPON CODE</Heading>
                    <Text size={"sm"}>10% OFF</Text>
                  </Box>
                  <Button
                    variant="solid"
                    backgroundColor={"#D3145A"}
                    color="white"
                    onClick={ApplyCoupon}
                  >
                    {coupon.applied ? "Remove" : "Apply"}
                  </Button>
                </Box>
                <Box>
                  <Heading>Summary</Heading>
                  <Box
                    marginBottom={"20px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Heading size={"sm"} fontWeight={"medium"}>
                      Total Price
                    </Heading>
                    <Heading fontWeight={"medium"} size={"sm"}>
                      {coupon.applied ? (
                        <Text fontSize="xl" className="colored-text">
                          Rs.{Calculate("producttotal_coupon_applied")}
                        </Text>
                      ) : null}
                      <Text
                        fontSize={`${coupon.applied ? "l" : "xl"}`}
                        className={`${coupon.applied ? "strike-text" : ""}`}
                      >
                        Rs.{Calculate("producttotal")}
                      </Text>
                    </Heading>
                  </Box>
                  <Box
                    marginBottom={"20px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Heading fontWeight={"medium"} size={"sm"}>
                      Shipping Charges
                    </Heading>
                    <Heading
                      size={"sm"}
                      fontWeight={"medium"}
                      color="green.400"
                    >
                      FREE
                    </Heading>
                  </Box>
                  <Box
                    marginBottom={"20px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Heading size={"sm"} fontWeight={"medium"}>
                      Applicable Tax And Charges ⓘ
                    </Heading>
                    <Heading size={"sm"} fontWeight={"medium"}>
                      Rs.65
                    </Heading>
                  </Box>
                  <Box
                    marginBottom={"20px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Heading
                      size={"sm"}
                      fontWeight={"medium"}
                      color={"#D3145A"}
                    >
                      Amount Payable
                    </Heading>
                    <Heading size={"sm"} fontWeight={"medium"}>
                      {coupon.applied ? (
                        <Text fontSize="xl" className="colored-text">
                          Rs.{Calculate("checkouttotal_coupon_applied")}
                        </Text>
                      ) : null}
                      <Text
                        fontSize={`${coupon.applied ? "l" : "xl"}`}
                        className={`${coupon.applied ? "strike-text" : ""}`}
                      >
                        Rs.{Calculate("checkouttotal")}
                      </Text>
                    </Heading>
                  </Box>
                  <Button
                    backgroundColor={"#D3145A"}
                    color="white"
                    onClick={Pay}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Card>
            </Box>
          ) : null}
        </Box>
      </Box>
    </div>
  );
};

export default CartPage;