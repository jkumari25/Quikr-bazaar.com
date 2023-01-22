import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
  import { formatPrice } from './PriceTag'

 
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
  
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = ({cart}) => {
    const price=cart.reduce((prev,el)=>prev+el.price,0)
    // console.log(price)
    const navigate=useNavigate()
    const handleClick=()=>{
      navigate("/success");
    }

 
  // export const CartOrderSummary = () => {
   
  //   }
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(price)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(price)}
            </Text>
          </Flex>
        </Stack>
       
        <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />} onClick={handleClick}>
         Checkout
        </Button>
       
      </Stack>
    )
  }