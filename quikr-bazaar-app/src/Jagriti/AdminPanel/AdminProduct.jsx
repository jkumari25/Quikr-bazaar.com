import {
  Box,
  CardBody,
  Grid,
  GridItem,
  Card,
  Stack,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminProduct = () => {
  const [data, setData] = useState([]);
  const getOrderData = async (url) => {
    return await axios.get(url);
  };

  const deleteOrder = async (url, id) => {
    return await axios.delete(`${url}/${id}`);
  };

  const handleDelete = (id) => {
    deleteOrder("https://pear-gleaming-squid.cyclic.app/Admin", id)
      .then((res) => getOrderData())
      .catch((e) => getOrderData());
  };

  const EditOrder = async (url, id) => {
    return await axios.patch(`${url}/${id}`);
  };

  const handleEdit = (id) => {
    EditOrder("https://pear-gleaming-squid.cyclic.app/Admin", id)
      .then((e) => getOrderData())
      .catch((e) => getOrderData());
  };

  useEffect(() => {
    if (data.length === 0) {
      getOrderData("https://pear-gleaming-squid.cyclic.app/Admin").then(
        (res) => {
          setData(res.data);
        }
      );
    }
  }, [data.length]);

  return (
    <div>
      <Box
        ml={[0, 300, 300, 350]}
        width={["60%", "60%", "70%", "77%"]}
        mt={100}
      >
        <Grid
          ml="50px"
          mt="10"
          gap={5}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          {data.length > 0 &&
            data.map((el) => (
              <GridItem>
                <Card maxW="sm">
                  <CardBody>
                    <Image src={el.image} width="100%" height="300px" />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Title:-{el.title}</Heading>
                      <Text color="gray">Price:-{el.price}</Text>
                      <Text color="gray">Category:-{el.category}</Text>
                      <Text color="gray">Location:-{el.location}</Text>
                      <Text color="gray">Id:-{el.id}</Text>

                      <Box
                        display="flex"
                        textAlign="center"
                        justifyContent="center"
                      >
                        <Button
                          onClick={() => handleDelete(el.id)}
                          bgColor={"red.500"}
                          _hover={{ bgColor: "red.400" }}
                          color={"whiteAlpha.900"}
                          w="70px"
                        >
                          Delete
                        </Button>
                        {/* <Button
                      onClick={() => handleEdit(el.id)}
                      bgColor={"red.500"}
                      _hover={{ bgColor: "red.400" }}
                      color={"whiteAlpha.900"}
                    w="60px"
                    >
                      Edit
                    </Button> */}
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default AdminProduct;
