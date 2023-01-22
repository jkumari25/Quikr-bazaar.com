import { Box, Button, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import styles from "./Styles/InputElement.module.css";
import React from "react";

const InputElement = () => {
  return (
    <Box width="80%" margin={"auto"} mt="2rem" className={styles["input-container"]}>
      <Text textAlign={"left"}>I Want To Receive Alerts</Text>
      <SimpleGrid columns={[4]}>
        <Box>
          <Select variant="flushed" placeholder="Category" />
        </Box>
        <Box>
          <Select variant="flushed" placeholder="Sub Category" />
        </Box>
        <Box>
          <Input variant="flushed" placeholder="Email" />
        </Box>
        <Box>
          <Input variant="flushed" placeholder="Mobile" />
        </Box>
        <Box>
          <Button mr={"5rem"} mt={"1rem"} width={"220px"} borderRadius={"2px"} colorScheme="blue">CREATE ALERT</Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default InputElement;