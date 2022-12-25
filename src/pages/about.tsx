import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import MDRenderer from "lib/components/basic/MDRenderer";
import TextBox from "lib/components/charts/TextBox";

const About = () => {
  const bgCard = useColorModeValue("white", "#191919");
  return (
    <>
      <Box mx={"auto"} py="6" px={{ base: 6, sm: 2, md: 8 }}>
        <Box
          width={"100%"}
          px="6"
          py="2"
          shadow="base"
          borderRadius={"lg"}
          backgroundColor={bgCard}
          pb={8}
          aria-label="about this dashboard"
        >
          <TextBox>
            {`

## About

This dashboard is made with love by members of the Terra community, in partnership with MetricsDao and Flipside Crypto. We hope it serves as a valuable window into high-level metrics that display the vitality and growth of the Terra Blockchain.

  


  
### Methodology

-   Data is drawn from a combination of Flipside Crypto’s Terra tables and existing APIs.
    
-   For charts where data comes from Flipside’s data, a link to the underlying query is provided in the Settings gear wheel at the top right of each visualization.
    

Last Updated: __Dec 25, 2022__
`}
          </TextBox>
        </Box>
      </Box>
    </>
  );
};

export default About;
