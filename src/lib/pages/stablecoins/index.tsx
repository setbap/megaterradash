import { Box, SimpleGrid } from "@chakra-ui/react";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import DonutChart from "lib/components/charts/DonutChart";
import BarGraph from "lib/components/charts/BarGraph";
import HeaderSection from "lib/components/basic/HeaderSection";
import { StablecoinProps } from "pages/stablecoins";

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

const Development = ({
  developmentWeeklyInflowTransaction,
  developmentWeeklyOutflowTransaction,
  developmentAXLUSDCestination,
  developmentAXLUSDTestination,
  developmentStablecoinsDestination,
}: StablecoinProps): JSX.Element => {
  const developmentWeeklyInflowTransactionNames =
    developmentWeeklyInflowTransaction.title.split(",");

  const developmentWeeklyOutflowTransactionNames =
    developmentWeeklyOutflowTransaction.title.split(",");

  const developmentAXLUSDCestinationNames =
    developmentAXLUSDCestination.title.split(",");

  const developmentAXLUSDTestinationNames =
    developmentAXLUSDTestination.title.split(",");

  const developmentStablecoinsDestinationNames =
    developmentStablecoinsDestination.title.split(",");
  return (
    <>
      <NextSeo
        title={`Terra | Stablecoin`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Terra  | Stablecoin`,
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
        <HeaderSection title="Stablecoins" />

        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Weekly inflow transactions" />

          <DonutChart
            queryLink={developmentWeeklyInflowTransaction.key}
            data={
              developmentWeeklyInflowTransaction.data
                .shareStablecoinInflowShareVolume
            }
            modalInfo=""
            baseSpan={1}
            title={developmentWeeklyInflowTransactionNames[0]}
            nameKey="STABLECOINS"
            dataKey="Volume"
          />

          <BarGraph
            values={
              developmentWeeklyInflowTransaction.data
                .stablecoinAverageInflowTransaction
            }
            isSeprate
            queryLink={developmentWeeklyInflowTransaction.key}
            modalInfo=""
            title={developmentWeeklyInflowTransactionNames[2]}
            baseSpan={2}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentWeeklyInflowTransaction.data.stablecoinsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <DonutChart
            queryLink={developmentWeeklyInflowTransaction.key}
            data={
              developmentWeeklyInflowTransaction.data
                .shareStablecoinInflowShareTXCount
            }
            modalInfo=""
            baseSpan={1}
            title={developmentWeeklyInflowTransactionNames[1]}
            nameKey="STABLECOINS"
            dataKey="tx count"
          />

          <BarGraph
            values={
              developmentWeeklyInflowTransaction.data
                .stablecoinInflowTransaction
            }
            isSeprate
            queryLink={developmentWeeklyInflowTransaction.key}
            modalInfo=""
            title={developmentWeeklyInflowTransactionNames[3]}
            baseSpan={2}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentWeeklyInflowTransaction.data.stablecoinsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={
              developmentWeeklyInflowTransaction.data.stablecoinInflowUniqueUser
            }
            isSeprate
            queryLink={developmentWeeklyInflowTransaction.key}
            modalInfo=""
            title={developmentWeeklyInflowTransactionNames[4]}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentWeeklyInflowTransaction.data.stablecoinsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={
              developmentWeeklyInflowTransaction.data.stablecoinInflowTXCount
            }
            isSeprate
            queryLink={developmentWeeklyInflowTransaction.key}
            modalInfo=""
            title={developmentWeeklyInflowTransactionNames[5]}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentWeeklyInflowTransaction.data.stablecoinsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <HeaderSection title="Weekly outflow transactions" />

          <DonutChart
            queryLink={developmentWeeklyOutflowTransaction.key}
            data={
              developmentWeeklyOutflowTransaction.data
                .shareStablecoinInflowShareVolume
            }
            modalInfo=""
            baseSpan={1}
            title={developmentWeeklyOutflowTransactionNames[0]}
            nameKey="STABLECOINS"
            dataKey="Volume"
          />

          <BarGraph
            values={
              developmentWeeklyOutflowTransaction.data
                .stablecoinAverageInflowTransaction
            }
            isSeprate
            queryLink={developmentWeeklyOutflowTransaction.key}
            modalInfo=""
            title={developmentWeeklyOutflowTransactionNames[2]}
            baseSpan={2}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentWeeklyOutflowTransaction.data.stablecoinsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <DonutChart
            queryLink={developmentWeeklyOutflowTransaction.key}
            data={
              developmentWeeklyOutflowTransaction.data
                .shareStablecoinInflowShareTXCount
            }
            modalInfo=""
            baseSpan={1}
            title={developmentWeeklyOutflowTransactionNames[1]}
            nameKey="STABLECOINS"
            dataKey="tx count"
          />

          <BarGraph
            values={
              developmentWeeklyOutflowTransaction.data
                .stablecoinInflowTransaction
            }
            isSeprate
            queryLink={developmentWeeklyOutflowTransaction.key}
            modalInfo=""
            title={developmentWeeklyOutflowTransactionNames[3]}
            baseSpan={2}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentWeeklyOutflowTransaction.data.stablecoinsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={
              developmentWeeklyOutflowTransaction.data
                .stablecoinInflowUniqueUser
            }
            isSeprate
            queryLink={developmentWeeklyOutflowTransaction.key}
            modalInfo=""
            title={developmentWeeklyOutflowTransactionNames[4]}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentWeeklyOutflowTransaction.data.stablecoinsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={
              developmentWeeklyOutflowTransaction.data.stablecoinInflowTXCount
            }
            isSeprate
            queryLink={developmentWeeklyOutflowTransaction.key}
            modalInfo=""
            title={developmentWeeklyOutflowTransactionNames[5]}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentWeeklyOutflowTransaction.data.stablecoinsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <HeaderSection title="axlUSDC Destination" />

          <DonutChart
            queryLink={developmentAXLUSDCestination.key}
            data={developmentAXLUSDCestination.data}
            modalInfo=""
            baseSpan={1}
            title={developmentAXLUSDCestinationNames[0]}
            nameKey="Destination chain"
            dataKey="Volume"
          />

          <DonutChart
            queryLink={developmentAXLUSDCestination.key}
            data={developmentAXLUSDCestination.data}
            modalInfo=""
            baseSpan={1}
            title={developmentAXLUSDCestinationNames[1]}
            nameKey="Destination chain"
            dataKey="Unique wallet"
          />

          <DonutChart
            queryLink={developmentAXLUSDCestination.key}
            data={developmentAXLUSDCestination.data}
            modalInfo=""
            baseSpan={1}
            title={developmentAXLUSDCestinationNames[2]}
            nameKey="Destination chain"
            dataKey="tx count"
          />

          <HeaderSection title="axlUSDT Destination" />

          <DonutChart
            queryLink={developmentAXLUSDTestination.key}
            data={developmentAXLUSDTestination.data}
            modalInfo=""
            baseSpan={1}
            title={developmentAXLUSDTestinationNames[0]}
            nameKey="Destination chain"
            dataKey="Volume"
          />

          <DonutChart
            queryLink={developmentAXLUSDTestination.key}
            data={developmentAXLUSDTestination.data}
            modalInfo=""
            baseSpan={1}
            title={developmentAXLUSDTestinationNames[1]}
            nameKey="Destination chain"
            dataKey="Unique wallet"
          />

          <DonutChart
            queryLink={developmentAXLUSDTestination.key}
            data={developmentAXLUSDTestination.data}
            modalInfo=""
            baseSpan={1}
            title={developmentAXLUSDTestinationNames[2]}
            nameKey="Destination chain"
            dataKey="tx count"
          />

          <HeaderSection title="Stablecoins Destination" />

          <BarGraph
            values={developmentStablecoinsDestination.data.stablecoinVolume}
            isSeprate
            isNotDate
            queryLink={developmentStablecoinsDestination.key}
            modalInfo=""
            title={developmentStablecoinsDestinationNames[0]}
            baseSpan={1}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentStablecoinsDestination.data.chainsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={developmentStablecoinsDestination.data.stablecoinUniqueUser}
            isSeprate
            isNotDate
            queryLink={developmentStablecoinsDestination.key}
            modalInfo=""
            title={developmentStablecoinsDestinationNames[1]}
            baseSpan={1}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentStablecoinsDestination.data.chainsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={developmentStablecoinsDestination.data.stablecoinCount}
            isSeprate
            isNotDate
            queryLink={developmentStablecoinsDestination.key}
            modalInfo=""
            title={developmentStablecoinsDestinationNames[2]}
            baseSpan={1}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            labels={developmentStablecoinsDestination.data.chainsSet.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Development;
