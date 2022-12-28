import {
  useColorModeValue,
  Button,
  Flex,
  IconButton,
  FlexProps,
  Box,
  Text,
} from "@chakra-ui/react";
import names from "lib/utility/names";
import Image from "next/image";

import sideMenuItems from "lib/utility/sideMenuItems";
import { useRouter } from "next/router";
import { FiInfo } from "react-icons/fi";
import CurrentStatusPage from "./CurrentStatusPage";
import ThemeToggle from "./ThemeToggle";
interface DesktopProps extends FlexProps {
  onOpen: () => void;
}

const terraGradient = "linear-gradient(90deg, #ff6f03 0%, #ffd83d 100%)";
const terraGradientLightOverlay =
  "linear-gradient(90deg, #17285240 0%, #17285272 100%)";
const terraGradientDarkOverlay =
  "linear-gradient(90deg, #17285210 0%, #17285222 100%)";

export const DesktopNav = ({ onOpen, ...rest }: DesktopProps) => {
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
      bg={terraGradient}
      overflow="hidden"
    >
      <Box
        position={"absolute"}
        inset="0"
        zIndex={"0"}
        filter=""
        bg={useColorModeValue(
          terraGradientDarkOverlay,
          terraGradientLightOverlay
        )}
      />
      <Box
        zIndex={"banner"}
        position="relative"
        width={"100%"}
        borderRadius={"2xl"}
        py={2}
        px={3}
        bg={useColorModeValue("#a9a9a95b", "#1919197b")}
        backdropBlur="2xl"
        justifyContent={"space-between"}
        experimental_spaceX="2"
        flexWrap="nowrap"
        display={"flex"}
        flex="row"
      >
        <Box experimental_spaceX={"1"}>
          {sideMenuItems.map((link, index) => (
            <Button
              size={"sm"}
              _hover={{
                bg: useColorModeValue("#2224", "#a9a9a92b"),
              }}
              borderWidth="1px"
              borderColor={useColorModeValue("#0003", "#a9a9a97b")}
              bg={router.pathname === link.path ? "#0003" : "transparent"}
              textColor={"white"}
              onClick={() => {
                router.push(link.path);
              }}
              key={link.name}
            >
              {link.name}
            </Button>
          ))}
        </Box>

        {router.pathname !== "/about" && <CurrentStatusPage />}
      </Box>
    </Box>
  );
};

const DesktopTopNav = () => {
  const router = useRouter();
  const terraGradient = "linear-gradient(90deg, #ff6f03 0%, #ffd83d 100%)";
  return (
    <Flex
      p={1}
      bg={terraGradient}
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
          alt="terra network image"
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
          textColor={"white"}
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
        bg={useColorModeValue(
          terraGradientDarkOverlay,
          terraGradientLightOverlay
        )}
      />

      <Box experimental_spaceX={"2"} mr={"4"} textAlign="end">
        <IconButton
          zIndex={1}
          bg="#fff2"
          size={"sm"}
          onClick={() => router.push("/about")}
          aria-label="About"
          icon={<FiInfo />}
        />

        <ThemeToggle />
      </Box>
    </Flex>
  );
};
