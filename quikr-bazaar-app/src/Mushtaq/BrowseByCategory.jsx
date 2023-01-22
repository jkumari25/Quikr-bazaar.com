import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import styles from "./Styles/BrowseByCategory.module.css";
import { TfiMobile } from "react-icons/tfi";
import { GrVend } from "react-icons/gr";
import { GrSystem } from "react-icons/gr";
import { MdSportsCricket } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdToys } from "react-icons/md";
export const BrowseByCategory = () => {
    return (
        <Box>
            <Text textAlign={"left"} ml={[12,20,28,40,40,40]}  fontSize={"20px"} mt="1rem">Browse by Category</Text>
      <Box  width="80%" margin={"auto"} height="100px" className={styles.container} >
          <SimpleGrid columns={[6]} mt="1rem" >
              <Box  className={styles.category_box}>
                  <TfiMobile size={35} style={{marginLeft:"2rem"}} />
                  <Text>Mobile & Tablets</Text>
              </Box>
              <Box  className={styles.category_box}>
                  <GrVend size={35} style={{marginLeft:"2rem"}} />
                  <Text>Furniture & Decor</Text>
              </Box>
              <Box  className={styles.category_box}>
                  <GrSystem size={35} style={{marginLeft:"2rem"}} />
                  <Text>Electronics & Appliances</Text>
              </Box>
              <Box  className={styles.category_box}>
                  <MdSportsCricket size={35} style={{marginLeft:"2rem"}} />
                  <Text>Sports, Hobbies & Fashion</Text>
              </Box>
              <Box  className={styles.category_box}>
                  <AiOutlineHome size={35} style={{marginLeft:"2rem"}} />
                  <Text>Home & LifeStyle</Text>
              </Box>
              <Box  className={styles.category_box}>
                  <MdToys size={35} style={{marginLeft:"2rem"}} />
                  <Text>Kids & Toys</Text>
              </Box>
          </SimpleGrid>  
    </Box>
    </Box>
  )
}