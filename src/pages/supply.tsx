import Supply from "lib/pages/supply";
import { getSupplyInfo, getTop100Richlist } from "lib/requests/supply";

export async function getStaticProps() {
  const [top100Richlist, supplyInfo] = await Promise.all([
    getTop100Richlist(),
    getSupplyInfo(),
  ]);
  return {
    props: {
      top100Richlist,
      supplyInfo,
    },
    revalidate: 10 * 60,
  };
}
export default Supply;
export type SupplyProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];
