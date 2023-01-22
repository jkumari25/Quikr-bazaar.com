import { Box, HStack , Image , Text ,VStack , Heading, Divider , Input} from '@chakra-ui/react'
import React from 'react';
import RapidGrab from "./rapid_grab.jpg";
import { border } from '@chakra-ui/react';
export const Footer = () => {
  return (
   <Box height={"600px"} width={"100%"} mt={{sm:"8rem",md:"8rem",lg:"8rem",xl:"8rem"}}  >
  <HStack gap={"50px"} width={"70%"} align={"start"} margin={"50px 100px"}>
  <Image  width={"10%"}  src={RapidGrab}  alt={"RapidGrab"}/>
    <Text color={"gray"} align={"start"} paddingTop="28px"  >RapidGrab.com is one of India’s most trusted Electronics and Appliances Platform, dispensing quality digital Products and devices at reasonable prices to over 7 million happy customers – PAN India.</Text>
   
  </HStack>

  <HStack width={"100%"}   margin={"auto"} align={"start"} justifyContent={"space-evenly"}>

<VStack align={"start"}>
     <Text fontWeight={"bold"}>Company</Text>   
     <Text>About RapidGrab</Text>   
     <Text>Customers Speak</Text>   
     <Text>In The News</Text>   
     <Text>Career</Text>   
     <Text>Terms and Conditions</Text>   
     <Text>Privacy Poloicy</Text>   
     <Text>Fees and Payments Policy</Text>   
     <Text>Shipping and Delivery Policy</Text>   
     <Text>Return , Refund and Cancellation Policy</Text> 
     <Text>Contact</Text>  
</VStack>

<VStack align={"start"}>
    <Text fontWeight={"bold"}>SHOPPING</Text>
     <Text>Browse by A-Z</Text>   
     <Text>Browse by Manufacturers</Text>   
     <Text>Health Articles</Text>   
     <Text>Offers / Coupons</Text>   
     <Text> FAQs</Text>   
       
</VStack>

<VStack align={"start"}>
    <Text fontWeight={"bold"}>SOCIAL</Text>
     <Text>Patients Alike</Text>   
     <Text>Facebook</Text>   
     <Text>Twitter</Text>   
     <Text>Linkedin</Text>   
     <Text>Youtube</Text>   
     <Text>Refer & Earn</Text>   
     
</VStack>

<VStack width={"20%"} align={"start"}>
     <Text align={"start"} fontWeight={"bold"}>SUBSCRIBE TO OUR NEWSLETTER</Text>   
     <Text align={"start"}>Get a free subscription to our different digital products tip and stay tuned to our latest offers</Text>
     <Input variant='flushed' placeholder='Enter your email address'  />
    
    <HStack width={"35%"}>
        <Image src='https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png' alt =" "/>
        <Image src='https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png' alt =" "/>
    </HStack>
</VStack>
</HStack>
<Divider  width={"78%"} color={"gray"} margin={"30px 165px "} orientation='horizontal'  /> 
  <HStack color={"gray"} width={"100%"} justifyContent={"space-evenly"} >
  
  <Text>Electronics</Text>
  <Text>Home & LifeStyle</Text>
  <Text>Kids & Toys</Text>
  <Text>Sports, Hobbies & Fashion</Text>
  <Text>Copyright© 2023. All Rights Reserved.</Text>
  </HStack>

      </Box>
  )
}