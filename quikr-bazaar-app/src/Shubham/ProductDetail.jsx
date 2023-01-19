import React from 'react'
import { border, Box, Button, Flex, HStack, Img, SimpleGrid, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
// import { useMedia } from 'react';
import style from "./styles/ProductDetail.module.css"


const ProductDetail = () => {

    let hoverimg = e => {
        let fullImg = document.getElementById("image-box");
        fullImg.src = e.target.src;

    }
    const columns = useBreakpointValue({
        base: "80%",
        md: "80%",
        lg: "30% 70%"
    });



    return (
        <Box
            id='about'
            paddingY="90px"
            h="fit-content"
            boxSize="border-box"
           

            bg="#f8f8f8">

            <SimpleGrid

                width={["100%", "90%", "75%"]}
                border={"3px solid brown"}
               
                spacing={["10", "20", "25"]}
                margin={"auto"}
                gridTemplateColumns={columns}
            >

                <Stack
                    width={["100%", "90%", "100%"]}
                    border={"3px solid green"}
                    // height={["480"]}
                    h='fit-content'

                >
                    <Img
                        height={["320px", "350px", "400px"]}
                        h='fit-content'
                        boxSizing="border-box"

                        // border={"8px solid black"}
                        id='image-box'
                        paddingY="20%"
                        paddingX="10%"
                        width={"100%"}
                        src="./assets/mobile2.jpeg"
                        alt="about"

                    />

                    <HStack
                        border={"4px solid pink "}
                        justifyContent="center"
                        alignItems="center"
                        width="100%"

                    >

                        <Img
                            className={style.hvr}
                            onMouseOver={hoverimg}
                            height="70px"

                            border="2px solid gray"
                            width="30%"
                            src='./assets/mobile.jpeg'
                            alt='mobile' />
                        <Img
                            className={style.hvr}
                            onMouseOver={hoverimg}
                            height="70px"
                            border="2px solid gray"
                            width="30%"
                            src='./assets/mobile2.jpeg'
                            alt='mobile' />
                        <Img
                            className={style.hvr}
                            onMouseOver={hoverimg}
                            height="70px"
                            border="2px solid gray"
                            width="30%"
                            src='./assets/mobile3.jpeg'
                            alt='mobile' />
                    </HStack>

                </Stack>
                <Stack
                    border="2px solid red"
                >
                    <Stack
                        textAlign="start"
                    >
                        <Text
                            fontWeight="700"
                            fontSize={["22", "26", "32"]}
                        >
                            Samsung Galaxy S8 Plus (6GB/128GB)
                        </Text>

                        <Text
                            fontSize={['12px', '16px', '18px']}
                            style={{
                                textDecoration: "underline",
                                textUnderlineOffset: "5px",
                                textDecorationColor: "#008bcf ",
                                fontWeight: "500",

                            }}
                        >Specifications
                        </Text>

                        <SimpleGrid
                            columns="2"
                        >
                            <Text
                                color="gray">
                                Primary Camera
                            </Text>
                            <Text>12MP</Text>
                            <Text
                                color="gray">
                                Secondary Camera
                            </Text>
                            <Text>8MP</Text>
                            <Text
                                color="gray">
                                Operating System
                            </Text>
                            <Text>Android</Text>
                            <Text
                                color="gray">
                                No of SIM
                            </Text>
                            <Text>Dual</Text>
                            <Text
                                color="gray">
                                SIM Type
                            </Text>
                            <Text>Nano SIM</Text>
                            <Text
                                color="gray">
                                RAM
                            </Text>
                            <Text>6GB</Text>
                            <Text
                                color="gray">
                                Internal Memory
                            </Text>
                            <Text>128GB</Text>
                            <Text
                                color="gray">
                                Display Resolution
                            </Text>
                            <Text>2960 x 1440 pixels</Text>
                            <Text
                                color="gray">
                                Size
                            </Text>
                            <Text>159.5 x 73.4 x 8.1</Text>


                        </SimpleGrid>
                        <Stack
                            border="2px solid red"
                        >
                            <Text
                                fontSize={['18', '24', '28']}
                                fontWeight={['400', '500', '700']}
                                color="#0083ca">
                                ₹ 15,999
                            </Text>
                            <HStack
                                border="2px solid violet"
                                paddingY="30px"
                                spacing={['14', '18', '28']}
                            >

                                <Button className={style.hvr} bg=""> CHAT </Button>

                                <Button className={style.hvr} bg="">ADD TO CART </Button>




                            </HStack>

                        </Stack>
                    </Stack>

                </Stack>


            </SimpleGrid>
        </Box >

    )
}

export default ProductDetail
