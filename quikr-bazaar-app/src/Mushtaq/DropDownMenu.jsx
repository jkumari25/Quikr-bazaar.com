import { Box, Button, br, SimpleGrid, T, Spacerext,} from "@chakra-ui/react";
import styles from "./Styles/DropDownMenu.module.css";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
export const DropDownMenu = () => {
  return (
    <Box className={styles.container}>

              <Box className={styles["mobile-drop"]}>
                  <Button className={styles["mobile-drop-btn"]} bg={"none"}>
                      MOBILES
                      <FiChevronDown/>
                  </Button>        
              
        <Box className={styles["mobile-drop-content"]}>
            <SimpleGrid columns={4}>
            <Box>
                <br />
                <h3 as={4}>Mobile Phones</h3>
                <Link to={"#"}>Used Mobiles</Link>
                <br/> <br/>
                <h3 as={4}>Top Models (Used)</h3>
                <br/>
                <Link to={"#"}>Used Iphone 7</Link>
                <br/>
                <Link to={"#"}>Used Iphone 6</Link>
                <br/>
                <Link to={"#"}>Used Redmi Note 4</Link>
                <br/>
              </Box>
              
              
            <Box>
              <br />
              <h3 as={4}>Top Brands(Used/New)</h3>
                <br/> <br/> 
              <Link to={"#"}>Samsung Mobiles</Link>
              <br/>
                <Link to={"#"}>Iphones</Link>
                <br/>
                <Link to={"#"}>Mi Mobiles</Link>
                <br/>
                <Link to={"#"}>Motorola Phones</Link>
                <br/>
                <Link to={"#"}>LG Phones</Link>
                <br /> <br /> 
                
                <h3 as={4}>Shop By Choice</h3>
                <br/> <br/>
              <Link to={"#"}>4G Ready</Link>
              <br/>
                <Link to={"#"}>Selfie Phones</Link>
                <br/>
                <Link to={"#"}>Great Battery Life</Link>
                <br/>
                <Link to={"#"}>High RAM</Link>
              </Box>

            <Box>
              <br />
              <h3 as={4}>Tablets</h3>
                <br/> <br/>
              <Link to={"#"}>Android Tablets</Link>
              <br/>
                <Link to={"#"}>4G Tablets</Link>
                <br/>
                <Link to={"#"}>Apple Tablets</Link>
                <br/>
                <br /> <br /> 
                
                <h3 as={4}>Wearable Devices</h3>
                <br/> <br/>
              <Link to={"#"}>Smart Brands</Link>
              <br/>
                <Link to={"#"}>Smart Watches</Link>
                <br/>
              </Box>

            <Box>
              <br />
              <h3 as={4}>Mobile Accessories</h3>
                <br/> <br/>
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br/>
                <Link to={"#"}>Earphones</Link>
                <br/>
                <Link to={"#"}>Memory Cards</Link>
                <br /> <br />
                
                <h3 as={4}>Shop By Budget</h3>
                <br/> <br/>
              <Link to={"#"}>Below ?6,000</Link>
              <br/>
                <Link to={"#"}>?6,001 - ?10,000</Link>
                <br /><br />
                <h3 as={4}>All Mobiles & Tablets</h3>
              </Box>
           </SimpleGrid>
        </Box> 
      </Box>
      

      <Box className={styles["mobile-drop"]}>
                  <Button  bg={"none"} className={styles["mobile-drop-btn"]}>
                      FURNITURE & DECOR 
                      <FiChevronDown/>
                  </Button>        
              
        <Box className={styles["mobile-drop-content"]}>
            <SimpleGrid columns={4}>
            <Box>
            <br />
                <h3 as={4}>Mobile Phones</h3>
                <Link to={"#"}>Used Mobiles</Link>
                <br/> <br/>
                <h3 as={4}>Top Models (Used)</h3>
                <br/>
                <Link to={"#"}>Used Iphone 7</Link>
                <br/>
                <Link to={"#"}>Used Iphone 6</Link>
                <br/>
                <Link to={"#"}>Used Redmi Note 4</Link>
                <br/>
              </Box>
              
              
            <Box>
              <br />
              <h3 as={4}>Top Brands(Used/New)</h3>
                <br/>
              <Link to={"#"}>Samsung Mobiles</Link>
              <br/>
                <Link to={"#"}>Iphones</Link>
                <br/>
                <Link to={"#"}>Mi Mobiles</Link>
                <br/>
                <Link to={"#"}>Motorola Phones</Link>
                <br/>
                <Link to={"#"}>LG Phones</Link>
                <br /> <br /> 
                
                <h3 as={4}>Shop By Choice</h3>
                <br/> <br/>
              <Link to={"#"}>4G Ready</Link>
              <br/>
                <Link to={"#"}>Selfie Phones</Link>
                <br/>
                <Link to={"#"}>Great Battery Life</Link>
                <br/>
                <Link to={"#"}>High RAM</Link>
              </Box>

            <Box>
              <br />
              <h3 as={4}>Tablets</h3>
                <br/> <br/> 
              <Link to={"#"}>Android Tablets</Link>
              <br/>
                <Link to={"#"}>4G Tablets</Link>
                <br/>
                <Link to={"#"}>Apple Tablets</Link>
                <br/>
                <br /> <br />
                
                <h3 as={4}>Wearable Devices</h3>
                <br/> <br/> 
              <Link to={"#"}>Smart Brands</Link>
              <br/>
                <Link to={"#"}>Smart Watches</Link>
                <br/>
              </Box>

            <Box>
              <br />
              <h3 as={4}>Mobile Accessories</h3>
                <br/> <br/>
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br/>
                <Link to={"#"}>Earphones</Link>
                <br/>
                <Link to={"#"}>Memory Cards</Link>
                <br /> <br />
                
                <h3 as={4}>Shop By Budget</h3>
                <br/> <br/> 
              <Link to={"#"}>Below ?6,000</Link>
              <br/>
                <Link to={"#"}>?6,001 - ?10,000</Link>
                <br /><br />
                <h3 as={4}>All Mobiles & Tablets</h3>
              </Box>
           </SimpleGrid>
        </Box> 
      </Box>
      

      <Box className={styles["mobile-drop"]}>
                  <Button bg={"none"} className={styles["mobile-drop-btn"]}>
                      ELECTRONICS 
                      <FiChevronDown/>
                  </Button>        
              
        <Box className={styles["mobile-drop-content"]}>
            <SimpleGrid columns={4}>
            <Box>
              <br />
                <h3 as={4}>Mobile Phones</h3>
                <Link to={"#"}>Used Mobiles</Link>
                <br/> <br/>
                <h3 as={4}>Top Models (Used)</h3>
                <br/>
                <Link to={"#"}>Used Iphone 7</Link>
                <br/>
                <Link to={"#"}>Used Iphone 6</Link>
                <br/>
                <Link to={"#"}>Used Redmi Note 4</Link>
                <br/>
              </Box>
              
              
            <Box>
              <br />
              <h3 as={4}>Top Brands(Used/New)</h3>
                <br/> <br/>
              <Link to={"#"}>Samsung Mobiles</Link>
              <br/>
                <Link to={"#"}>Iphones</Link>
                <br/>
                <Link to={"#"}>Mi Mobiles</Link>
                <br/>
                <Link to={"#"}>Motorola Phones</Link>
                <br/>
                <Link to={"#"}>LG Phones</Link>
                <br /> <br /> 
                
                <h3 as={4}>Shop By Choice</h3>
                <br/> <br/> 
              <Link to={"#"}>4G Ready</Link>
              <br/>
                <Link to={"#"}>Selfie Phones</Link>
                <br/>
                <Link to={"#"}>Great Battery Life</Link>
                <br/>
                <Link to={"#"}>High RAM</Link>
              </Box>

            <Box>
              <br />
              <h3 as={4}>Tablets</h3>
                <br/> <br/>
              <Link to={"#"}>Android Tablets</Link>
              <br/>
                <Link to={"#"}>4G Tablets</Link>
                <br/>
                <Link to={"#"}>Apple Tablets</Link>
                <br/>
                <br /> <br />
                
                <h3 as={4}>Wearable Devices</h3>
                <br/> <br/>
              <Link to={"#"}>Smart Brands</Link>
              <br/>
                <Link to={"#"}>Smart Watches</Link>
                <br/>
              </Box>

            <Box>
              <br />
              <h3 as={4}>Mobile Accessories</h3>
                <br/> <br/>
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br/>
                <Link to={"#"}>Earphones</Link>
                <br/>
                <Link to={"#"}>Memory Cards</Link>
                <br /> <br /> 
                
                <h3 as={4}>Shop By Budget</h3>
                <br/> <br/> 
              <Link to={"#"}>Below ?6,000</Link>
              <br/>
                <Link to={"#"}>?6,001 - ?10,000</Link>
                <br /><br />
                <h3 as={4}>All Mobiles & Tablets</h3>
              </Box>
           </SimpleGrid>
        </Box> 
      </Box>
      

      <Box className={styles["mobile-drop"]}>
                  <Button bg={"none"} className={styles["mobile-drop-btn"]}>
                      HOME APPLIANCES 
                      <FiChevronDown/>
                  </Button>        
              
        <Box className={styles["mobile-drop-content"]}>
            <SimpleGrid columns={4}>
            <Box>
              <br />
                <h3 as={4}>Mobile Phones</h3>
                <Link to={"#"}>Used Mobiles</Link>
                <br/> <br/> 
                <h3 as={4}>Top Models (Used)</h3>
                <br/>
                <Link to={"#"}>Used Iphone 7</Link>
                <br/>
                <Link to={"#"}>Used Iphone 6</Link>
                <br/>
                <Link to={"#"}>Used Redmi Note 4</Link>
                <br/>
              </Box>
              
              
            <Box>
              <br />
              <h3 as={4}>Top Brands(Used/New)</h3>
                <br/> <br/>
              <Link to={"#"}>Samsung Mobiles</Link>
                <br/>
                <Link to={"#"}>Iphones</Link>
                <br/>
                <Link to={"#"}>Mi Mobiles</Link>
                <br/>
                <Link to={"#"}>Motorola Phones</Link>
                <br/>
                <Link to={"#"}>LG Phones</Link>
                <br /> <br />
                
                <h3 as={4}>Shop By Choice</h3>
                <br/> <br/>
              <Link to={"#"}>4G Ready</Link>
              <br/>
                <Link to={"#"}>Selfie Phones</Link>
                <br/>
                <Link to={"#"}>Great Battery Life</Link>
                <br/>
                <Link to={"#"}>High RAM</Link>
              </Box>

            <Box>
            <br />
              <h3 as={4}>Tablets</h3>
                <br/> <br/> 
              <Link to={"#"}>Android Tablets</Link>
              <br/>
                <Link to={"#"}>4G Tablets</Link>
                <br/>
                <Link to={"#"}>Apple Tablets</Link>
                <br/>
                <br /> <br /> 
                
                <h3 as={4}>Wearable Devices</h3>
                <br/> <br/> 
              <Link to={"#"}>Smart Brands</Link>
              <br/>
                <Link to={"#"}>Smart Watches</Link>
                <br/>
              </Box>

            <Box>
            <br />
              <h3 as={4}>Mobile Accessories</h3>
                <br/> <br/> 
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br/>
                <Link to={"#"}>Earphones</Link>
                <br/>
                <Link to={"#"}>Memory Cards</Link>
                <br /> <br />
                
                <h3 as={4}>Shop By Budget</h3>
                <br/> <br/> 
              <Link to={"#"}>Below ?6,000</Link>
              <br/>
                <Link to={"#"}>?6,001 - ?10,000</Link>
                <br /><br />
                <h3 as={4}>All Mobiles & Tablets</h3>
              </Box>
           </SimpleGrid>
        </Box> 
      </Box>
      

      <Box className={styles["mobile-drop"]}>
                  <Button bg={"none"} className={styles["mobile-drop-btn"]}>
                      KIDS & TOYS 
                      <FiChevronDown/>
                  </Button>        
              
        <Box className={styles["mobile-drop-content"]}>
            <SimpleGrid columns={4}>
            <Box>
              <br />
                <h3 as={4}>Mobile Phones</h3>
                <Link to={"#"}>Used Mobiles</Link>
                <br/> <br/>
                <h3 as={4}>Top Models (Used)</h3>
                <br/>
                <Link to={"#"}>Used Iphone 7</Link>
                <br/>
                <Link to={"#"}>Used Iphone 6</Link>
                <br/>
                <Link to={"#"}>Used Redmi Note 4</Link>
                <br/>
              </Box>
              
              
            <Box>
              <br />
              <h3 as={4}>Top Brands(Used/New)</h3>
                <br/> <br/> 
              <Link to={"#"}>Samsung Mobiles</Link>
              <br/>
                <Link to={"#"}>Iphones</Link>
                <br/>
                <Link to={"#"}>Mi Mobiles</Link>
                <br/>
                <Link to={"#"}>Motorola Phones</Link>
                <br/>
                <Link to={"#"}>LG Phones</Link>
                <br /> <br />
                
                <h3 as={4}>Shop By Choice</h3>
                <br/> <br/>
              <Link to={"#"}>4G Ready</Link>
              <br/>
                <Link to={"#"}>Selfie Phones</Link>
                <br/>
                <Link to={"#"}>Great Battery Life</Link>
                <br/>
                <Link to={"#"}>High RAM</Link>
              </Box>

            <Box>
            <br />
              <h3 as={4}>Tablets</h3>
                <br/> <br/> 
              <Link to={"#"}>Android Tablets</Link>
              <br/>
                <Link to={"#"}>4G Tablets</Link>
                <br/>
                <Link to={"#"}>Apple Tablets</Link>
                <br/>
                <br /> <br />
                
                <h3 as={4}>Wearable Devices</h3>
                <br/> <br/>
              <Link to={"#"}>Smart Brands</Link>
              <br/>
                <Link to={"#"}>Smart Watches</Link>
                <br/>
              </Box>

            <Box>
            <br />
              <h3 as={4}>Mobile Accessories</h3>
                <br/> <br/> 
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br/>
                <Link to={"#"}>Earphones</Link>
                <br/>
                <Link to={"#"}>Memory Cards</Link>
                <br /> <br /> 
                
                <h3 as={4}>Shop By Budget</h3>
                <br/> <br/>
              <Link to={"#"}>Below ?6,000</Link>
              <br/>
                <Link to={"#"}>?6,001 - ?10,000</Link>
                <br /><br />
                <h3 as={4}>All Mobiles & Tablets</h3>
              </Box>
           </SimpleGrid>
        </Box> 
      </Box>
      

      <Box className={styles["mobile-drop"]}>
                  <Button bg={"none"} className={styles["mobile-drop-btn"]}>
                      SPORTS, HOBBIES & FASHION 
                      <FiChevronDown/>
                  </Button>        
              
        <Box className={styles["mobile-drop-content"]}>
            <SimpleGrid columns={4}>
            <Box>
            <br />
                <h3 as={4}>Mobile Phones</h3>
                <Link to={"#"}>Used Mobiles</Link>
                <br/> <br/> 
                <h3 as={4}>Top Models (Used)</h3>
                <br/>
                <Link to={"#"}>Used Iphone 7</Link>
                <br/>
                <Link to={"#"}>Used Iphone 6</Link>
                <br/>
                <Link to={"#"}>Used Redmi Note 4</Link>
                <br/>
              </Box>
              
              
            <Box>
              <br />
              <h3 as={4}>Top Brands(Used/New)</h3>
                <br/> <br/> 
              <Link to={"#"}>Samsung Mobiles</Link>
              <br/>
                <Link to={"#"}>Iphones</Link>
                <br/>
                <Link to={"#"}>Mi Mobiles</Link>
                <br/>
                <Link to={"#"}>Motorola Phones</Link>
                <br/>
                <Link to={"#"}>LG Phones</Link>
                <br /> <br /> 
                
                <h3 as={4}>Shop By Choice</h3>
                <br/> <br/>
              <Link to={"#"}>4G Ready</Link>
              <br/>
                <Link to={"#"}>Selfie Phones</Link>
                <br/>
                <Link to={"#"}>Great Battery Life</Link>
                <br/>
                <Link to={"#"}>High RAM</Link>
              </Box>

            <Box>
            <br />
              <h3 as={4}>Tablets</h3>
                <br/> <br/>
              <Link to={"#"}>Android Tablets</Link>
              <br/>
                <Link to={"#"}>4G Tablets</Link>
                <br/>
                <Link to={"#"}>Apple Tablets</Link>
                <br/>
                <br /> <br /> 
                
                <h3 as={4}>Wearable Devices</h3>
                <br/> <br/> 
              <Link to={"#"}>Smart Brands</Link>
              <br/>
                <Link to={"#"}>Smart Watches</Link>
                <br/>
              </Box>

            <Box>
              <br />
              <h3 as={4}>Mobile Accessories</h3>
                <br/> <br/>
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br/>
                <Link to={"#"}>Earphones</Link>
                <br/>
                <Link to={"#"}>Memory Cards</Link>
                <br /> <br /> 
                
                <h3 as={4}>Shop By Budget</h3>
                <br/> <br/> 
              <Link to={"#"}>Below ?6,000</Link>
              <br/>
                <Link to={"#"}>?6,001 - ?10,000</Link>
                <br /><br />
                <h3 as={4}>All Mobiles & Tablets</h3>
              </Box>
           </SimpleGrid>
        </Box> 
      </Box>
      
     </Box>          
  );
};
