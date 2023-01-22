import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import styles from "./Styles/DropDownMenu.module.css";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
export const DropDownMenu = () => {
  return (
    <Flex className={styles.container}>
      <Box className={styles["mobile-drop"]}>
        <Button className={styles["mobile-drop-btn"]} bg="none">
          <Link to={"#"}>MOBILES</Link>
          <FiChevronDown />
        </Button>

        <Box className={styles["mobile-drop-content"]}>
          <SimpleGrid columns={4}>
            <Box>
              <br />
              <h3>Mobile Phones</h3>
              <Link to={"#"}>Used Mobiles</Link>
              <br /> <br />
              <p>Top Models (Used)</p>
              <br />
              <Link to={"#"}>Used Iphone 7</Link>
              <br />
              <Link to={"#"}>Used Iphone 6</Link>
              <br />
              <Link to={"#"}>Used Redmi Note "p"</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Top Brands(Used/New)</p>
              <br /> <br />
              <Link to={"#"}>Samsung Mobiles</Link>
              <br />
              <Link to={"#"}>Iphones</Link>
              <br />
              <Link to={"#"}>Mi Mobiles</Link>
              <br />
              <Link to={"#"}>Motorola Phones</Link>
              <br />
              <Link to={"#"}>LG Phones</Link>
              <br /> <br />
              <p>Shop By Choice</p>
              <br /> <br />
              <Link to={"#"}>"p"G Ready</Link>
              <br />
              <Link to={"#"}>Selfie Phones</Link>
              <br />
              <Link to={"#"}>Great Battery Life</Link>
              <br />
              <Link to={"#"}>High RAM</Link>
            </Box>

            <Box>
              <br />
              <p>Tablets</p>
              <br /> <br />
              <Link to={"#"}>Android Tablets</Link>
              <br />
              <Link to={"#"}>"p"G Tablets</Link>
              <br />
              <Link to={"#"}>Apple Tablets</Link>
              <br />
              <br /> <br />
              <p>Wearable Devices</p>
              <br /> <br />
              <Link to={"#"}>Smart Brands</Link>
              <br />
              <Link to={"#"}>Smart Watches</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Mobile Accessories</p>
              <br /> <br />
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br />
              <Link to={"#"}>Earphones</Link>
              <br />
              <Link to={"#"}>Memory Cards</Link>
              <br /> <br />
              <p>Shop By Budget</p>
              <br /> <br />
              <Link to={"#"}>Below ?6,000</Link>
              <br />
              <Link to={"#"}>?6,001 - ?10,000</Link>
              <br />
              <br />
              <p>All Mobiles & Tablets</p>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box className={styles["furniture-drop"]}>
        <Button bg={"none"} className={styles["furniture-drop-btn"]}>
          <Link to={"#"}>FURNITURE & DECOR</Link>
          <FiChevronDown />
        </Button>

        <Box className={styles["furniture-drop-content"]}>
          <SimpleGrid columns={"4"}>
            <Box>
              <br />
              <p>Mobile Phones</p>
              <Link to={"#"}>Used Mobiles</Link>
              <br /> <br />
              <p>Top Models (Used)</p>
              <br />
              <Link to={"#"}>Used Iphone 7</Link>
              <br />
              <Link to={"#"}>Used Iphone 6</Link>
              <br />
              <Link to={"#"}>Used Redmi Note "p"</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Top Brands(Used/New)</p>
              <br />
              <Link to={"#"}>Samsung Mobiles</Link>
              <br />
              <Link to={"#"}>Iphones</Link>
              <br />
              <Link to={"#"}>Mi Mobiles</Link>
              <br />
              <Link to={"#"}>Motorola Phones</Link>
              <br />
              <Link to={"#"}>LG Phones</Link>
              <br /> <br />
              <p>Shop By Choice</p>
              <br /> <br />
              <Link to={"#"}>"p"G Ready</Link>
              <br />
              <Link to={"#"}>Selfie Phones</Link>
              <br />
              <Link to={"#"}>Great Battery Life</Link>
              <br />
              <Link to={"#"}>High RAM</Link>
            </Box>

            <Box>
              <br />
              <p>Tablets</p>
              <br /> <br />
              <Link to={"#"}>Android Tablets</Link>
              <br />
              <Link to={"#"}>"p"G Tablets</Link>
              <br />
              <Link to={"#"}>Apple Tablets</Link>
              <br />
              <br /> <br />
              <p>Wearable Devices</p>
              <br /> <br />
              <Link to={"#"}>Smart Brands</Link>
              <br />
              <Link to={"#"}>Smart Watches</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Mobile Accessories</p>
              <br /> <br />
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br />
              <Link to={"#"}>Earphones</Link>
              <br />
              <Link to={"#"}>Memory Cards</Link>
              <br /> <br />
              <p>Shop By Budget</p>
              <br /> <br />
              <Link to={"#"}>Below ?6,000</Link>
              <br />
              <Link to={"#"}>?6,001 - ?10,000</Link>
              <br />
              <br />
              <p>All Mobiles & Tablets</p>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box className={styles["electronics-drop"]}>
        <Button bg={"none"} className={styles["electronics-drop-btn"]}>
          <Link to={"#"}>ELECTRONICS </Link>
          <FiChevronDown />
        </Button>

        <Box className={styles["electronics-drop-content"]}>
          <SimpleGrid columns={"4"}>
            <Box>
              <br />
              <p>Mobile Phones</p>
              <Link to={"#"}>Used Mobiles</Link>
              <br /> <br />
              <p>Top Models (Used)</p>
              <br />
              <Link to={"#"}>Used Iphone 7</Link>
              <br />
              <Link to={"#"}>Used Iphone 6</Link>
              <br />
              <Link to={"#"}>Used Redmi Note "p"</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Top Brands(Used/New)</p>
              <br /> <br />
              <Link to={"#"}>Samsung Mobiles</Link>
              <br />
              <Link to={"#"}>Iphones</Link>
              <br />
              <Link to={"#"}>Mi Mobiles</Link>
              <br />
              <Link to={"#"}>Motorola Phones</Link>
              <br />
              <Link to={"#"}>LG Phones</Link>
              <br /> <br />
              <p>Shop By Choice</p>
              <br /> <br />
              <Link to={"#"}>"p"G Ready</Link>
              <br />
              <Link to={"#"}>Selfie Phones</Link>
              <br />
              <Link to={"#"}>Great Battery Life</Link>
              <br />
              <Link to={"#"}>High RAM</Link>
            </Box>

            <Box>
              <br />
              <p>Tablets</p>
              <br /> <br />
              <Link to={"#"}>Android Tablets</Link>
              <br />
              <Link to={"#"}>"p"G Tablets</Link>
              <br />
              <Link to={"#"}>Apple Tablets</Link>
              <br />
              <br /> <br />
              <p>Wearable Devices</p>
              <br /> <br />
              <Link to={"#"}>Smart Brands</Link>
              <br />
              <Link to={"#"}>Smart Watches</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Mobile Accessories</p>
              <br /> <br />
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br />
              <Link to={"#"}>Earphones</Link>
              <br />
              <Link to={"#"}>Memory Cards</Link>
              <br /> <br />
              <p>Shop By Budget</p>
              <br /> <br />
              <Link to={"#"}>Below ?6,000</Link>
              <br />
              <Link to={"#"}>?6,001 - ?10,000</Link>
              <br />
              <br />
              <p>All Mobiles & Tablets</p>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box className={styles["home-drop"]}>
        <Button bg={"none"} className={styles["home-drop-btn"]}>
          <Link to={"#"}>HOME APPLIANCES </Link>
          <FiChevronDown />
        </Button>

        <Box className={styles["home-drop-content"]}>
          <SimpleGrid columns={"4"}>
            <Box>
              <br />
              <p>Mobile Phones</p>
              <Link to={"#"}>Used Mobiles</Link>
              <br /> <br />
              <p>Top Models (Used)</p>
              <br />
              <Link to={"#"}>Used Iphone 7</Link>
              <br />
              <Link to={"#"}>Used Iphone 6</Link>
              <br />
              <Link to={"#"}>Used Redmi Note "p"</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Top Brands(Used/New)</p>
              <br /> <br />
              <Link to={"#"}>Samsung Mobiles</Link>
              <br />
              <Link to={"#"}>Iphones</Link>
              <br />
              <Link to={"#"}>Mi Mobiles</Link>
              <br />
              <Link to={"#"}>Motorola Phones</Link>
              <br />
              <Link to={"#"}>LG Phones</Link>
              <br /> <br />
              <p>Shop By Choice</p>
              <br /> <br />
              <Link to={"#"}>"p"G Ready</Link>
              <br />
              <Link to={"#"}>Selfie Phones</Link>
              <br />
              <Link to={"#"}>Great Battery Life</Link>
              <br />
              <Link to={"#"}>High RAM</Link>
            </Box>

            <Box>
              <br />
              <p>Tablets</p>
              <br /> <br />
              <Link to={"#"}>Android Tablets</Link>
              <br />
              <Link to={"#"}>"p"G Tablets</Link>
              <br />
              <Link to={"#"}>Apple Tablets</Link>
              <br />
              <br /> <br />
              <p>Wearable Devices</p>
              <br /> <br />
              <Link to={"#"}>Smart Brands</Link>
              <br />
              <Link to={"#"}>Smart Watches</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Mobile Accessories</p>
              <br /> <br />
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br />
              <Link to={"#"}>Earphones</Link>
              <br />
              <Link to={"#"}>Memory Cards</Link>
              <br /> <br />
              <p>Shop By Budget</p>
              <br /> <br />
              <Link to={"#"}>Below ?6,000</Link>
              <br />
              <Link to={"#"}>?6,001 - ?10,000</Link>
              <br />
              <br />
              <p>All Mobiles & Tablets</p>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box className={styles["kids-drop"]}>
        <Button bg={"none"} className={styles["kids-drop-btn"]}>
          <Link to={"#"}>KIDS & TOYS </Link>
          <FiChevronDown />
        </Button>

        <Box className={styles["kids-drop-content"]}>
          <SimpleGrid columns={"4"}>
            <Box>
              <br />
              <p>Mobile Phones</p>
              <Link to={"#"}>Used Mobiles</Link>
              <br /> <br />
              <p>Top Models (Used)</p>
              <br />
              <Link to={"#"}>Used Iphone 7</Link>
              <br />
              <Link to={"#"}>Used Iphone 6</Link>
              <br />
              <Link to={"#"}>Used Redmi Note "p"</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Top Brands(Used/New)</p>
              <br /> <br />
              <Link to={"#"}>Samsung Mobiles</Link>
              <br />
              <Link to={"#"}>Iphones</Link>
              <br />
              <Link to={"#"}>Mi Mobiles</Link>
              <br />
              <Link to={"#"}>Motorola Phones</Link>
              <br />
              <Link to={"#"}>LG Phones</Link>
              <br /> <br />
              <p>Shop By Choice</p>
              <br /> <br />
              <Link to={"#"}>"p"G Ready</Link>
              <br />
              <Link to={"#"}>Selfie Phones</Link>
              <br />
              <Link to={"#"}>Great Battery Life</Link>
              <br />
              <Link to={"#"}>High RAM</Link>
            </Box>

            <Box>
              <br />
              <p>Tablets</p>
              <br /> <br />
              <Link to={"#"}>Android Tablets</Link>
              <br />
              <Link to={"#"}>"p"G Tablets</Link>
              <br />
              <Link to={"#"}>Apple Tablets</Link>
              <br />
              <br /> <br />
              <p>Wearable Devices</p>
              <br /> <br />
              <Link to={"#"}>Smart Brands</Link>
              <br />
              <Link to={"#"}>Smart Watches</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Mobile Accessories</p>
              <br /> <br />
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br />
              <Link to={"#"}>Earphones</Link>
              <br />
              <Link to={"#"}>Memory Cards</Link>
              <br /> <br />
              <p>Shop By Budget</p>
              <br /> <br />
              <Link to={"#"}>Below ?6,000</Link>
              <br />
              <Link to={"#"}>?6,001 - ?10,000</Link>
              <br />
              <br />
              <p>All Mobiles & Tablets</p>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box className={styles["sports-drop"]}>
        <Button bg={"none"} className={styles["sports-drop-btn"]}>
          <Link to={"#"}>SPORTS, HOBBIES & FASHION</Link>
          <FiChevronDown />
        </Button>

        <Box className={styles["sports-drop-content"]}>
          <SimpleGrid columns={"4"}>
            <Box>
              <br />
              <p>Mobile Phones</p>
              <Link to={"#"}>Used Mobiles</Link>
              <br /> <br />
              <p>Top Models (Used)</p>
              <br />
              <Link to={"#"}>Used Iphone 7</Link>
              <br />
              <Link to={"#"}>Used Iphone 6</Link>
              <br />
              <Link to={"#"}>Used Redmi Note "p"</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Top Brands(Used/New)</p>
              <br /> <br />
              <Link to={"#"}>Samsung Mobiles</Link>
              <br />
              <Link to={"#"}>Iphones</Link>
              <br />
              <Link to={"#"}>Mi Mobiles</Link>
              <br />
              <Link to={"#"}>Motorola Phones</Link>
              <br />
              <Link to={"#"}>LG Phones</Link>
              <br /> <br />
              <p>Shop By Choice</p>
              <br /> <br />
              <Link to={"#"}>"p"G Ready</Link>
              <br />
              <Link to={"#"}>Selfie Phones</Link>
              <br />
              <Link to={"#"}>Great Battery Life</Link>
              <br />
              <Link to={"#"}>High RAM</Link>
            </Box>

            <Box>
              <br />
              <p>Tablets</p>
              <br /> <br />
              <Link to={"#"}>Android Tablets</Link>
              <br />
              <Link to={"#"}>"p"G Tablets</Link>
              <br />
              <Link to={"#"}>Apple Tablets</Link>
              <br />
              <br /> <br />
              <p>Wearable Devices</p>
              <br /> <br />
              <Link to={"#"}>Smart Brands</Link>
              <br />
              <Link to={"#"}>Smart Watches</Link>
              <br />
            </Box>

            <Box>
              <br />
              <p>Mobile Accessories</p>
              <br /> <br />
              <Link to={"#"}>Bluetooth/Headsets</Link>
              <br />
              <Link to={"#"}>Earphones</Link>
              <br />
              <Link to={"#"}>Memory Cards</Link>
              <br /> <br />
              <p>Shop By Budget</p>
              <br /> <br />
              <Link to={"#"}>Below ?6,000</Link>
              <br />
              <Link to={"#"}>?6,001 - ?10,000</Link>
              <br />
              <br />
              <p>All Mobiles & Tablets</p>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};
