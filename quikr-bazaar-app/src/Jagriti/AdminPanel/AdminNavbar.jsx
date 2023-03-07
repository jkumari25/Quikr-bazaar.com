import React from "react";

import {
  Box,
  Button,
  Flex,
  CloseButton,
  HStack,
  IconButton,
  useColorModeValue,
  Input,
  VStack,
  chakra,
  Avatar,
  VisuallyHidden,
  useDisclosure,
  InputGroup,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FcSearch } from "react-icons/fc";
import {
  AiOutlineMenu,
  AiFillHome,
  AiFillBell,
  AiOutlineInbox,
} from "react-icons/ai";
import img from "../../Mushtaq/rapid_grab.jpg";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const AdminNavbar = ({ setShowPage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  const intProductData = {
    image: "",
    title: "",
    price: "",
    category: "",
    location: "",
    id: "",
  };

  const postProductData = async (url, data) => {
    try {
      return await axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
  };

  const [form, setForm] = useState(intProductData);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    if (
      form.image &&
      form.title &&
      form.price &&
      form.category &&
      form.location
    ) {
      postProductData("https://pear-gleaming-squid.cyclic.app/Admin", form)
        .then(
          () => (
            setForm(intProductData),
            toast({
              title: "Product Added.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          )
        )
        .catch(() => setForm(intProductData));
    }
    
  };

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        position="fixed"
        zIndex={5}
        backgroundColor="skyblue"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="black"
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex={5}
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />

                <Button
                  w="full"
                  // colorScheme="blue"
                  onClick={onOpen}
                  leftIcon={<AiFillHome />}
                >
                  ADD PRODUCT
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  // colorScheme="blue"
                  leftIcon={<AiOutlineInbox />}
                  onClick={() => setShowPage("Delivery")}
                >
                  Order Management
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  // colorScheme="blue"
                  onClick={() => setShowPage("UserManagement")}
                >
                 User Management
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            ></chakra.a>

            <HStack
              spacing={3}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button
                variant="ghost"
                // colorScheme="black"
                onClick={onOpen}
                size="sm"
                backgroundColor="white"
              >
                Add Product
              </Button>
              <Button
                variant="solid"
                // colorScheme="blue"
                size="sm"
                onClick={() => setShowPage("Delivery")}
              >
                Order Management
              </Button>
              <Button
                variant="ghost"
                // colorScheme="black"
                size="sm"
                onClick={() => setShowPage("UserManagement")}
                backgroundColor="white"
              >
                User Management
              </Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>ADD PRODUCTS</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                  <FormControl mt={4}>
                      <FormLabel>Product Image</FormLabel>
                      <Input
                        placeholder="Add Image"
                        name="image"
                        onChange={handleChange}
                        value={form.image}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Product Title</FormLabel>
                      <Input
                        ref={initialRef}
                        placeholder="Add Title"
                        name="title"
                        onChange={handleChange}
                        value={form.title}
                      />
                    </FormControl>
                    
                    <FormControl mt={4}>
                      <FormLabel>Product Price</FormLabel>
                      <Input
                        placeholder="Add Price"
                        name="price"
                        onChange={handleChange}
                        value={form.price}
                      />
                    </FormControl>
                    
                    <FormControl mt={4}>
                      <FormLabel>Category</FormLabel>
                      <Input
                        placeholder="Add Category"
                        name="category"
                        onChange={handleChange}
                        value={form.category}
                      />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Location</FormLabel>
                      <Input
                        placeholder="Enter Location"
                        name="location"
                        onChange={handleChange}
                        value={form.location}
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      _hover={{ bgColor: "blue.400" }}
                      onClick={handleClick}
                    >
                      ADD PRODUCT
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FcSearch />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>

            <chakra.a
              p={3}
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              rounded="sm"
              _hover={{
                color: "gray.800",
                _dark: {
                  color: "gray.600",
                },
              }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Link to={"/"}><Avatar size="md" name="Rapid-Grab" src={img} /></Link>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default AdminNavbar;
