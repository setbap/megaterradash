import Development from "lib/pages/development";
import {
  getDevelopmentMostUniqueUser,
  getDevelopmentMostUsedContracts,
  getDevelopmentTotalNumberOfContracts,
  getDevelopmentWeeklyActiveContract,
  getDevelopmentWeeklyInflowTransaction,
  getDevelopmentWeeklyNewContracts,
  getDevelopmentWeeklyOutflowTransaction,
} from "lib/requests/development";
import { ReturnDataType } from "lib/types/base";
import {
  DevelopmentMostUniqueUser,
  DevelopmentMostUsedContracts,
  DevelopmentWeeklyActiveContract,
  DevelopmentWeeklyNewContract,
} from "lib/types/types/development";

export async function getStaticProps() {
  const [
    developmentWeeklyActiveContract,
    developmentMostUsedContracts,
    developmentWeeklyNewContracts,
    developmentTotalNumberOfContracts,
    developmentMostUniqueUser,
    developmentWeeklyInflowTransaction,
    developmentWeeklyOutflowTransaction,
  ] = await Promise.all([
    getDevelopmentWeeklyActiveContract(),
    getDevelopmentMostUsedContracts(),
    getDevelopmentWeeklyNewContracts(),
    getDevelopmentTotalNumberOfContracts(),
    getDevelopmentMostUniqueUser(),
    getDevelopmentWeeklyInflowTransaction(),
    getDevelopmentWeeklyOutflowTransaction(),
  ]);

  return {
    props: {
      developmentWeeklyActiveContract,
      developmentMostUsedContracts,
      developmentWeeklyNewContracts,
      developmentTotalNumberOfContracts,
      developmentMostUniqueUser,
      developmentWeeklyInflowTransaction,
      developmentWeeklyOutflowTransaction,
    },
    revalidate: 10 * 60,
  };
}

export interface DevelopmentProps {
  developmentWeeklyActiveContract: ReturnDataType<
    DevelopmentWeeklyActiveContract[]
  >;
  developmentMostUsedContracts: ReturnDataType<DevelopmentMostUsedContracts[]>;
  developmentWeeklyNewContracts: ReturnDataType<DevelopmentWeeklyNewContract[]>;
  developmentTotalNumberOfContracts: ReturnDataType<unknown>;
  developmentMostUniqueUser: ReturnDataType<DevelopmentMostUniqueUser[]>;
  developmentWeeklyInflowTransaction: ReturnDataType<any>;
  developmentWeeklyOutflowTransaction: ReturnDataType<any>;
}

export default Development;