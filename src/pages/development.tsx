import Development from 'lib/pages/development'
import { getDevelopmentMostUsedContracts, getDevelopmentTotalNumberOfContracts, getDevelopmentWeeklyActiveContract, getDevelopmentWeeklyNewContracts } from "lib/requests/development";
import { ReturnDataType } from "lib/types/base";
import { DevelopmentMostUsedContracts, DevelopmentWeeklyActiveContract, DevelopmentWeeklyNewContract } from "lib/types/types/development";




export async function getStaticProps() {
  const [
    developmentWeeklyActiveContract,
    developmentMostUsedContracts,
    developmentWeeklyNewContracts,
    developmentTotalNumberOfContracts
  ] = await Promise.all([
    getDevelopmentWeeklyActiveContract(),
    getDevelopmentMostUsedContracts(),
    getDevelopmentWeeklyNewContracts(),
    getDevelopmentTotalNumberOfContracts()
  ])

  return {
    props: {
      developmentWeeklyActiveContract,
      developmentMostUsedContracts,
      developmentWeeklyNewContracts,
      developmentTotalNumberOfContracts
    },
    revalidate: 10 * 60,
  };
}

export interface DevelopmentProps {
  developmentWeeklyActiveContract: ReturnDataType<DevelopmentWeeklyActiveContract[]>;
  developmentMostUsedContracts: ReturnDataType<DevelopmentMostUsedContracts[]>;
  developmentWeeklyNewContracts: ReturnDataType<DevelopmentWeeklyNewContract[]>
  developmentTotalNumberOfContracts: ReturnDataType<unknown>
}

export default Development
