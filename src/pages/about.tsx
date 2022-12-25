import { Box, GridItem, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import TextBox from "lib/components/charts/TextBox";

const About = () => {
  const bgCard = useColorModeValue("white", "#191919");
  return (
    <>
      <SimpleGrid
        my={"6"}
        px={6}
        columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        <GridItem
          colSpan={3}
          height={"320px"}
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg)",
            backgroundPosition: "25% center",
            backgroundSize: "cover",
          }}
          width="100%"
          borderRadius={"lg"}
          position="relative"
        >
          <Box position={"absolute"} bottom="8px" width={"100%"} px="8px">
            <TextBox hasPattern>
              {`## elSina


  [Page Source by elSina(SETBAP)](https://github.com/setbap/terradashprime)
`}
            </TextBox>
          </Box>
        </GridItem>
        <TextBox hasPattern spanSize={1}>
          {`
__Twitter__
          
##### [@elSinaCrypto](https://twitter.com/elsinaCrypto)
`}
        </TextBox>
        <TextBox hasPattern spanSize={1}>
          {`
__Discord__
          
##### [@elsina#6747](https://twitter.com/elsinaCrypto)
`}
        </TextBox>
        <TextBox hasPattern spanSize={1}>
          {`
__Github__
          
 ##### [ @SETBAP](https://github.com/setbap)
`}
        </TextBox>
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
      </SimpleGrid>
    </>
  );
};

export default About;
