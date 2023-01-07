import { Box, color, SimpleGrid } from "@chakra-ui/react";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { SupplyProps } from "pages/supply";
import BarGraph from "lib/components/charts/BarGraph";

import HeaderSection from "lib/components/basic/HeaderSection";
import millify from "millify";
import { Top100Richlist } from "lib/types/types/supply";
import { ColumnDef } from "@tanstack/react-table";
import TableBox from "lib/components/charts/TableBox";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";

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

const colDef: ColumnDef<Top100Richlist>[] = [
  {
    accessorFn: (row) => row.Wallet,
    enableSorting: false,
    id: "Wallet",
    cell: (info) => info.getValue(),
    header: () => <span>Wallet</span>,
  },
  {
    accessorFn: (row) => row["Balance"],
    id: "Balance",
    cell: (info) =>
      millify(info.getValue() as number, {
        precision: 2,
        decimalSeparator: ".",
      }),
    header: () => <span>Balance</span>,
  },
];

const Staking = ({
  top100Richlist,
  supplyInfo,
  vestingSchedul,
}: SupplyProps): JSX.Element => {
  const supplyInfoNames = supplyInfo.title.split(",");
  return (
    <>
      <NextSeo
        title={`Terra | Supply`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Terra | Supply`,
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
        <HeaderSection title="Terra Supply">
          {`

- **Total supply**: Total supply of a token refers to the total number of coins or tokens that currently exist and are either in circulation or locked somehow. it can be determined by adding the circulating supply to the number of coins that have been mined but not yet distributed in the market.

- **Circulating supply**: Circulating supply is the total number of coins or tokens that are actively available for trade and are being used in the market and in general public. This value fluctuates over time, as tokens can be minted, burned, or locked up as part of a project's protocol or roadmap.
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
            stat={supplyInfo.data["Total Supply"]}
            title={supplyInfoNames[0]}
            status="inc"
            unit=""
            isExternalLink
            hasArrowIcon={false}
            link={supplyInfo.key}
          />

          <StatsCard
            stat={supplyInfo.data["Circulating Supply"]}
            title={supplyInfoNames[1]}
            status="inc"
            unit=""
            isExternalLink
            hasArrowIcon={false}
            link={supplyInfo.key}
          />

          <StatsCard
            stat={
              supplyInfo.data[
                "Ratio of Circulation Supply from Total Supply (%)"
              ]
            }
            title={supplyInfoNames[2]}
            status="inc"
            unit="%"
            isExternalLink
            hasArrowIcon={false}
            link={supplyInfo.key}
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
          <HeaderSection title="Top Holders" />
          <TableBox
            customHeaderColor={colors[2]}
            queryLink={top100Richlist.key}
            title={top100Richlist.title}
            baseSpan={3}
            tablePageSize={10}
            modalInfo={``}
            data={top100Richlist.data}
            columnsDef={colDef}
          />
          <StackedAreaChart
            title={"Terra Vesting Schedule"}
            dataKey={"dates"}
            oxLabel={""}
            oyLabel={""}
            values={vestingSchedul}
            modalInfo={""}
            baseSpan={3}
            labels={[
              { key: "Community Pool", color: colors[0] },
              { key: "Pre Aust", color: colors[1] },
              { key: "Pre Lunc", color: colors[2] },
              { key: "Post Lunc", color: colors[3] },
              { key: "Post Aust", color: colors[4] },
              { key: "Dev", color: colors[5] },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Staking;
