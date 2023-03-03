import { Text } from "@chakra-ui/react";

export const ListHeader = ({ children }) => {
  return (
    <Text color={"#84c225"}  fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};