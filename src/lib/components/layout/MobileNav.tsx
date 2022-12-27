import {
  Box,
  Flex,
  useColorModeValue,
  IconButton,
  FlexProps,
  Text,
} from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import names from "lib/utility/names";
import { useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import CurrentStatusPage from "./CurrentStatusPage";
interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const MobileNav = ({ onOpen }: MobileProps) => {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    scrollY.onChange(() => {
      if (Math.abs(scrollY.getVelocity()) > 70) {
        if (scrollY.getVelocity() > 0) {
          ref.current?.classList.add("hide");
        } else {
          ref.current?.classList.remove("hide");
        }
      }
    });
    return () => {};
  }, []);

  return (
    <Flex
      ref={ref}
      className="gradient-border base-anime"
      alignItems="center"
      position={"sticky"}
      top={0}
      zIndex="banner"
      bg={useColorModeValue("white", "#191919")}
      display={{ base: "flex", md: "none" }}
      flexDir="column"
    >
      <MobileTopNavShow onOpen={onOpen} />
      <MobileNavRow onOpen={onOpen} />
    </Flex>
  );
};
const MobileTopNavShow = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Flex
      w={"full"}
      p={1}
      bg={useColorModeValue(
        "white",
        "linear-gradient(90deg, #ff6f03 0%, #ffd83d 100%)"
      )}
      width={"full"}
      justifyContent={"center"}
      alignItems="center"
      position={"relative"}
      overflow="hidden"
      zIndex="1"
    >
      <Box mx={"1"} display={"flex"} alignItems="center">
        <Image
          style={{ transform: "scale(1.4)", zIndex: "1" }}
          width={40}
          height={40}
          src={"/terra.svg"}
        />
        <Text
          mx={"2"}
          fontFamily="'Carter One', cursive"
          fontSize="xl"
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
    </Flex>
  );
};
const MobileNavRow = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Flex
      w={"full"}
      p={1}
      bg={useColorModeValue(
        "white",
        "linear-gradient(90deg, #ff6f03 0%, #ffd83d 100%)"
      )}
      width={"full"}
      justifyContent={"space-between"}
      alignItems="center"
      position={"relative"}
      overflow="hidden"
      zIndex="1"
    >
      <Box mx={"1"} zIndex="1" display={"flex"} alignItems="center">
        <CurrentStatusPage />
      </Box>
      <Box
        position={"absolute"}
        inset="0"
        zIndex={"0"}
        filter=""
        bg={"linear-gradient(90deg, #17285240 0%, #17285272 100%)"}
      />
      <Box marginEnd={"4"}>
        <IconButton
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Box>
    </Flex>
  );
};
