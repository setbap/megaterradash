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
interface DesktopProps extends FlexProps {
  onOpen: () => void;
}

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
        justifyContent={"space-between"}
        experimental_spaceX="2"
        flexWrap="nowrap"
        display={"flex"}
        flex="row"
      >
        <Box experimental_spaceX={"1"}>
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

        <CurrentStatusPage key={router.pathname} />
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
