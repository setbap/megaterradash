import Wallet from "lib/pages/wallet";
import {
  getActiveWalletSingleNumber,
  getWalletsActive,
  getWalletsNew,
  getWalletsNewSingleNumber,
} from "lib/requests/wallet";
import { ReturnDataType } from "lib/types/base";
import { WalletsActive, WalletsNew } from "lib/types/types/wallet";

export async function getStaticProps() {
  const [
    walletsActive,
    walletsNew,
    walletsNewSingleNumber,
    activeWalletSingleNumber,
  ] = await Promise.all([
    getWalletsActive(),
    getWalletsNew(),
    getWalletsNewSingleNumber(),
    getActiveWalletSingleNumber(),
  ]);
  return {
    props: {
      walletsActive,
      walletsNew,
      walletsNewSingleNumber,
      activeWalletSingleNumber,
    },
    revalidate: 10 * 60,
  };
}
export default Wallet;
export type WalletProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];
