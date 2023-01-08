import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { DevelopmentProps } from "pages/development";
import DonutChart from "lib/components/charts/DonutChart";
import BarGraph from "lib/components/charts/BarGraph";
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

const Development = ({
  developmentMostUsedContracts,
  developmentWeeklyNewContracts,
  developmentWeeklyActiveContract,
  developmentTotalNumberOfContracts,
  developmentMostUniqueUser,
}: DevelopmentProps): JSX.Element => {
  const developmentMostUsedContractsNames =
    developmentMostUsedContracts.title.split(",");
  const developmentWeeklyNewContractsNames =
    developmentWeeklyNewContracts.title.split(",");

  const developmentMostUniqueUserNames =
    developmentMostUniqueUser.title.split(",");

  return (
    <>
      <NextSeo
        title={`Terra | Development`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Terra  | Development`,
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
        <HeaderSection title="Terra Development ">
          {`
in this page we review all information about Terra Smart Contract Development and increase usage of different smart contract in Terra Network 


but before deep dive into chart i prepare some statics to see status of network at the glance.
`}
        </HeaderSection>
        <Box pt={"4"}></Box>
        <HeaderSection title="Glance">
          {`
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
        </HeaderSection>
        <SimpleGrid
          my={"4"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={
              +(developmentTotalNumberOfContracts as any).data[
                "Total Contracts Deployed"
              ] as any
            }
            title={developmentTotalNumberOfContracts.title}
            status="inc"
            hasArrowIcon={false}
            link={developmentTotalNumberOfContracts.key}
          />
        </SimpleGrid>

        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          gap={4}
          pb="6"
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Weekly Active Contract" />
          <BarGraph
            values={developmentWeeklyActiveContract.data}
            queryLink={developmentWeeklyActiveContract.key}
            modalInfo=""
            title={developmentWeeklyActiveContract.title}
            baseSpan={3}
            dataKey="Day"
            oyLabel=""
            oxLabel=""
            labels={[
              {
                key: "Active contract",
                color: colors[1],
              },
            ]}
          />

          <HeaderSection title="Weekly New Contract" />
          <ChartBox
            data={developmentWeeklyNewContracts.data}
            queryLink={developmentWeeklyNewContracts.key}
            areaDataKey="New Contract"
            xAxisDataKey="Day"
            oyLabel=""
            customColor={colors[2]}
            title={developmentWeeklyNewContractsNames[1]}
          />
          <ChartBox
            data={developmentWeeklyNewContracts.data}
            queryLink={developmentWeeklyNewContracts.key}
            areaDataKey="Cum New Contract"
            xAxisDataKey="Day"
            oyLabel=""
            baseSpan={2}
            customColor={colors[2]}
            title={developmentWeeklyNewContractsNames[0]}
          />

          <HeaderSection title="Most used contracts" />
          <DonutChart
            queryLink={developmentMostUsedContracts.key}
            data={developmentMostUsedContracts.data}
            modalInfo=""
            baseSpan={1}
            title={developmentMostUsedContractsNames[0]}
            nameKey="Contract Name"
            dataKey="Count"
          />
          <BarGraph
            isNotDate
            values={developmentMostUsedContracts.data}
            queryLink={developmentMostUsedContracts.key}
            modalInfo=""
            title={developmentMostUsedContractsNames[1]}
            baseSpan={2}
            dataKey="Contract Name"
            oyLabel=""
            oxLabel=""
            labels={[
              {
                key: "Count",
                color: colors[0],
              },
            ]}
          />

          <HeaderSection title="Contract With Most Unique User" />
          <DonutChart
            queryLink={developmentMostUniqueUser.key}
            data={developmentMostUniqueUser.data}
            modalInfo=""
            baseSpan={1}
            title={developmentMostUniqueUserNames[1]}
            nameKey="Contract Name"
            dataKey="Unique user"
          />

          <BarGraph
            isNotDate
            values={developmentMostUniqueUser.data}
            queryLink={developmentMostUniqueUser.key}
            modalInfo=""
            title={developmentMostUniqueUserNames[0]}
            baseSpan={2}
            hideLegend
            dataKey="Contract Name"
            oyLabel=""
            oxLabel=""
            labels={[
              {
                key: "Unique user",
                color: colors[3],
              },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Development;
