import Supply from "lib/pages/supply";
import {
  getSupplyInfo,
  getTop100Richlist,
  getVestingSchedule,
} from "lib/requests/supply";

export async function getStaticProps() {
  const [top100Richlist, supplyInfo, vestingSchedul] = await Promise.all([
    getTop100Richlist(),
    getSupplyInfo(),
    getVestingSchedule(),
  ]);
  return {
    props: {
      top100Richlist,
      supplyInfo,
      vestingSchedul,
    },
    revalidate: 10 * 60,
  };
}
export default Supply;
export type SupplyProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];
