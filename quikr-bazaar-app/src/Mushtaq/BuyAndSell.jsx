import { Box, Divider, Flex, Heading, ListItem, SimpleGrid,UnorderedList } from '@chakra-ui/react';
import styles from "./Styles/BuyAndSell.module.css";
import { BsChevronRight } from "react-icons/bs";
import { Text } from '@chakra-ui/react';
export const BuyAndSell = () => {
    const firstBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: "380px",
        height:"75px",
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background:
            
          'url(https://lh3.googleusercontent.com/ny6yIMHQNKzKku386EezxE-AJohpXuMXQcqEMl3uJNMndVi0IaoX-MY-V6QtJXzvCyXSafIIzpFirwb4st8tnllRlOgjKpW-Yl6d_j4=s755) center/cover no-repeat',
    }
    const secondBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: "380px",
        height:"75px",
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background: 'url(https://images.squarespace-cdn.com/content/v1/56af5cef76d99c5d80404e26/1580913689004-RLHH6KG5U606CY2OVMFC/American+Relaxation+Room+Scene+2L.jpg?format=300w) center/cover no-repeat'
    }
    const thirdBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: "380px",
        height:"75px",
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background: 'url(https://media.4rgos.it/i/Argos/0821-m0014-m007-m050-asym-m008-m022-energy-saving-tips-label-as168789713?maxW=768&qlt=75&fmt.jpeg.interlaced=true) center/cover no-repeat'
    }
  return (
      <Box className={styles.container}>
      <Text fontSize={['16', '18', '32']} fontWeight="450" mt={"2rem"}>Buy and Sell from 1200+ Cities Across India</Text>
      
       <Flex mt="1rem" flexWrap='wrap' gap='24px' justifyContent={"center"} >
         
      <Box>
        <Box sx={firstBoxStyles} filter='grayscale(80%)' borderRadius={"0.3rem"} height={"200px"}>Mobile & Tablets</Box>


      <Box className={styles.category_box}>
        <UnorderedList>
        <Flex _hover={{cursor:"pointer"}} justifyContent={"center"} alignItems={"center"} gap={"15rem"} color="grey"><ListItem>Used Mobiles</ListItem><BsChevronRight/></Flex>
        <Divider/>
        <Flex _hover={{cursor:"pointer"}} color={"grey"} justifyContent={"center"} alignItems={"center"} gap={"18rem"}><ListItem>Tablets</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{cursor:"pointer"}} color={"grey"} justifyContent={"center"} alignItems={"center"} gap={"16rem"}><ListItem>Accessories</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{cursor:"pointer"}} color={"grey"} justifyContent={"center"} alignItems={"center"} gap={"16.5rem"}><ListItem>Wearables</ListItem><BsChevronRight/></Flex>
        <Divider/>
        <Flex _hover={{cursor:"pointer"}} color={"grey"} justifyContent={"center"} alignItems={"center"} gap={"17.3rem"}><ListItem>View All</ListItem><BsChevronRight /></Flex>
        </UnorderedList>
      </Box>  
    </Box>
   

      <Box>
        <Box sx={secondBoxStyles} filter='grayscale(80%)' borderRadius={"0.3rem"} height={"200px"}>Home & Lifestyle</Box>
        
        <Box className={styles.category_box}>
        <UnorderedList>
        <Flex _hover={{cursor:"pointer"}} color="grey" justifyContent={"center"} alignItems={"center"} gap={"10rem"}><ListItem> Furniture & Decor</ListItem><BsChevronRight/></Flex>
          <Divider/>
        <Flex _hover={{cursor:"pointer"}} color="grey" justifyContent={"center"} alignItems={"center"} gap={"6.5rem"}><ListItem>Sports, Hobbies & Fashion</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{cursor:"pointer"}} color="grey" justifyContent={"center"} alignItems={"center"} gap={"13.8rem"}><ListItem>Luggages</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{cursor:"pointer"}} color="grey" justifyContent={"center"} alignItems={"center"} gap={"13.8rem"}><ListItem>Footwear</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{cursor:"pointer"}} color="grey" justifyContent={"center"} alignItems={"center"} gap={"10.5rem"}><ListItem>Household Items</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{cursor:"pointer"}} color="grey" justifyContent={"center"} alignItems={"center"} gap={"14.2rem"}><ListItem>View All</ListItem><BsChevronRight /></Flex>
        </UnorderedList>
        </Box>
      </Box>
     
      <Box>
        <Box sx={thirdBoxStyles} filter='grayscale(80%)' borderRadius={"0.3rem"} height={"200px"}>Electronics & Appliances</Box>
           
        <Box className={styles.category_box}>
        <UnorderedList>
        <Flex _hover={{cursor:"pointer"}} color="grey" justifyContent={"center"} alignItems={"center"} gap={"10rem"}><ListItem> Laptop & Accessories</ListItem><BsChevronRight/></Flex>
        <Divider/>
        <Flex _hover={{ cursor: "pointer" }} color="grey" justifyContent={"center"} alignItems={"center"} gap={"9.8rem"}><ListItem>TV - DVD - Multimedia</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{ cursor: "pointer" }} color="grey" justifyContent={"center"} alignItems={"center"} gap={"10rem"}><ListItem>Camera & Accessories</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{ cursor: "pointer" }} color="grey" justifyContent={"center"} alignItems={"center"} gap={"12rem"}><ListItem>Home Appliances</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{ cursor: "pointer" }} color="grey" justifyContent={"center"} alignItems={"center"} gap={"11.5rem"}><ListItem>Kitchen Appliances</ListItem><BsChevronRight /></Flex>
        <Divider/>
        <Flex _hover={{ cursor: "pointer" }} color="grey" justifyContent={"center"} alignItems={"center"} gap={"16rem"}><ListItem>View All</ListItem><BsChevronRight /></Flex>
        </UnorderedList>
      </Box>
      </Box>
    </Flex>
   </Box>
  )
}