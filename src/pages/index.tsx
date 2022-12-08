import Transaction from "lib/pages/transaction";
import {
  getTransactionsBlockAge,
  getTransactionsFee,
  getTransactionsTPS,
  getTransactionsTxCountAndSuccess,
} from "lib/requests/transaction";

import { ReturnDataType } from "lib/types/base";
import {
  TransactionsBlockAge,
  TransactionsFee,
  TransactionsTxCountAndSuccess,
  TransactionTPS,
} from "lib/types/types/transaction";
export async function getStaticProps() {
  const [
    transactionsTxCountAndSuccess,
    transactionsFee,
    transactionsTPS,
    transactionsBlockAge,
  ] = await Promise.all([
    getTransactionsTxCountAndSuccess(),
    getTransactionsFee(),
    getTransactionsTPS(),
    getTransactionsBlockAge(),
  ]);
  return {
    props: {
      transactionsTxCountAndSuccess,
      transactionsFee,
      transactionsTPS,
      transactionsBlockAge,
    },
    revalidate: 10 * 60,
  };
}
export default Transaction;
export interface TransactionsProps {
  transactionsTxCountAndSuccess: ReturnDataType<
    TransactionsTxCountAndSuccess[]
  >;
  transactionsFee: ReturnDataType<TransactionsFee[]>;
  transactionsTPS: ReturnDataType<TransactionTPS[]>;
  transactionsBlockAge: ReturnDataType<TransactionsBlockAge[]>;
}
