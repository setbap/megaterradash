import { ReturnDataType } from "lib/types/base";
import {
  BridgeTransactions,
} from "lib/types/types/staking";
import {
  getSimpleArrayData,
  pivotData,
  summerizeRow,
  summerizeRow2Item,
} from "./utils";


export const _getBridgeTransactions = () =>
  getSimpleArrayData<BridgeTransactions, BridgeTransactions>(
    "a7fb6d3b-d85b-4903-b8af-6cb7111c5839",
    "Top destination for Terra bridgers in terms of volume of transactions,Top destination for Terra bridgers in terms of number of transactions,Weekly volume of bridge transactions,Weekly number of bridge transactions,Weekly number of outflow transactions to each chain,Weekly volume of outflow transactions to each chain",
    "Day"
  );


export const getBridgeTransactions: () => Promise<any> = async () => {
  const rawData = await _getBridgeTransactions();
  const chains = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Destination chain"];
      })
    )
  );

  const valueChain = summerizeRow(rawData.data, "Destination chain", "Volume");
  const txChain = summerizeRow(rawData.data, "Destination chain", "tx count");
  const dailyValueChain = summerizeRow(rawData.data, "Day", "Volume");
  const dailyTXAndUnique = summerizeRow2Item(
    rawData.data,
    "Day",
    "tx count",
    "Unique wallet"
  );

  const outflowEachChainVolume = pivotData(
    rawData.data,
    "Day",
    "Destination chain",
    "Volume",
    chains,
    0
  );

  const outflowEachChainTxCount = pivotData(
    rawData.data,
    "Day",
    "Destination chain",
    "tx count",
    chains,
    0
  );

  return {
    data: {
      valueChain,
      txChain,
      dailyValueChain,
      dailyTXAndUnique: dailyTXAndUnique.map((item) => ({ ...item, fake: 0 })),
      outflowEachChainVolume,
      outflowEachChainTxCount,
      chains,
    },
    key: rawData.key,
    title: rawData.title,
  } as ReturnDataType<any>;
  return;
};
