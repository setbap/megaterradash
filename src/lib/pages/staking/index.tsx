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
          {/* <StatsCard
            stat={walletsNew.data.at(-1)?.["AVG New wallet"]!}
            title={walletsNewNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={walletsNew.key}
          /> */}

          <StateCardRemoteData
            url="https://phoenix-lcd.terra.dev/cosmos/bank/v1beta1/supply/uluna"
            link="https://docs.terra.money/develop/swagger"
            status="unchanged"
            title={"Total Supply"}
            getStat={(data) => data["amount"].amount / 1e6}
          />

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
            modalInfo="another"
            baseSpan={1}
            title={top10validatorbasedontotalvolumeofdelegatetothem.title}
            nameKey="Validator name"
            dataKey="Volume"
          />

          <DonutChart
            queryLink={top10validatorbasedonuniqueuserdelegatetothem.key}
            data={top10validatorbasedonuniqueuserdelegatetothem.data}
            modalInfo="another"
            baseSpan={1}
            title={top10validatorbasedonuniqueuserdelegatetothem.title}
            nameKey="Validator name"
            dataKey="Volume"
          />

          <DonutChart
            queryLink={top10validatorbasedontotalnumberofdelegatetothem.key}
            data={top10validatorbasedontotalnumberofdelegatetothem.data}
            modalInfo="another"
            baseSpan={1}
            title={top10validatorbasedontotalnumberofdelegatetothem.title}
            nameKey="Validator name"
            dataKey="Volume"
          />

          <BarGraph
            isNotDate
            values={top30ValidatorBasedOnCurrentBalance.data}
            queryLink={top30ValidatorBasedOnCurrentBalance.key}
            modalInfo="show data of top 30 validators in Terra and Amount Delegate Luna"
            title={top30ValidatorBasedOnCurrentBalance.title}
            baseSpan={3}
            dataKey="Validator name"
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
          {/* <LineChartWithBar
            customColor={colors[3]}
            barColor={colors[3]}
            data={walletsActive.data}
            queryLink={walletsActive.key}
            title={walletsActiveNames[1]}
            baseSpan={3}
            infoSizePercentage={25}
            modelInfo={`as we see in data clearly shows number of users reduces in last month like other blockchains and (all platform in web3) but in two point number of active user go up. 

- first in start of Terra and this is usually and people want to try new Terra and 
- second in middle of Sep and after Terra price go up but after that this number go down

Q4 is worst quatre for crypto and Terra isn't only one. in these month's we see all of blockchain record worse record of their
            `}
            barDataKey={"Active wallet"}
            lineDataKey="AVG active wallet"
            xAxisDataKey="Day"
          />
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
