import Wallet from "lib/pages/wallet";
import { getWalletsActive, getWalletsNew } from "lib/requests/wallet";
import { ReturnDataType } from "lib/types/base";
import { WalletsActive, WalletsNew } from "lib/types/types/wallet";

export async function getStaticProps() {
  const [walletsActive, walletsNew] = await Promise.all([
    getWalletsActive(),
    getWalletsNew(),
  ]);
  return {
    props: {
      walletsActive,
      walletsNew,
    },
    revalidate: 10 * 60,
  };
}
export default Wallet;
export interface WalletProps {
  walletsActive: ReturnDataType<WalletsActive[]>;
  walletsNew: ReturnDataType<WalletsNew[]>;
}
