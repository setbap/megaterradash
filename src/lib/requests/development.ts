import { DevelopmentMostUsedContracts, DevelopmentWeeklyActiveContract, DevelopmentWeeklyNewContract } from "lib/types/types/development";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getDevelopmentMostUsedContracts = () =>
  getSimpleArrayData<
    DevelopmentMostUsedContracts,
    DevelopmentMostUsedContracts
  >(
    "c889da2a-01fa-496a-831a-c1eff5f22130",
    "Share of each Contract in total transactions,TOtal number of contracts deployed",
  );

export const getDevelopmentTotalNumberOfContracts = () => getSimpleInfo<any>(
  '1b13bcdc-a114-42ed-9c7e-536bdaa781fc', "Total number of contracts deployed"
);


export const getDevelopmentWeeklyActiveContract = () =>
  getSimpleArrayData<
    DevelopmentWeeklyActiveContract,
    DevelopmentWeeklyActiveContract
  >(
    "db79b38c-b18e-4f97-963c-693e88995c2a",
    "Share of each Contract in total transactions,TOtal number of contracts deployed",
  );

export const getDevelopmentWeeklyNewContracts = () =>
  getSimpleArrayData<
    DevelopmentWeeklyNewContract,
    DevelopmentWeeklyNewContract
  >(
    "23deba88-c8cc-4284-85bd-276fb0d79c8d",
    "Cumulative number of new contracts,Weekly number of new contracts",
  );
// 1b13bcdc-a114-42ed-9c7e-536bdaa781fc
// db79b38c-b18e-4f97-963c-693e88995c2a
// 23deba88-c8cc-4284-85bd-276fb0d79c8d

// export const getTransactionsFee = () =>
//   getSimpleArrayData<TransactionsFee, TransactionsFee>(
//     "e8e87bee-d172-4c3e-a7d8-9e62abe2e7f1",
//     "Average transaction Fee,Average transaction Fee per week,Average of total fees per week,Weekly total fees",
//     "Day"
//   );

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
