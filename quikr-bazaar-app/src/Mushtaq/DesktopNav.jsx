import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Link,
  Menu,
  MenuItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Stack,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { DesktopSubNav } from "./DesktopSubNav";
import { NAV_ITEMS } from "./MobileNavItem";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router";
import { MobileNav } from "./MobileNav";
import React, { useState } from "react";
import { Form1, Form2 } from "../Jagriti/AdminPanel/Adminlogin";
import RapidGrab from "./rapid_grab.jpg";

export const DesktopNav = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const navigate = useNavigate();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      <Image width={["20", "30", "30"]} src={RapidGrab} alt="RapidGrab" />
      <HStack spacing={4} ml={"8rem"} mt={[20, 20, 0, 0, 0, 0]}>
        <CiLocationOn />
        <p>All India</p>
        <FiChevronDown />
        <InputGroup borderRadius={"none"} width={"450px"}>
          <InputLeftAddon
            bg={"none"}
            children="All Categories"
            width={"8rem"}
            borderRadius="none"
          />
          <Input type="text" placeholder="Search Products" />

          <InputRightElement width={"10%"} bg="skyblue">
            <CiSearch />
          </InputRightElement>
        </InputGroup>
      </HStack>

      <HStack spacing={"2.8rem"}>
        <Flex gap={"1.5rem"}>
          <Menu>
            {({ isOpen }) => (
              <>
                <Stack
                  flex={{ base: 1, md: 0 }}
                  justify={"flex-end"}
                  direction={"row"}
                  spacing={6}
                >
                  <Button
                    as={"a"}
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"link"}
                    bg={"pink.400"}
                    color={"white"}
                    href={"#"}
                  >
                    <MenuItem onClick={() => navigate("/signup")}>
                      User
                    </MenuItem>
                  </Button>
                </Stack>
              </>
            )}
          </Menu>

          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{ bg: "pink.300" }}
            onClick={onOpen}
            cursor={"pointer"}
          >
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogBody>
                    <Box
                      borderWidth="1px"
                      rounded="lg"
                      shadow="1px 1px 3px rgba(0,0,0,0.3)"
                      maxWidth={800}
                      p={6}
                      m="10px auto"
                      as="form"
                    >
                      <Progress
                        hasStripe
                        value={progress}
                        mb="5%"
                        mx="5%"
                        isAnimated
                      ></Progress>
                      <Box isOpen={isOpen}>
                        {" "}
                        {step === 1 ? <Form1 /> : <Form2 />}
                      </Box>
                      <ButtonGroup mt="5%" w="100%">
                        <Flex w="100%" mt={5} justifyContent="space-between">
                          <Flex>
                            <Button
                              ml={10}
                              onClick={() => {
                                setStep(step - 1);
                                setProgress(progress - 33.33);
                              }}
                              isDisabled={step === 1}
                              colorScheme="teal"
                              variant="solid"
                              w="7rem"
                              mr="5%"
                            >
                              Back
                            </Button>
                            <Button
                              w="7rem"
                              ml={10}
                              isDisabled={step === 2}
                              onClick={() => {
                                setStep(step + 1);
                                if (step === 2) {
                                  setProgress(100);
                                } else {
                                  setProgress(progress + 33.33);
                                }
                              }}
                              colorScheme="teal"
                              variant="outline"
                            >
                              Goto Login
                            </Button>
                          </Flex>
                        </Flex>
                      </ButtonGroup>
                    </Box>
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Link to="/admin">
                      <Button
                        onClick={() => onClose()}
                        ml={3}
                        bgColor={"blue.500"}
                        _hover={{ bgColor: "blue.400" }}
                        color={"whiteAlpha.900"}
                      >
                        Cancel
                      </Button>
                    </Link>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
            Admin
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Flex>
      </HStack>
    </Stack>
  );
};
