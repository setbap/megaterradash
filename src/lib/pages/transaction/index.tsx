import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { TransactionsProps } from "pages/index";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
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
  transactionsAVGInfo,
  transactionsTotalInfo,
  transactionsTPS,
  transactionsBlockAge,
  transactionsTXInfo,

  transactionsTodayInfo,
  transactionsFee,
}: TransactionsProps): JSX.Element => {
  const transactionsAVGInfoNames = transactionsAVGInfo.title.split(",");
  const transactionsTotalInfoNames = transactionsTotalInfo.title.split(",");
  const transactionsTPSNames = transactionsTPS.title.split(",");
  const transactionsBlockAgeNames = transactionsBlockAge.title.split(",");
  const transactionsTXInfoNames = transactionsTXInfo.title.split(",");
  const transactionsTodayInfoNames = transactionsTodayInfo.title.split(",");
  const transactionsFeeNames = transactionsFee.title.split(",");

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
        <HeaderSection title="Terra Transaction">
          {`
The following topics are shown on this page:
* __Transactions__ : Number of transactions made on a blockchain.
* __Success Rate__ : The ratio of successful to unsuccessful transactions in a blockchain. That is, the number of successful transactions divided by the total number of transactions multiplied by 100.
* __Fee__ : A transaction fee is a small fee that is charged when a transaction is made. This fee is used to reward miners or validators who help confirm the transaction and secure the network. Total fee is the total USD spent during a certain period. Transaction fee is the average USD spent to made a transaction.
* __Transactions Per Second (TPS)__ : Using this metric, we can determine how quickly a blockchain network processes transactions. Count the number of transactions per second.
* __Block time__ : Block time is the average time it takes for a new block of transactions to be added to a blockchain. So we measure the time (in sec) between two consecutive blocks.
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
            stat={transactionsTotalInfo.data["tx count"]}
            title={transactionsTotalInfoNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTotalInfo.key}
          />
          <StatsCard
            stat={transactionsTotalInfo.data.fee}
            title={transactionsTotalInfoNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTotalInfo.key}
          />

          <StatsCard
            stat={transactionsAVGInfo.data["AVG tx count"]}
            title={transactionsAVGInfoNames[3]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />

          <StatsCard
            stat={transactionsAVGInfo.data["AVG fee"]}
            title={transactionsAVGInfoNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />
          <StatsCard
            stat={transactionsAVGInfo.data["AVG success rate"]}
            title={transactionsAVGInfoNames[4]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />
          <StatsCard
            stat={transactionsAVGInfo.data["AVG tx fee per day"]}
            title={transactionsAVGInfoNames[2]}
            decimal={3}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />

          <StatsCard
            stat={transactionsTPS.data.at(-1)?.["AVG TPS"] ?? 6}
            title={transactionsTPSNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTPS.key}
          />

          <StatsCard
            stat={transactionsBlockAge.data.at(-1)?.["AVG block tx"] ?? 6.7}
            title={transactionsBlockAgeNames[3]}
            status="inc"
            unit=""
            hasArrowIcon={false}
            link={transactionsBlockAge.key}
          />

          <StatsCard
            stat={transactionsBlockAge.data.at(-1)?.["AVG block age"] ?? 1.2}
            title={transactionsBlockAgeNames[1]}
            status="inc"
            unit=" s"
            hasArrowIcon={false}
            link={transactionsBlockAge.key}
          />
        </SimpleGrid>

        <HeaderSection title="24H Changes" />
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={transactionsTodayInfo.data["24h Transactions"]}
            title={transactionsTodayInfoNames[0]}
            status={
              transactionsTodayInfo.data["change (%) Transactions"] >= 0
                ? "inc"
                : "dec"
            }
            change={transactionsTodayInfo.data["change (%) Transactions"]}
            changeUnit={"%"}
            hasArrowIcon
            link={transactionsTodayInfo.key}
          />

          <StatsCard
            stat={transactionsTodayInfo.data["24h TX Fee"]}
            title={transactionsTodayInfoNames[2]}
            decimal={3}
            status={
              transactionsTodayInfo.data["change (%) TX Fee"] >= 0
                ? "inc"
                : "dec"
            }
            change={transactionsTodayInfo.data["change (%) TX Fee"]}
            changeUnit={"%"}
            hasArrowIcon
            link={transactionsTodayInfo.key}
          />

          <StatsCard
            stat={transactionsTodayInfo.data["24h Success Rate"]}
            title={transactionsTodayInfoNames[3]}
            status={
              transactionsTodayInfo.data["change (%) Success Rate"] >= 0
                ? "inc"
                : "dec"
            }
            change={transactionsTodayInfo.data["change (%) Success Rate"]}
            changeUnit={"%"}
            hasArrowIcon
            link={transactionsTodayInfo.key}
          />
        </SimpleGrid>

        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          pb={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Transactions" />
          <LineChartWithBar
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[3]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"tx count"}
            lineDataKey="AVG tx count"
            additionalLineKey={["MA7 tx count"]}
          />
          <ChartBox
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[4]}
            baseSpan={3}
            customColor={colors[0]}
            xAxisDataKey="Day"
            areaDataKey="Cum tx count"
          />

          <HeaderSection title="Success Rate" />
          <LineChartWithBar
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[5]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Success Rate"}
            lineDataKey="AVG Success Rate"
          />

          <HeaderSection title="Fee" />
          <LineChartWithBar
            data={transactionsFee.data}
            queryLink={transactionsFee.key}
            title={transactionsFeeNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Avg tx fee"}
            lineDataKey="AVG tx fee per day"
          />
          <LineChartWithBar
            data={transactionsFee.data}
            queryLink={transactionsFee.key}
            title={transactionsFeeNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"fee"}
            additionalLineKey={["MA7 fee"]}
            lineDataKey="AVG fee"
          />

          <HeaderSection title="Transactions Per Second (TPS)" />
          <LineChartWithBar
            data={transactionsTPS.data}
            queryLink={transactionsTPS.key}
            title={transactionsTPSNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"TPS"}
            lineDataKey="AVG TPS"
          />

          <HeaderSection title="Block Time" />
          <LineChartWithBar
            data={transactionsBlockAge.data}
            queryLink={transactionsBlockAge.key}
            title={transactionsBlockAgeNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Block tx"}
            additionalLineKey={["MA7 block tx"]}
            lineDataKey="AVG Block tx"
          />
          <LineChartWithBar
            data={transactionsBlockAge.data}
            queryLink={transactionsBlockAge.key}
            title={transactionsBlockAgeNames[2]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"block age"}
            lineDataKey="AVG block age"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
