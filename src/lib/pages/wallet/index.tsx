import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";

import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { WalletProps } from "pages/wallet";
import HeaderSection from "lib/components/basic/HeaderSection";

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
  activeWalletSingleNumber,
  walletsNewSingleNumber,
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
        <HeaderSection title="Terra Wallet ">
          {`
In this page we review all information users (addresses) that currently done t transaction in Terra to see what is status of Terra from user side. Terra addresses reviewed from two side:

* **Active Wallets:** Number of those wallets made at least a transaction during curtain period.

* **New Wallets:** Number of those wallets made their first transactions.
`}
        </HeaderSection>
        <Box pt={"4"}></Box>
        <HeaderSection title="Glance">
          {`
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
        </HeaderSection>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={walletsNewSingleNumber.data["AVG New wallet"]}
            title={walletsNewSingleNumber.title}
            status="inc"
            hasArrowIcon={false}
            link={walletsNewSingleNumber.key}
          />
          <StatsCard
            stat={activeWalletSingleNumber.data["AVG active wallet"]}
            title={activeWalletSingleNumber.title}
            status="inc"
            hasArrowIcon={false}
            link={activeWalletSingleNumber.key}
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
          <HeaderSection title="Active Wallets">
            {`
number of active wallets is one of most important metrics for reviewing is one network work currently and has wired function
`}
          </HeaderSection>
          <LineChartWithBar
            customColor={colors[3]}
            barColor={colors[3]}
            data={walletsActive.data}
            queryLink={walletsActive.key}
            title={walletsActiveNames[1]}
            baseSpan={3}
            infoSizePercentage={"full"}
            modelInfo={`as we see in data clearly shows number of users reduces in last month like other blockchains and (all platform in web3) but in two point number of active user go up. 

- first in start of Terra and this is usually and people want to try new Terra and 
- second in middle of Sep and after Terra price go up but after that this number go down

Q4 is worst quatre for crypto and Terra isn't only one. in these month's we see all of blockchain record worse record of their
            `}
            barDataKey={"Active wallet"}
            lineDataKey="AVG active wallet"
            xAxisDataKey="Day"
          />
          <HeaderSection title="New Wallets">
            {`
every blockchain to growth and expand and adapted to the real world need new user.
`}
          </HeaderSection>
          <ChartBox
            data={walletsNew.data}
            queryLink={walletsNew.key}
            baseSpan={3}
            infoSizePercentage={25}
            areaDataKey="Cum new wallet"
            xAxisDataKey="Day"
            oyLabel="Count"
            title={walletsNewNames[0]}
          />

          <LineChartWithBar
            customColor={colors[3]}
            barColor={colors[3]}
            data={walletsNew.data}
            queryLink={walletsNew.key}
            title={walletsNewNames[1]}
            baseSpan={3}
            infoSizePercentage="full"
            modelInfo="as data shows in last day of may and with start of the new Terra lot's of new user join but as time goes we see this growth reduced.this is not new thing and if review new user in all blockchain available patternS effect shown it self and like active wallets in mid of Sep and as Terra price go lot's of new wallet join Terra but after price drop these users reduces "
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
