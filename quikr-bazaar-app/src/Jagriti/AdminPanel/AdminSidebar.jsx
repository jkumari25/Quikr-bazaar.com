import React, { useRef } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Flex,
  Text,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  Image,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


import { Link } from "react-router-dom";

const AdminSide = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const [isLargerThan768] = useMediaQuery("(min-width: 485px)");
    const [ismaxThan768] = useMediaQuery("(min-width: 485px)");
    const [sortValue, setsortValue] = useState("1");
 
  return (
    <Box>
        <Box p={1}>
        <Flex>
          {!isLargerThan768 ? (
            <div>
              {!isLargerThan768 ? (
                <div>
                  <Box p={5} >
                    <GiHamburgerMenu
                      ref={btnRef}
                      colorScheme="black"
                      onClick={onOpen}
                    >
                      Open
                    </GiHamburgerMenu>
                  </Box>
                  <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>RAPID GRAB</DrawerHeader>

                      <DrawerBody>
                        <Box
                          className="filter"
                          textAlign="left"
                          mt={5}
                          pt={3}
                          pl={2}
                          width="100%"
                          height="100%"
                        >
                          <Text fontSize={15} as="b">
                           RAPID GRAB
                          </Text>
                          <Accordion allowMultiple>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">
                                    Sort By
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                <RadioGroup >
                                  <Stack>
                                      <Radio
                                        value="desc"
                                        name="sortBy"
                                        
                                      >
                                        High Price
                                      </Radio>
                                      <br />
                                      <Radio
                                        value="asc"
                                        name="sortBy"
                                       
                                      >
                                        Low Price
                                      </Radio>
                               
                                  </Stack>
                                </RadioGroup>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                      
                        </Box>
                      </DrawerBody>

                      <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </div>
              ) : null}
            </div>
          ) : null}
          {!ismaxThan768 ? null : (
            <Box 
              position="fixed"
              width={["40%", "40%", "30%", "19%"]}
              h="700vh"
              mt={100}
            >
              
              <Box
                className="filter"
                textAlign="left"
                mt={5}
                pt={3}
                pl={2}
                width="100%"
                height="100%"
              >
                <Text fontSize={15} as="b">
                  FILTER & SORT
                </Text>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Sort By
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <RadioGroup onChange={setsortValue} value={sortValue}>
                        <Stack>
                         
                          <div >
                            <Radio
                              value="desc"
                              name="sortBy"
                              
                            >
                              Ascending
                            </Radio>
                            <br />
                            <Radio
                              value="asc"
                              name="sortBy"
                            
                            >
                              Descending
                            </Radio>
                          </div>
                        </Stack>
                      </RadioGroup>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              
              </Box>
            </Box>
          )}

          {/* <Box ml={[0, 300, 300, 350]} width={["60%", "60%", "70%", "77%"]}>
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
             
                  <GridItem>
                    <Link >
                      <Card maxW="sm">
                        <CardBody>
                          <Image
                          />
                          <Stack mt="6" spacing="3">
                            <Heading size="md"></Heading>
                            <Text color="gray"></Text>
                          </Stack>
                        </CardBody>
                      </Card>
                    </Link>
                  </GridItem>
           
            </Grid>
           
          </Box> */}
        </Flex>
      </Box>
    </Box>
  )
}

export default AdminSide