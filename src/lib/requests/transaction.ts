import {
  TransactionsAVGInfo,
  TransactionsBlockAge,
  TransactionsFee,
  TransactionsTodayInfo,
  TransactionsTotalInfo,
  TransactionsTPS,
  TransactionsTXInfo,
} from "lib/types/types/transaction";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

// 
export const getTransactionsAVGInfo = () =>
  getSimpleInfo<TransactionsAVGInfo>(
    "3eb47f41-a951-4b60-9cb2-65b58e7bf3c6",
    "Daily active wallets,Daily fee (in USD) collected,Transactions fee (in USD),Daily transactions,Transaction success rate"
  );

// 
export const getTransactionsTotalInfo = () =>
  getSimpleInfo<TransactionsTotalInfo>(
    "6d25ee36-e134-4df7-acf4-15fc5f492c53",
    "Total fee (in USD) collected,Total wallets,Total transactions"
  );

// 
export const getTransactionsTPS = () =>
  getSimpleArrayData<TransactionsTPS, TransactionsTPS>(
    "5903fa72-6af2-4562-a404-68a28c6e28db",
    "Number of transactions per second (TPS),Number of transactions per second (TPS)",
    "Day"
  );


// 
export const getTransactionsFee = () =>
  getSimpleArrayData<TransactionsFee, TransactionsFee>(
    "b4aba5f1-7ac7-4723-8b36-e71f60cfe335",
    "Weekly average transaction fee (in USD),Weekly total fee(in USD)",
    "Day"
  );

// 
export const getTransactionsBlockAge = () =>
  getSimpleArrayData<TransactionsBlockAge, TransactionsBlockAge>(
    "bf9bff3e-ad3a-4b05-93d7-f596194264f2",
    "Weekly number of transactions per block,Block time,Weekly block time,Number of transactions per block (TPB)",
    "Day"
  );

export const getTransactionsTXInfo = () =>
  getSimpleArrayData<TransactionsTXInfo, TransactionsTXInfo>(
    "29370a1d-f3f2-4c53-b34a-bcfaff888569",
    " , ,Weekly number of active wallets,Weekly number of transactions,Cumulative number of transaction,Weekly transaction success rate",
    "Day"
  );

// export const getTransactionsNewWallet = () =>
//   getSimpleArrayData<TransactionsNewWallet, TransactionsNewWallet>(
//     "c653021e-20d2-4492-9e29-3c822e050db2",
//     "Weekly number of new wallets,Cumulative number of new wallets",
//     "Day"
//   );

// 
export const getTransactionsTodayInfo = () =>
  getSimpleInfo<TransactionsTodayInfo>(
    "3d2c565a-1b21-4477-88ac-4cb44d3e1123",
    "24H Transactions Count,24H Active Wallets,24H  TX Fee,24H Success Rate"
  );
