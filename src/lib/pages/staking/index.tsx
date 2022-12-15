import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import TextBox from "lib/components/charts/TextBox";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { WalletProps } from "pages/wallet";
import { StakingProps } from "pages/staking";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StateCardRemoteData } from "lib/components/charts/StateCardRemoteData";

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

const Staking = ({
  top30ValidatorBasedOnCurrentBalance,
  top10validatorbasedontotalvolumeofdelegatetothem,
  top10validatorbasedonuniqueuserdelegatetothem,
  top10validatorbasedontotalnumberofdelegatetothem,
  weeklytop10validatorbasedonnumberofdelegatetothem,
  weeklytop10validatorbasedonuniqueuserdelegatetothem,
  weeklytop10validatorbasedonvolumeofdelegatetothem,
  averageweeklytxcounttxvolumeanduniqueusers,
  weeklytxcounttxvolumeanduniqueusers,
  distributionOfStakingRewards,
  stakingrewards,
  top100Richlist,
  bridgeTransactions,
  totalInfo,
}: StakingProps): JSX.Element => {
  const averageweeklytxcounttxvolumeanduniqueusersNames =
    averageweeklytxcounttxvolumeanduniqueusers.title.split(",");

  const weeklytxcounttxvolumeanduniqueusersNames =
    weeklytxcounttxvolumeanduniqueusers.title.split(",");
  const bridgeTransactionsNames = bridgeTransactions.title.split(",");

  return (
    <>
      <NextSeo
        title={`Terra | Staking`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Terra | Staking`,
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
### Terra Staking 
in this page we review all information all about staking in Terra. after Terra fall and brith of Terra(2) most of Terra's Airdroped to old user and this airdropd token 
divided in 4 part and just 1/4 of that availble for user and remaining staked and distributed according schadule

`}
        </TextBox>
        <Box pt={"4"}></Box>
        <TextBox>
          {`
#### Glance
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
        </TextBox>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StateCardRemoteData
            url="https://phoenix-lcd.terra.dev/cosmos/staking/v1beta1/pool"
            link="https://docs.terra.money/develop/swagger"
            status="unchanged"
            title={"Not Bonded Token In Pool"}
            getStat={(data) => data.pool.not_bonded_tokens / 1e6}
          />

          <StateCardRemoteData
            url="https://phoenix-lcd.terra.dev/cosmos/staking/v1beta1/pool"
            link="https://docs.terra.money/develop/swagger"
            status="unchanged"
            title={"Bonded Token In Pool"}
            getStat={(data) => data.pool.bonded_tokens / 1e6}
          />

          <StateCardRemoteData
            url="https://phoenix-lcd.terra.dev/cosmos/mint/v1beta1/inflation"
            link="https://docs.terra.money/develop/swagger"
            status="unchanged"
            title={"Inflation Rate"}
            getStat={(data) => data.inflation}
          />

          <StateCardRemoteData
            url="https://node-api.flipsidecrypto.com/api/v2/queries/97433b80-49d0-45d6-8e2a-b1a23adb06cb/data/latest"
            link="https://app.flipsidecrypto.com/velocity/queries/97433b80-49d0-45d6-8e2a-b1a23adb06cb"
            status="unchanged"
            title={"Circulate supply"}
            getStat={(data) => data[0]["Total supply"]}
          />
        </SimpleGrid>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={totalInfo.data.supplyTotal}
            title={"Total Supply"}
            status="inc"
            unit=""
            isExternalLink
            hasArrowIcon={false}
            link={totalInfo.key}
          />

          <StatsCard
            stat={totalInfo.data.bonded}
            title={"Staked Amount"}
            status="inc"
            unit=""
            isExternalLink
            hasArrowIcon={false}
            link={totalInfo.key}
          />

          <StatsCard
            stat={totalInfo.data.stakingRatio}
            title={"Staking Ratio"}
            status="inc"
            unit="%"
            isExternalLink
            hasArrowIcon={false}
            link={totalInfo.key}
          />
          <StatsCard
            stat={totalInfo.data.communityPool}
            title={"Community Pool"}
            status="inc"
            unit=""
            isExternalLink
            hasArrowIcon={false}
            link={totalInfo.key}
          />

          <StatsCard
            stat={totalInfo.data.stakingReturn}
            title={"Staking Return "}
            change={totalInfo.data.stakingReturnChange}
            unit=" %"
            isExternalLink
            decimal={2}
            comment={"30D change"}
            hasArrowIcon={true}
            status={
              totalInfo.data.stakingReturnChange > 0 ? "inc" : "unchanged"
            }
            link={totalInfo.key}
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
number of active wallets is one of most important metrics for reviewing is one network work currently and has wired function
`}
          </TextBox>

          <DonutChart
            queryLink={top10validatorbasedontotalvolumeofdelegatetothem.key}
            data={top10validatorbasedontotalvolumeofdelegatetothem.data}
            modalInfo=""
            baseSpan={2}
            title={top10validatorbasedontotalvolumeofdelegatetothem.title}
            nameKey="Validator name"
            dataKey="Volume"
          />

          <DonutChart
            queryLink={top10validatorbasedonuniqueuserdelegatetothem.key}
            data={top10validatorbasedonuniqueuserdelegatetothem.data}
            modalInfo=""
            baseSpan={1}
            title={top10validatorbasedonuniqueuserdelegatetothem.title}
            nameKey="Validator name"
            dataKey="Volume"
          />

          <DonutChart
            queryLink={top10validatorbasedontotalnumberofdelegatetothem.key}
            data={top10validatorbasedontotalnumberofdelegatetothem.data}
            modalInfo=""
            baseSpan={1}
            title={top10validatorbasedontotalnumberofdelegatetothem.title}
            nameKey="Validator name"
            dataKey="Volume"
          />

          <DonutChart
            queryLink={distributionOfStakingRewards.key}
            data={distributionOfStakingRewards.data}
            modalInfo=""
            baseSpan={2}
            title={distributionOfStakingRewards.title}
            nameKey="category"
            dataKey="Count"
          />
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

          <BarGraph
            isNotDate
            values={top100Richlist.data}
            queryLink={top100Richlist.key}
            modalInfo=""
            title={top100Richlist.title}
            baseSpan={3}
            dataKey="Wallet"
            oyLabel="$Luna"
            oxLabel=""
            labels={[
              {
                key: "Balance",
                color: colors[0],
              },
            ]}
          />

          <BarGraph
            isNotDate
            values={top30ValidatorBasedOnCurrentBalance.data}
            queryLink={top30ValidatorBasedOnCurrentBalance.key}
            modalInfo="show data of top 30 validators in Terra and Amount Delegate Luna"
            title={top30ValidatorBasedOnCurrentBalance.title}
            baseSpan={3}
            dataKey="Validators"
            oyLabel="Current delegate amount"
            oxLabel="Validator Name"
            infoSizePercentage={25}
            labels={[
              {
                key: "Current delegate amount",
                color: colors[0],
              },
            ]}
          />

          <BarGraph
            values={weeklytop10validatorbasedonnumberofdelegatetothem.data.info}
            queryLink={weeklytop10validatorbasedonnumberofdelegatetothem.key}
            modalInfo=""
            title={weeklytop10validatorbasedonnumberofdelegatetothem.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel="Current delegate Count"
            oxLabel="Day"
            hideLegend
            labels={weeklytop10validatorbasedonnumberofdelegatetothem.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={
              weeklytop10validatorbasedonuniqueuserdelegatetothem.data.info
            }
            queryLink={weeklytop10validatorbasedonuniqueuserdelegatetothem.key}
            modalInfo=""
            title={weeklytop10validatorbasedonuniqueuserdelegatetothem.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel="Current delegate Count"
            oxLabel="Day"
            hideLegend
            labels={weeklytop10validatorbasedonuniqueuserdelegatetothem.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={weeklytop10validatorbasedonvolumeofdelegatetothem.data.info}
            queryLink={weeklytop10validatorbasedonvolumeofdelegatetothem.key}
            modalInfo=""
            title={weeklytop10validatorbasedonvolumeofdelegatetothem.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel="Current delegate Count"
            hideLegend
            oxLabel="Day"
            labels={weeklytop10validatorbasedonvolumeofdelegatetothem.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
          {/* --- */}
          {[
            "AVG TX volume",
            "AVG tx count",
            "AVG unique wallet",
            "AVG volume",
          ].map((item, index) => (
            <BarGraph
              key={item}
              values={averageweeklytxcounttxvolumeanduniqueusers.data}
              queryLink={averageweeklytxcounttxvolumeanduniqueusers.key}
              modalInfo=""
              isNotDate
              title={averageweeklytxcounttxvolumeanduniqueusersNames[index]}
              baseSpan={1}
              dataKey="Actions"
              oyLabel="$Luna"
              oxLabel="Action"
              labels={[
                {
                  key: item,
                  color: colors[index],
                },
              ]}
            />
          ))}
          {/* s-----------s */}
          {["cumVolume", "volume", "uniqueWallet", "cumTXCount", "tXCount"].map(
            (item, index) => (
              <StackedAreaChart
                key={item}
                values={weeklytxcounttxvolumeanduniqueusers.data[item]}
                queryLink={weeklytxcounttxvolumeanduniqueusers.key}
                modalInfo=""
                title={weeklytxcounttxvolumeanduniqueusersNames[index]}
                baseSpan={1}
                dataKey="Name"
                oyLabel="$Luna"
                oxLabel="Action"
                labels={weeklytxcounttxvolumeanduniqueusers.data.actions.map(
                  (item: string, index: number) => ({
                    key: item,
                    color: colors[index % colors.length],
                  })
                )}
              />
            )
          )}
          <LineChartWithBar
            customColor={colors[3]}
            barColor={colors[3]}
            data={stakingrewards.data}
            queryLink={stakingrewards.key}
            title={stakingrewards.title}
            baseSpan={3}
            infoSizePercentage={25}
            modelInfo={``}
            barDataKey={"Staking rewards $LUNA"}
            additionalLineKey={["Staking rewards $"]}
            lineDataKey="FAKEFIELD"
            hideLine
            xAxisDataKey="Day"
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
          {/* 
          <TextBox>
            {`
#### New Wallets
every blockchain to growth and expand and adapted to the real world need new user.
`}
          </TextBox>
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
          /> */}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Staking;
