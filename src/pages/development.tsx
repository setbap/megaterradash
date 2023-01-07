import Development from "lib/pages/development";
import {
  getDevelopmentMostUniqueUser,
  getDevelopmentMostUsedContracts,
  getDevelopmentTotalNumberOfContracts,
  getDevelopmentWeeklyActiveContract,
  getDevelopmentWeeklyNewContracts,
} from "lib/requests/development";

export async function getStaticProps() {
  const [
    developmentWeeklyActiveContract,
    developmentMostUsedContracts,
    developmentWeeklyNewContracts,
    developmentTotalNumberOfContracts,
    developmentMostUniqueUser,
  ] = await Promise.all([
    getDevelopmentWeeklyActiveContract(),
    getDevelopmentMostUsedContracts(),
    getDevelopmentWeeklyNewContracts(),
    getDevelopmentTotalNumberOfContracts(),
    getDevelopmentMostUniqueUser(),
  ]);

  return {
    props: {
      developmentWeeklyActiveContract,
      developmentMostUsedContracts,
      developmentWeeklyNewContracts,
      developmentTotalNumberOfContracts,
      developmentMostUniqueUser,
    },
    revalidate: 10 * 60,
  };
}

export type DevelopmentProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default Development;
