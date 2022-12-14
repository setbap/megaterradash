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
    },
    revalidate: 10 * 60,
  };
}
export default Staking;
export interface StakingProps {
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
}
