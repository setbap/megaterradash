import Stablecoins from "lib/pages/stablecoins";
import {
  getDevelopmentAXLUSDCestination,
  getDevelopmentAXLUSDTestination,
  getDevelopmentStablecoinsDestination,
  getDevelopmentWeeklyInflowTransaction,
  getDevelopmentWeeklyOutflowTransaction,
} from "lib/requests/development";

export async function getStaticProps() {
  const [
    developmentWeeklyInflowTransaction,
    developmentWeeklyOutflowTransaction,
    developmentAXLUSDCestination,
    developmentAXLUSDTestination,
    developmentStablecoinsDestination,
  ] = await Promise.all([
    getDevelopmentWeeklyInflowTransaction(),
    getDevelopmentWeeklyOutflowTransaction(),
    getDevelopmentAXLUSDTestination(),
    getDevelopmentAXLUSDCestination(),
    getDevelopmentStablecoinsDestination(),
  ]);

  return {
    props: {
      developmentWeeklyInflowTransaction,
      developmentWeeklyOutflowTransaction,
      developmentAXLUSDCestination,
      developmentAXLUSDTestination,
      developmentStablecoinsDestination,
    },
    revalidate: 10 * 60,
  };
}

export type StablecoinProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default Stablecoins;
