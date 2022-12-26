import React, { ReactNode, useEffect } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  useColorMode,
  Tabs,
  Tab,
  TabList,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiMenu, FiInfo } from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { useRouter } from "next/router";
import MotionBox from "../motion/Box";
import names from "lib/utility/names";
import sideMenuItems from "lib/utility/sideMenuItems";
import Image from "next/image";

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, []);
  const variants = {
    hidden: { opacity: 0.01 },
    enter: { opacity: 1 },
    exit: { opacity: 0.01 },
  };
  return (
    <MotionBox
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      minH="calc( 100vh - 2px )"
      bg={useColorModeValue(
        " linear-gradient(to top, #e2ebf0 0% , #cfd9df  100%)",
        "linear-gradient(to top, #090909,#000000)"
      )}
    >
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        closeOnOverlayClick
        closeOnEsc
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <HeaderNav onOpen={onOpen} />

      <MobileNav onOpen={onOpen} />

      {/* <HStack gap={"2"} spacing={{ base: "0", md: "6" }}>
        <ConnectWallet />
        <ThemeToggle /> 
      </HStack> */}

      <Box mx="auto">{children}</Box>
    </MotionBox>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();
  return (
    <Box
      overflowX={"hidden"}
      transition="0.7s ease"
      bg={useColorModeValue("#0046a8", "#1c1c1c")}
      color={"white"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 64 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="semibold">
          <NextLink href={"/"} passHref>
            <>
              <Box
                display={"inline"}
                fontFamily="sans-serif"
                fontSize="2xl"
                ps={"2"}
                color="white"
                fontWeight={"extrabold"}
              >
                {names.APP_NAME}
              </Box>
            </>
          </NextLink>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {sideMenuItems.map((link) => (
        <NavItem
          isActive={router.pathname === link.path}
          path={link.path}
          key={link.name}
          icon={link.icon}
        >
          {link.name}
        </NavItem>
      ))}
      <NavItem
        isActive={router.pathname === "/about"}
        path={"about"}
        icon={FiInfo}
      >
        About
      </NavItem>
    </Box>
  );
};

const MobileNav = ({ onOpen }: MobileProps) => {
  return (
    <Flex
      className="gradient-border"
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="14"
      alignItems="center"
      bg={useColorModeValue("white", "#191919")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      display={{ base: "flex", md: "none" }}
    >
      <Box marginEnd={"4"}>
        <IconButton
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Box>
      <Text
        display={{ base: "flex", md: "none" }}
        alignItems="baseline"
        fontSize="xl"
        fontWeight="semibold"
      >
        <NextLink href={"/"} passHref>
          <>
            <Box
              display={"inline"}
              fontFamily="sans-serif"
              fontSize="2xl"
              fontWeight={"extrabold"}
            >
              {names.APP_NAME}
            </Box>
          </>
        </NextLink>
      </Text>
    </Flex>
  );
};
const HeaderNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      px={"8"}
      pb={"4"}
      position="sticky"
      top={"4"}
      zIndex="dropdown"
    >
      <DesktopTopNav />

      <DesktopLinkNav />
    </Box>
  );
};
const DesktopLinkNav = () => {
  const router = useRouter();
  return (
    <Box
      position={"relative"}
      borderBottomRadius={"xl"}
      pb="2px"
      px={"3px"}
      bg={useColorModeValue(
        "white",
        "linear-gradient(90deg, #ff6f03 0%, #ffd83d 100%)"
      )}
    >
      <Box
        position={"absolute"}
        inset="0"
        zIndex={"0"}
        filter=""
        bg={"linear-gradient(90deg, #17285240 0%, #17285272 100%)"}
      />
      <Box
        zIndex={"banner"}
        position="relative"
        width={"100%"}
        borderRadius={"2xl"}
        py={2}
        px={3}
        bg={useColorModeValue("white", "#1919197b")}
        backdropBlur="2xl"
        justifyContent={"center"}
        overflowX={"auto"}
        experimental_spaceX="2"
        flexWrap="nowrap"
      >
        {sideMenuItems.map((link, index) => (
          <Button
            variant={router.pathname === link.path ? "solid" : "outline"}
            size={"sm"}
            onClick={() => {
              router.push(link.path);
            }}
            key={link.name}
          >
            {link.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
const DesktopTopNav = () => {
  const router = useRouter();
  return (
    <Flex
      p={1}
      bg={useColorModeValue(
        "white",
        "linear-gradient(90deg, #ff6f03 0%, #ffd83d 100%)"
      )}
      width={"full"}
      justifyContent={"space-between"}
      alignItems="center"
      position={"relative"}
      borderTopRadius={"xl"}
      overflow="hidden"
      zIndex="1"
    >
      <Box mx={"2"} display={"flex"} alignItems="center">
        <Image
          style={{ transform: "scale(1.7)", zIndex: "1" }}
          width={40}
          height={40}
          src={"/terra.svg"}
        />
        <Text
          mx={"2"}
          fontFamily="'Carter One', cursive"
          fontSize="2xl"
          letterSpacing={"wide"}
          fontWeight={"extrabold"}
          zIndex="1"
        >
          {names.APP_NAME}
        </Text>
      </Box>
      <Box
        position={"absolute"}
        inset="0"
        zIndex={"0"}
        filter=""
        bg={"linear-gradient(90deg, #17285240 0%, #17285272 100%)"}
      />

      <Box mr={"4"} textAlign="end">
        <IconButton
          zIndex={1}
          size={"sm"}
          onClick={() => router.push("/about")}
          aria-label="About"
          icon={<FiInfo />}
        />
      </Box>
    </Flex>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: ReactText;
  isActive: boolean;
}
const NavItem = ({ icon, isActive, path, children, ...rest }: NavItemProps) => {
  const activeBgColor = useColorModeValue("gray.200", "#232323");
  return (
    <NextLink href={path} passHref>
      <Link style={{ textDecoration: "none" }}>
        <Flex
          align="center"
          ps="4"
          py={"4"}
          mx="3"
          mb={"1"}
          transition="all 0.7s ease"
          borderRadius="lg"
          role="group"
          fontSize="md"
          fontWeight="medium"
          cursor="pointer"
          border={"1.5px solid transparent"}
          shadow={isActive ? "inner" : "none"}
          borderColor={isActive ? "white" : "transparent"}
          _hover={{
            borderColor: "whiteAlpha.500",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="1rem"
              fontWeight={"bold"}
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
