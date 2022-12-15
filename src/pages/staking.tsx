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
  getTop100Richlist,
  getDistributionOfStakingRewards,
  getStakingrewards,
  getBridgeTransactions,
} from "lib/requests/staking";
import { ReturnDataType } from "lib/types/base";
import {
  Top10validatorbasedontotalvolumeofdelegatetothem,
  Top10validatorbasedonuniqueuserdelegatetothem,
  Top10validatorbasedontotalnumberofdelegatetothem,
  Weeklytop10validatorbasedonnumberofdelegatetothem,
  Weeklytop10validatorbasedonuniqueuserdelegatetothem,
  Weeklytop10validatorbasedonvolumeofdelegatetothem,
  Averageweeklytxcounttxvolumeanduniqueusers,
  Weeklytxcounttxvolumeanduniqueusers,
  Top30validatorsbasedoncurrentbalance,
  DistributionOfStakingRewards,
  Stakingrewards,
  Top100Richlist,
} from "lib/types/types/staking";
import Transaction from "pages";

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
    top100Richlist,
    bridgeTransactions,
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
    getTop100Richlist(),
    getBridgeTransactions(),
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
      top100Richlist,
      bridgeTransactions,
    },
    revalidate: 10 * 60,
  };
}
export default Staking;
export interface StakingProps {
  top100Richlist: ReturnDataType<Top100Richlist[]>;
  distributionOfStakingRewards: ReturnDataType<DistributionOfStakingRewards[]>;
  stakingrewards: ReturnDataType<Stakingrewards[]>;
  top30ValidatorBasedOnCurrentBalance: ReturnDataType<
    Top30validatorsbasedoncurrentbalance[]
  >;
  top10validatorbasedontotalvolumeofdelegatetothem: ReturnDataType<
    Top10validatorbasedontotalvolumeofdelegatetothem[]
  >;
  top10validatorbasedonuniqueuserdelegatetothem: ReturnDataType<
    Top10validatorbasedonuniqueuserdelegatetothem[]
  >;
  top10validatorbasedontotalnumberofdelegatetothem: ReturnDataType<
    Top10validatorbasedontotalnumberofdelegatetothem[]
  >;
  weeklytop10validatorbasedonnumberofdelegatetothem: ReturnDataType<any>;

  weeklytop10validatorbasedonuniqueuserdelegatetothem: ReturnDataType<any>;
  weeklytop10validatorbasedonvolumeofdelegatetothem: ReturnDataType<any>;
  averageweeklytxcounttxvolumeanduniqueusers: ReturnDataType<
    Averageweeklytxcounttxvolumeanduniqueusers[]
  >;
  weeklytxcounttxvolumeanduniqueusers: ReturnDataType<any>;
  bridgeTransactions: ReturnDataType<any>;
}
