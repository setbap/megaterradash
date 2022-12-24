import { ReturnDataType } from "lib/types/base";
import {
  DevelopmentAXLUSDDestination,
  DevelopmentMostUniqueUser,
  DevelopmentMostUsedContracts,
  DevelopmentStablecoinsDestination,
  DevelopmentWeeklyActiveContract,
  DevelopmentWeeklyInflowTransaction,
  DevelopmentWeeklyNewContract,
} from "lib/types/types/development";
import { _getWeeklytxcounttxvolumeanduniqueusers } from "./staking";
import {
  getSimpleArrayData,
  getSimpleInfo,
  pivotData,
  summerizeRow,
} from "./utils";

export const getDevelopmentMostUsedContracts = () =>
  getSimpleArrayData<
    DevelopmentMostUsedContracts,
    DevelopmentMostUsedContracts
  >(
    "c889da2a-01fa-496a-831a-c1eff5f22130",
    "Share of each Contract in total transactions,TOtal number of contracts deployed"
  );

export const getDevelopmentTotalNumberOfContracts = () =>
  getSimpleInfo<any>(
    "1b13bcdc-a114-42ed-9c7e-536bdaa781fc",
    "Total number of contracts deployed"
  );

export const getDevelopmentWeeklyActiveContract = () =>
  getSimpleArrayData<
    DevelopmentWeeklyActiveContract,
    DevelopmentWeeklyActiveContract
  >(
    "db79b38c-b18e-4f97-963c-693e88995c2a",
    "Share of each Contract in total transactions,TOtal number of contracts deployed"
  );

export const getDevelopmentWeeklyNewContracts = () =>
  getSimpleArrayData<
    DevelopmentWeeklyNewContract,
    DevelopmentWeeklyNewContract
  >(
    "23deba88-c8cc-4284-85bd-276fb0d79c8d",
    "Cumulative number of new contracts,Weekly number of new contracts"
  );

export const getDevelopmentMostUniqueUser = () =>
  getSimpleArrayData<DevelopmentMostUniqueUser, DevelopmentMostUniqueUser>(
    "a97b554c-e64f-48f7-a367-1d383f10373a",
    "Total number of unique users interacting with each contract so far,Share of each contract in total unique users"
  );

// START: development: Weekly inflow transactions
export const _getDevelopmentWeeklyInflowTransactionDataGetter = () =>
  getSimpleArrayData<
    DevelopmentWeeklyInflowTransaction,
    DevelopmentWeeklyInflowTransaction
  >(
    "b805c939-ee92-40a1-9f3e-cf5dfa57f31e",
    "Share of each stablecoin in total inflow volume of transactions,Share of each stablecoin in total inflow volume of transactions,Weekly average volume of inflow transactions,Weekly volume of inflow transactions,Weekly number of unique inflow users,Weekly number of inflow transactions"
  );

export const _getDevelopmentWeeklyOutflowTransactionDataGetter = () =>
  getSimpleArrayData<
    DevelopmentWeeklyInflowTransaction,
    DevelopmentWeeklyInflowTransaction
  >(
    "b805c939-ee92-40a1-9f3e-cf5dfa57f31e",
    "Share of each stablecoin in total outflow volume of transactions,Share of each stablecoin in total outflow volume of transactions,Weekly average volume of outflow transactions,Weekly volume of outflow transactions,Weekly number of unique outflow users,Weekly number of outflow transactions"
  );
//
export const getDevelopmentAXLUSDCestination = () =>
  getSimpleArrayData<
    DevelopmentAXLUSDDestination,
    DevelopmentAXLUSDDestination
  >(
    "af4dabd8-4155-42d5-99b6-2677d6dba954",
    "Popular destination for axlUSDC based on volume of transactions,Popular destination for axlUSDC based on number of unique users,Popular destination for axlUSDC based on number of transactions"
  );

export const getDevelopmentAXLUSDTestination = () =>
  getSimpleArrayData<
    DevelopmentAXLUSDDestination,
    DevelopmentAXLUSDDestination
  >(
    "6fa46cf0-4d04-4f88-b2bc-2de3dc835a19",
    "Popular destination for axlUSDT based on volume of transactions,Popular destination for axlUSDT based on number of unique users,Popular destination for axlUSDT based on number of transactions"
  );

export const _getDevelopmentStablecoinsDestination = () =>
  getSimpleArrayData<
    DevelopmentStablecoinsDestination,
    DevelopmentStablecoinsDestination
  >(
    "e36e9730-cbdd-476c-b7ef-44405873d294",
    "Popular destination of stablecoins based on volume,Popular destination of stablecoins based on unique users,Popular destination of stablecoins based on count"
  );

export const getDevelopmentStablecoinsDestination: () => Promise<any> =
  async () => {
    const rawData = await _getDevelopmentStablecoinsDestination();
    const chainsSet = Array.from(
      new Set(
        rawData.data.map((item) => {
          return item["Destination chain"];
        })
      )
    );

    const stablecoinVolume = pivotData(
      rawData.data,
      "STABLECOINS",
      "Destination chain",
      "Volume",
      chainsSet,
      0,
      false
    );

    const stablecoinUniqueUser = pivotData(
      rawData.data,
      "STABLECOINS",
      "Destination chain",
      "Unique wallet",
      chainsSet,
      0,
      false
    );

    const stablecoinCount = pivotData(
      rawData.data,
      "STABLECOINS",
      "Destination chain",
      "tx count",
      chainsSet,
      0,
      false
    );

    return {
      data: {
        stablecoinVolume,
        stablecoinUniqueUser,
        stablecoinCount,
        chainsSet,
      },
      key: rawData.key,
      title: rawData.title,
    } as ReturnDataType<any>;
  };

const complexInOutFlowDataGetter: (
  dataGetter: () => Promise<
    ReturnDataType<DevelopmentWeeklyInflowTransaction[]>
  >
) => Promise<any> = async (dataGetter) => {
  const rawData = await dataGetter();
  const stablecoinsSet = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["STABLECOINS"];
      })
    )
  );

  const shareStablecoinInflowShareVolume = summerizeRow(
    rawData.data,
    "STABLECOINS",
    "Volume"
  );

  const shareStablecoinInflowShareTXCount = summerizeRow(
    rawData.data,
    "STABLECOINS",
    "tx count"
  );

  const stablecoinAverageInflowTransaction = pivotData(
    rawData.data,
    "Day",
    "STABLECOINS",
    "AVG volume",
    stablecoinsSet,
    0
  );

  const stablecoinInflowTransaction = pivotData(
    rawData.data,
    "Day",
    "STABLECOINS",
    "Volume",
    stablecoinsSet,
    0
  );

  const stablecoinInflowUniqueUser = pivotData(
    rawData.data,
    "Day",
    "STABLECOINS",
    "Unique wallet",
    stablecoinsSet,
    0
  );

  const stablecoinInflowTXCount = pivotData(
    rawData.data,
    "Day",
    "STABLECOINS",
    "tx count",
    stablecoinsSet,
    0
  );

  return {
    data: {
      shareStablecoinInflowShareVolume,
      shareStablecoinInflowShareTXCount,
      stablecoinAverageInflowTransaction,
      stablecoinInflowTransaction,
      stablecoinInflowUniqueUser,
      stablecoinInflowTXCount,
      stablecoinsSet,
    },
    key: rawData.key,
    title: rawData.title,
  } as ReturnDataType<any>;
};

export const getDevelopmentWeeklyInflowTransaction = async () =>
  await complexInOutFlowDataGetter(
    _getDevelopmentWeeklyInflowTransactionDataGetter
  );

export const getDevelopmentWeeklyOutflowTransaction = async () =>
  await complexInOutFlowDataGetter(
    _getDevelopmentWeeklyOutflowTransactionDataGetter
  );
// START: development: Weekly inflow transactions

// export const getTransactionsTPS = () =>
//   getSimpleArrayData<TransactionsTPS, TransactionsTPS>(
//     "9e90c8b3-cbdc-4d1d-971f-522b5c15459d",
//     "Average number of transactions per second (TPS),Weekly number of transactions per second (TPS)",
//     "Day"
//   );

// export const getTransactionsBlockAge = () =>
//   getSimpleArrayData<TransactionsBlockAge, TransactionsBlockAge>(
//     "fdae1ff3-372d-4325-be6d-8a8f20fb59e4",
//     "Average number of transactions per block,Weekly number of transactions per block,Average block age,Weekly block age",
//     "Day"
//   );
