import IBC from "lib/pages/ibc";
import { getBridgeTransactions } from "lib/requests/ibc";

export async function getStaticProps() {
  const [bridgeTransactions] = await Promise.all([getBridgeTransactions()]);
  return {
    props: {
      bridgeTransactions,
    },
    revalidate: 10 * 60,
  };
}
export default IBC;
export type IBCProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];
