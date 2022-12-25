import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import TextBox from "lib/components/charts/TextBox";

const About = () => {
  const bgCard = useColorModeValue("white", "#191919");
  return (
    <>
      <Box mx={"auto"} py="6" px={{ base: 6, sm: 2, md: 8 }}>
        <TextBox></TextBox>
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
    </>
  );
};

export default About;
