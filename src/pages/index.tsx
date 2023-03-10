import Transaction from "lib/pages/transaction";
import {
  getTransactionsAVGInfo,
  getTransactionsBlockAge,
  getTransactionsFee,
  getTransactionsTodayInfo,
  getTransactionsTotalInfo,
  getTransactionsTPS,
  getTransactionsTXInfo,
} from "lib/requests/transaction";
import { ReturnDataType } from "lib/types/base";
import {
  TransactionsAVGInfo,
  TransactionsBlockAge,
  TransactionsFee,
  TransactionsNewWallet,
  TransactionsTodayInfo,
  TransactionsTotalInfo,
  TransactionsTPS,
  TransactionsTXInfo,
} from "lib/types/types/transaction";
export async function getStaticProps() {
  const [
    transactionsAVGInfo,
    transactionsTotalInfo,
    transactionsTPS,
    transactionsBlockAge,
    transactionsTXInfo,
    transactionsTodayInfo,
    transactionsFee,
  ] = await Promise.all([
    getTransactionsAVGInfo(),
    getTransactionsTotalInfo(),
    getTransactionsTPS(),
    getTransactionsBlockAge(),
    getTransactionsTXInfo(),
    getTransactionsTodayInfo(),
    getTransactionsFee(),
  ]);
  return {
    props: {
      transactionsAVGInfo,
      transactionsTotalInfo,
      transactionsTPS,
      transactionsBlockAge,
      transactionsTXInfo,
      transactionsTodayInfo,
      transactionsFee,
    },
    revalidate: 10 * 60,
  };
}
export default Transaction;
export type TransactionsProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];
