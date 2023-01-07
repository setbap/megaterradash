import Staking from "lib/pages/staking";
import {
  getTop30ValidatorBasedOnCurrentBalance,
  getTop10validatorbasedontotalvolumeofdelegatetothem,
  getTop10validatorbasedonuniqueuserdelegatetothem,
  getTop10validatorbasedontotalnumberofdelegatetothem,
  getWeeklytop10validatorbasedonnumberofdelegatetothem,
  getWeeklytop10validatorbasedonuniqueuserdelegatetothem,
  getWeeklytop10validatorbasedonvolumeofdelegatetothem,
  getAverageweeklytxcounttxvolumeanduniqueusers,
  getWeeklytxcounttxvolumeanduniqueusers,
  getDistributionOfStakingRewards,
  getStakingrewards,
  getTotalInfo,
  getStakingTopWallets,
} from "lib/requests/staking";

export async function getStaticProps() {
  const [
    top30ValidatorBasedOnCurrentBalance,
    top10validatorbasedontotalvolumeofdelegatetothem,
    top10validatorbasedonuniqueuserdelegatetothem,
    top10validatorbasedontotalnumberofdelegatetothem,
    weeklytop10validatorbasedonnumberofdelegatetothem,
    weeklytop10validatorbasedonuniqueuserdelegatetothem,
    weeklytop10validatorbasedonvolumeofdelegatetothem,
    averageweeklytxcounttxvolumeanduniqueusers,
    weeklytxcounttxvolumeanduniqueusers,
    stakingrewards,
    distributionOfStakingRewards,
    totalInfo,
    stakingTopWallets,
  ] = await Promise.all([
    getTop30ValidatorBasedOnCurrentBalance(),
    getTop10validatorbasedontotalvolumeofdelegatetothem(),
    getTop10validatorbasedonuniqueuserdelegatetothem(),
    getTop10validatorbasedontotalnumberofdelegatetothem(),
    getWeeklytop10validatorbasedonnumberofdelegatetothem(),
    getWeeklytop10validatorbasedonuniqueuserdelegatetothem(),
    getWeeklytop10validatorbasedonvolumeofdelegatetothem(),
    getAverageweeklytxcounttxvolumeanduniqueusers(),
    getWeeklytxcounttxvolumeanduniqueusers(),
    getStakingrewards(),
    getDistributionOfStakingRewards(),
    getTotalInfo(),
    getStakingTopWallets(),
  ]);
  return {
    props: {
      top30ValidatorBasedOnCurrentBalance,
      top10validatorbasedontotalvolumeofdelegatetothem,
      top10validatorbasedonuniqueuserdelegatetothem,
      top10validatorbasedontotalnumberofdelegatetothem,
      weeklytop10validatorbasedonnumberofdelegatetothem,
      weeklytop10validatorbasedonuniqueuserdelegatetothem,
      weeklytop10validatorbasedonvolumeofdelegatetothem,
      averageweeklytxcounttxvolumeanduniqueusers,
      weeklytxcounttxvolumeanduniqueusers,
      stakingrewards,
      distributionOfStakingRewards,
      totalInfo,
      stakingTopWallets,
    },
    revalidate: 10 * 60,
  };
}
export default Staking;
export type StakingProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];
