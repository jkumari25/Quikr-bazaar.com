import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import {
  Collapse,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";


export const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export const NAV_ITEMS = [
  
  {
    label: "Admin",
    href: "/adminlogin",
  },
  {
    label: "Login/Register",
    href: "/signup",
  },
  {
    label: "Mobile & Tablets",
    children: [
      {
        label: "Used Mobiles",
        href: "/product",
      },
      {
        label: "Tablets",
        href: "#",
      },
      {
        label: "Accessories",
        href: "#",
      },
      {
        label: "Wearables",
        href: "#",
      },
      {
        label: "View All",
        href: "#",
      },
    ],
  },
  {
    label: "Home & Lifestyle",
    children: [
      {
        label: "Washing Machines",
        href: "#",
      },
      {
        label: "Refrigerators",
        href: "#",
      },
    ],
  },
  {
    label: "Electronics & Appliances",
    children: [
      {
        label: "Televisions",
        href: "#",
      },
      {
        label: "Cameras",
        href: "#",
      },
    ],
  },
];
