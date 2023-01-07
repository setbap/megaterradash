import { Box, SimpleGrid } from "@chakra-ui/react";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { IBCProps } from "pages/ibc";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StateCardRemoteData } from "lib/components/charts/StateCardRemoteData";
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

const Staking = ({ bridgeTransactions }: IBCProps): JSX.Element => {
  const bridgeTransactionsNames = bridgeTransactions.title.split(",");

  return (
    <>
      <NextSeo
        title={`Terra | IBC`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Terra | IBC`,
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
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          pb={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="IBC" />

          <HeaderSection title="IBC Transferring Over time" />

          <BarGraph
            values={bridgeTransactions.data.dailyValueChain}
            queryLink={bridgeTransactions.key}
            modalInfo=""
            title={bridgeTransactionsNames[2]}
            baseSpan={3}
            dataKey="Day"
            oyLabel="$Luna"
            oxLabel=""
            labels={[
              {
                key: "Volume",
                color: colors[0],
              },
            ]}
          />
          <LineChartWithBar
            data={bridgeTransactions.data.dailyTXAndUnique}
            queryLink={bridgeTransactions.key}
            title={bridgeTransactionsNames[3]}
            baseSpan={3}
            customColor={colors[3]}
            barColor={colors[3]}
            hideLine
            xAxisDataKey="Day"
            barDataKey={"tx count"}
            additionalLineKey={["Unique wallet"]}
            lineDataKey="fake"
          />
          <HeaderSection title="IBC Out over time" />
          {[
            { name: "outflowEachChainTxCount", label: "TX count" },
            { name: "outflowEachChainVolume", label: "$Luna" },
          ].map((item, index) => (
            <StackedAreaChart
              key={item.name}
              values={bridgeTransactions.data[item.name]}
              queryLink={bridgeTransactions.key}
              modalInfo=""
              title={bridgeTransactionsNames[4 + index]}
              baseSpan={3}
              dataKey="Name"
              oyLabel={item.label}
              oxLabel="Action"
              labels={bridgeTransactions.data.chains.map(
                (item: string, index: number) => ({
                  key: item,
                  color: colors[index % colors.length],
                })
              )}
            />
          ))}
          <HeaderSection title="Popular Destinations from Terra" />

          <DonutChart
            queryLink={bridgeTransactions.key}
            data={bridgeTransactions.data.valueChain}
            modalInfo=""
            baseSpan={2}
            title={bridgeTransactionsNames[0]}
            nameKey="Destination chain"
            dataKey="Volume"
          />

          <DonutChart
            queryLink={bridgeTransactions.key}
            data={bridgeTransactions.data.txChain}
            modalInfo=""
            baseSpan={1}
            title={bridgeTransactionsNames[1]}
            nameKey="Destination chain"
            dataKey="tx count"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Staking;
