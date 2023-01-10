import { Box, SimpleGrid } from "@chakra-ui/react";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { StakingProps } from "pages/staking";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StateCardRemoteData } from "lib/components/charts/StateCardRemoteData";
import HeaderSection from "lib/components/basic/HeaderSection";
import TableBox from "lib/components/charts/TableBox";
import { StakingTopStakers } from "lib/types/types/staking";
import { ColumnDef } from "@tanstack/react-table";
import millify from "millify";

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

const colDef: ColumnDef<StakingTopStakers>[] = [
  {
    accessorFn: (row) => row.Staker,
    enableSorting: false,
    id: "Staker",
    cell: (info) => info.getValue(),
    header: () => <span>Staker</span>,
  },
  {
    accessorFn: (row) => row["Staked Balance"],
    id: "Staked Balance",
    cell: (info) =>
      millify(info.getValue() as number, {
        precision: 2,
        decimalSeparator: ".",
      }),
    header: () => <span>Staked Balance</span>,
  },
  {
    accessorFn: (row) => row["Staking validators"],
    id: "Staking validators",
    cell: (info) => info.getValue(),
    header: (props) => <span>{props.header.id}</span>,
  },
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
  stakingTopWallets,
  totalInfo,
}: StakingProps): JSX.Element => {
  const averageweeklytxcounttxvolumeanduniqueusersNames =
    averageweeklytxcounttxvolumeanduniqueusers.title.split(",");

  const weeklytxcounttxvolumeanduniqueusersNames =
    weeklytxcounttxvolumeanduniqueusers.title.split(",");

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
        <HeaderSection title="Terra Staking ">
          {`

  

Staking on Terra 2.0 is a process in which holders of LUNA tokens can lock up their tokens in order to help secure the Terra network. By locking up their tokens, stakers receive rewards in the form of additional LUNA tokens.

  

Unstaking $Luna tokens take a total of 21 days. During the first 14 days, the tokens are in the "unbonding" phase, where the tokens are still locked, but the user is able to see them in their wallet. After the 14 day period has elapsed, the tokens enter the "withdraw" phase, which lasts for 7 days. During this time, the user is able to withdraw their tokens from the network. Once the 7 day period has ended, the user is able to access their tokens and transfer them to other wallets or exchanges.

  

Now I describe each section:

- **Staking Over time:**  In this section, you could see some simple metrics include number of staking transactions and stakers, volume of staking transactions, and also total $NEAR staked over time.

- **Daily average:**  In this section, you can see on average, how much $LUNA was staked per day. how many staked their $LUNA per day. How many staking transactions were made per day. Only the last three months are considered.

- **Top validators:**  Tried to find top validators in terms of number of transactions, number of users and volume of transactions.

- **Weekly top 10 validators:**  Tried to find weekly top 10 validators in terms of number of transactions, number of users and volume of transactions.

- **Top validators based on current power:**  Validator power is a measure of the amount of stake that is delegated to a validator. In this section, tried to find top validators in terms of current amount of stake they have.

  

- **Staking rewards:** In this section, find the staking reward transactions and their distribution of them. In addition, tried to find weekly total rewards that were distributed among users.

- **Top stakers:**  This section show the most active stakers, those who staked the most amount of token. Also, I showed the validators they use.
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
        </SimpleGrid>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
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
          <HeaderSection title="Staking Over time" />

          {[
            ["tXCount", 4, ""],
            ["volume", 1, "$Luna"],
            ["uniqueWallet", 2, ""],
            ["cumTXCount", 3, ""],
            ["cumVolume", 0, "$Luna"],
          ].map(([item, type, yLabel], index) => (
            <StackedAreaChart
              key={item}
              values={weeklytxcounttxvolumeanduniqueusers.data[item]}
              queryLink={weeklytxcounttxvolumeanduniqueusers.key}
              modalInfo=""
              title={weeklytxcounttxvolumeanduniqueusersNames[type]}
              baseSpan={1}
              dataKey="Name"
              oyLabel={yLabel as string}
              oxLabel="Action"
              labels={weeklytxcounttxvolumeanduniqueusers.data.actions.map(
                (item: string, index: number) => ({
                  key: item,
                  color: colors[index % colors.length],
                })
              )}
            />
          ))}

          <HeaderSection title="Daily average" />
          {[
            ["AVG tx count", 1, ""],
            ["AVG volume", 3, "$Luna"],
            ["AVG unique wallet", 2, ""],
            ["AVG TX volume", 0, "$Luna"],
          ].map(([item, type, yLabel], index) => (
            <BarGraph
              key={item}
              values={averageweeklytxcounttxvolumeanduniqueusers.data}
              queryLink={averageweeklytxcounttxvolumeanduniqueusers.key}
              modalInfo=""
              isNotDate
              title={
                averageweeklytxcounttxvolumeanduniqueusersNames[type as number]
              }
              baseSpan={1}
              dataKey="Actions"
              oyLabel={yLabel as string}
              oxLabel="Action"
              labels={[
                {
                  key: item as string,
                  color: colors[index],
                },
              ]}
            />
          ))}

          <HeaderSection title="Top Validators" />
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
            queryLink={top10validatorbasedontotalvolumeofdelegatetothem.key}
            data={top10validatorbasedontotalvolumeofdelegatetothem.data}
            modalInfo=""
            baseSpan={1}
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

          <HeaderSection title="Weekly top 10 validators" />
          <BarGraph
            values={weeklytop10validatorbasedonnumberofdelegatetothem.data.info}
            queryLink={weeklytop10validatorbasedonnumberofdelegatetothem.key}
            modalInfo=""
            title={weeklytop10validatorbasedonnumberofdelegatetothem.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
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
            values={weeklytop10validatorbasedonvolumeofdelegatetothem.data.info}
            queryLink={weeklytop10validatorbasedonvolumeofdelegatetothem.key}
            modalInfo=""
            title={weeklytop10validatorbasedonvolumeofdelegatetothem.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel="$Luna"
            hideLegend
            oxLabel="Day"
            labels={weeklytop10validatorbasedonvolumeofdelegatetothem.data.actions.map(
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
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={weeklytop10validatorbasedonuniqueuserdelegatetothem.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <HeaderSection title="Top validators based on current power" />
          <BarGraph
            isNotDate
            values={top30ValidatorBasedOnCurrentBalance.data}
            queryLink={top30ValidatorBasedOnCurrentBalance.key}
            modalInfo="show data of top 30 validators in Terra and Amount Delegate Luna"
            title={top30ValidatorBasedOnCurrentBalance.title}
            baseSpan={3}
            dataKey="Validators"
            oyLabel=""
            oxLabel="Validator Name"
            infoSizePercentage={"full"}
            labels={[
              {
                key: "Current delegate amount",
                color: colors[0],
              },
            ]}
          />
          <HeaderSection title="Staking rewards" />
          <DonutChart
            queryLink={distributionOfStakingRewards.key}
            data={distributionOfStakingRewards.data}
            modalInfo=""
            baseSpan={1}
            title={distributionOfStakingRewards.title}
            nameKey="category"
            dataKey="Count"
          />
          <LineChartWithBar
            customColor={colors[3]}
            barColor={colors[3]}
            data={stakingrewards.data}
            queryLink={stakingrewards.key}
            title={stakingrewards.title}
            baseSpan={2}
            infoSizePercentage={25}
            modelInfo={``}
            barDataKey={"Staking rewards $LUNA"}
            additionalLineKey={["Staking rewards $"]}
            lineDataKey="FAKEFIELD"
            hideLine
            xAxisDataKey="Day"
          />
          <HeaderSection title="Top stakers" />
          <TableBox
            customHeaderColor={colors[2]}
            queryLink={stakingTopWallets.key}
            title={stakingTopWallets.title}
            baseSpan={3}
            tablePageSize={10}
            modalInfo={``}
            data={stakingTopWallets.data}
            columnsDef={colDef}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Staking;
