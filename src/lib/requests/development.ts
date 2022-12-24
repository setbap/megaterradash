import { ReturnDataType } from "lib/types/base";
import {
  DevelopmentMostUniqueUser,
  DevelopmentMostUsedContracts,
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
export const _getDevelopmentWeeklyInflowTransaction = () =>
  getSimpleArrayData<
    DevelopmentWeeklyInflowTransaction,
    DevelopmentWeeklyInflowTransaction
  >(
    "b805c939-ee92-40a1-9f3e-cf5dfa57f31e",
    "Share of each stablecoin in total inflow volume of transactions,Share of each stablecoin in total inflow volume of transactions,Weekly average volume of inflow transactions,Weekly volume of inflow transactions,Weekly number of unique inflow users,Weekly number of inflow transactions"
  );

export const getDevelopmentWeeklyInflowTransaction: () => Promise<any> =
  async () => {
    const rawData = await _getDevelopmentWeeklyInflowTransaction();
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
