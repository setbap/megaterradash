import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components: {
    Button,
  },
});

export default customTheme;
