import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../../Redux/cart/action";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { useEffect } from "react";

import { Footer } from "../../Mushtaq/Footer";

// import { cartData } from './_data'
import WithSubnavigation from './../../Mushtaq/WithSubNavigation';

export const CartPage = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItem());
  }, []);
  // console.log(cart);
  return (
    <>
      <Box pt="30px">
       <WithSubnavigation/>
      </Box>
      <Box
        margin="120px"
        // mt="5em"
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart (3 items)
            </Heading>

            <Stack spacing="6">
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary cart={cart} />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};
