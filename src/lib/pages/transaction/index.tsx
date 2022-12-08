import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import TextBox from "lib/components/charts/TextBox";
import { TransactionsProps } from "pages";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";

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
  transactionsTxCountAndSuccess,
  transactionsFee,
  transactionsTPS,
  transactionsBlockAge,
}: TransactionsProps): JSX.Element => {
  const transactionsTxCountAndSuccessNames =
    transactionsTxCountAndSuccess.title.split(",");

  const transactionsFeeNames = transactionsFee.title.split(",");

  const transactionsTPSNames = transactionsTPS.title.split(",");

  const transactionsBlockAgeNames = transactionsBlockAge.title.split(",");

  return (
    <>
      <NextSeo
        title={`Terra | Transactions`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Terra  | Transactions`,
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
### Terra Transaction 
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
            stat={
              transactionsTxCountAndSuccess.data.at(-1)?.["AVG success rate"]!
            }
            title={transactionsTxCountAndSuccessNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTxCountAndSuccess.key}
          />
          <StatsCard
            stat={transactionsTxCountAndSuccess.data.at(-1)?.["AVG tx count"]!}
            title={transactionsTxCountAndSuccessNames[3]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTxCountAndSuccess.key}
          />

          <StatsCard
            stat={transactionsFee.data.at(-1)?.["AVG tx fee"]!}
            title={transactionsFeeNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsFee.key}
          />

          <StatsCard
            stat={transactionsFee.data.at(-1)?.["AVG fee"]!}
            title={transactionsFeeNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsFee.key}
          />

          <StatsCard
            stat={transactionsTPS.data.at(-1)?.["AVG TPS"]!}
            title={transactionsTPSNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTPS.key}
          />

          <StatsCard
            stat={transactionsBlockAge.data.at(-1)?.["block age"]!}
            title={transactionsBlockAgeNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsBlockAge.key}
          />

          <StatsCard
            stat={transactionsBlockAge.data.at(-1)?.["AVG block age"]!}
            title={transactionsBlockAgeNames[2]}
            status="inc"
            unit="&nbsp;Sec"
            hasArrowIcon={false}
            link={transactionsBlockAge.key}
          />
        </SimpleGrid>
        <TextBox>
          {`
#### Transaction Count and Status 
some info
`}
        </TextBox>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={transactionsTxCountAndSuccess.data}
            queryLink={transactionsTxCountAndSuccess.key}
            title={transactionsTxCountAndSuccessNames[1]}
            baseSpan={2}
            barDataKey={"Success Rate"}
            lineDataKey="AVG success rate"
            xAxisDataKey="Day"
          />
          <ChartBox
            data={transactionsTxCountAndSuccess.data}
            queryLink={transactionsTxCountAndSuccess.key}
            areaDataKey="Cum tx count"
            xAxisDataKey="Day"
            oyLabel="Count"
            title={transactionsTxCountAndSuccessNames[2]}
          />
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={transactionsTxCountAndSuccess.data}
            queryLink={transactionsTxCountAndSuccess.key}
            title={transactionsTxCountAndSuccessNames[1]}
            modelInfo="is this info"
            baseSpan={3}
            infoSizePercentage={25}
            barDataKey={"tx count"}
            lineDataKey="AVG tx count"
            additionalLineKey={["MA7 tx count"]}
            xAxisDataKey="Day"
          />
          <TextBox>
            {`
#### Transaction Fee
some info
`}
          </TextBox>
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={transactionsFee.data}
            queryLink={transactionsFee.key}
            title={transactionsFeeNames[3]}
            baseSpan={3}
            barDataKey={"fee"}
            lineDataKey="AVG fee"
            additionalLineKey={["MA7 fee"]}
            xAxisDataKey="Day"
          />
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={transactionsFee.data}
            queryLink={transactionsFee.key}
            title={transactionsFeeNames[1]}
            modelInfo="is this info"
            baseSpan={3}
            infoSizePercentage={25}
            barDataKey={"AVG tx fee"}
            lineDataKey="AVG tx fee per week"
            xAxisDataKey="Day"
          />

          <TextBox>
            {`
#### Transaction Per Second (TPS)
some info
`}
          </TextBox>
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={transactionsTPS.data}
            queryLink={transactionsTPS.key}
            title={transactionsTPSNames[1]}
            modelInfo="is this info"
            baseSpan={3}
            infoSizePercentage={25}
            barDataKey={"TPS"}
            lineDataKey="AVG TPS"
            xAxisDataKey="Day"
          />
          <TextBox>
            {`
#### Age of Blocks
some info
`}
          </TextBox>
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={transactionsBlockAge.data}
            queryLink={transactionsBlockAge.key}
            title={transactionsBlockAgeNames[1]}
            baseSpan={3}
            barDataKey={"Block tx"}
            lineDataKey="AVG block tx"
            additionalLineKey={["MA7 block tx"]}
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={transactionsBlockAge.data}
            queryLink={transactionsBlockAge.key}
            title={transactionsBlockAgeNames[3]}
            modelInfo="is this info"
            baseSpan={3}
            infoSizePercentage={"full"}
            barDataKey={"block age"}
            lineDataKey="AVG block age"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
