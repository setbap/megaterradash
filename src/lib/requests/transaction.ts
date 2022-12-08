import {
  TransactionsTxCountAndSuccess,
  TransactionsFee,
  TransactionTPS as TransactionsTPS,
  TransactionsBlockAge,
} from "lib/types/types/transaction";
import { getSimpleArrayData } from "./utils";

export const getTransactionsTxCountAndSuccess = () =>
  getSimpleArrayData<
    TransactionsTxCountAndSuccess,
    TransactionsTxCountAndSuccess
  >(
    "a8094c96-5900-4b2d-a604-4d625ffac588",
    "Average transaction success rate,Weekly transaction success rate,Cumulative number of transaction,Average number of transactions per week,Weekly number of transactions",
    "Day"
  );

export const getTransactionsFee = () =>
  getSimpleArrayData<TransactionsFee, TransactionsFee>(
    "e8e87bee-d172-4c3e-a7d8-9e62abe2e7f1",
    "Average transaction Fee,Average transaction Fee per week,Average of total fees per week,Weekly total fees",
    "Day"
  );

export const getTransactionsTPS = () =>
  getSimpleArrayData<TransactionsTPS, TransactionsTPS>(
    "9e90c8b3-cbdc-4d1d-971f-522b5c15459d",
    "Average number of transactions per second (TPS),Weekly number of transactions per second (TPS)",
    "Day"
  );

export const getTransactionsBlockAge = () =>
  getSimpleArrayData<TransactionsBlockAge, TransactionsBlockAge>(
    "fdae1ff3-372d-4325-be6d-8a8f20fb59e4",
    "Average number of transactions per block,Weekly number of transactions per block,Average block age,Weekly block age",
    "Day"
  );
