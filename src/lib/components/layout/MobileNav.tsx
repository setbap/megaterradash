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
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/router";
interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const terraGradient = "linear-gradient(90deg, #ff6f03 0%, #ffd83d 100%)";
const terraGradientDarkOverlay =
  "linear-gradient(90deg, #17285240 0%, #17285272 100%)";
const terraGradientLightOverlay =
  "linear-gradient(90deg, #17285230 0%, #17285222 100%)";

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
      bg={useColorModeValue("var(--chakra-colors-gray-200)", "#191919")}
      display={{ base: "flex", md: "none" }}
      flexDir="column"
    >
      <MobileTopNavShow onOpen={onOpen} />
      <MobileNavRow onOpen={onOpen} />
    </Flex>
  );
};
const MobileTopNavShow = ({}: { onOpen: () => void }) => {
  const bgColor = useColorModeValue(
    terraGradientLightOverlay,
    terraGradientDarkOverlay
  );
  return (
    <Flex
      w={"full"}
      p={1}
      bg={terraGradient}
      width={"full"}
      justifyContent={"space-between"}
      alignItems="center"
      position={"relative"}
      overflow="hidden"
      zIndex="1"
      px={"6"}
    >
      <Box width={"8"} />
      <Box mx={"1"} display={"flex"} alignItems="center">
        <Image
          alt="terra image"
          style={{ transform: "scale(1.4)", zIndex: "1" }}
          width={40}
          height={40}
          src={"/terra.svg"}
        />
        <Text
          mx={"2"}
          fontFamily="'Carter One', cursive"
          fontSize="xl"
          textColor={"white"}
          letterSpacing={"wide"}
          fontWeight={"extrabold"}
          zIndex="1"
        >
          {names.APP_NAME}
        </Text>
      </Box>
      <ThemeToggle />

      <Box
        position={"absolute"}
        inset="0"
        zIndex={"0"}
        filter=""
        bg={bgColor}
      />
    </Flex>
  );
};
const MobileNavRow = ({ onOpen }: { onOpen: () => void }) => {
  const bgColor = useColorModeValue(
    terraGradientLightOverlay,
    terraGradientDarkOverlay
  );
  const router = useRouter();
  return (
    <Flex
      w={"full"}
      p="2"
      bg={terraGradient}
      width={"full"}
      justifyContent={"space-between"}
      alignItems="center"
      position={"relative"}
      overflow="hidden"
      zIndex="1"
    >
      <Box mx={"1"} zIndex="1" display={"flex"} alignItems="center">
        {router.pathname !== "/about" && <CurrentStatusPage />}
      </Box>
      <Box
        position={"absolute"}
        inset="0"
        zIndex={"0"}
        filter=""
        bg={bgColor}
      />
      <Box marginEnd={4}>
        <IconButton
          size={"sm"}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
      </Box>
    </Flex>
  );
};
