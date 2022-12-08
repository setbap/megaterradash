import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import TextBox from "lib/components/charts/TextBox";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { WalletProps } from "pages/wallet";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

const Governance = ({
  walletsActive,
  walletsNew,
}: WalletProps): JSX.Element => {
  const walletsActiveNames = walletsActive.title.split(",");
  const walletsNewNames = walletsNew.title.split(",");

  return (
    <>
      <NextSeo
        title={`Terra | Wallets`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Terra | Wallets`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} pt="4" px={{ base: 3, sm: 2, md: 8 }}>
        <TextBox>
          {`
### Terra Wallet 
should be filled
`}
        </TextBox>
        <Box pt={"4"}></Box>
        <TextBox>
          {`
#### Glance
should be filled
`}
        </TextBox>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={walletsNew.data.at(-1)?.["AVG New wallet"]!}
            title={walletsNewNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={walletsNew.key}
          />
          <StatsCard
            stat={walletsActive.data.at(-1)?.["AVG active wallet"]!}
            title={walletsActiveNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={walletsActive.key}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <TextBox>
            {`
#### Active Wallets
some info
`}
          </TextBox>
          <LineChartWithBar
            customColor={colors[3]}
            barColor={colors[3]}
            data={walletsActive.data}
            queryLink={walletsActive.key}
            title={walletsActiveNames[1]}
            baseSpan={3}
            infoSizePercentage={25}
            barDataKey={"Active wallet"}
            lineDataKey="AVG active wallet"
            xAxisDataKey="Day"
          />
          <ChartBox
            data={walletsNew.data}
            queryLink={walletsNew.key}
            baseSpan={3}
            modelInfo="3234"
            areaDataKey="Cum new wallet"
            xAxisDataKey="Day"
            oyLabel="Count"
            title={walletsNewNames[0]}
          />
          <TextBox>
            {`
#### New Wallets
some info
`}
          </TextBox>
          <LineChartWithBar
            customColor={colors[3]}
            barColor={colors[3]}
            data={walletsNew.data}
            queryLink={walletsNew.key}
            title={walletsNewNames[1]}
            baseSpan={3}
            infoSizePercentage="full"
            modelInfo="3234"
            barDataKey={"New wallet"}
            lineDataKey="AVG new wallet"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
