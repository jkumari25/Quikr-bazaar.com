import { Box, Container, Image, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { ListHeader } from './ListHeader';
import { SocialButton } from './SocialButton';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      // border="2px solid red"
      borderTop={"1px solid lightgrey"}
      mt={"2rem"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>rapidgrab</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>In News</Link>
            <Link href={"#"}>Green rapidgrab</Link>
            <Link href={"#"}>Affiliate</Link>
            <Link href={"#"}>Careers At rapidgrab</Link>
            <Link href={"#"}>rg instant</Link>
            <Link href={"#"}>rg Daily</Link>
            <Link href={"#"}>rg Blog</Link>
            <Link href={"#"}>rgnow</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Help</ListHeader>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>rg Wallet FAQs</Link>
            <Link href={"#"}>rg Wallet T&Cs</Link>
            <Link href={"#"}>Vendor Connect</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Download Our App</ListHeader>
            <Image src='https://www.bbassets.com/static/v2639/custPage/build/content/img/Google-App-store-icon.png' alt='icon'/>
            <Image src='https://www.bbassets.com/static/v2639/custPage/build/content/img/Apple-App-store-icon.png' alt='icon'/>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>Copyright © 2022-2024 Electronics & Appliances Supplies Pvt Ltd</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}