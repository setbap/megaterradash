import { ActiveWalletSingleNumber, WalletsActive, WalletsNew, WalletsNewSingleNumber } from "lib/types/types/wallet";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getWalletsNew = () =>
  getSimpleArrayData<WalletsNew, WalletsNew>(
    "4816abad-8b7b-47f3-8798-d2556b5ce763",
    "Cumulative number of new wallets,Weekly number of new wallets,Average number of new wallets per week",
    "Day"
  );

export const getWalletsActive = () =>
  getSimpleArrayData<WalletsActive, WalletsActive>(
    "841412ef-a269-437d-9bb1-94f78daaa9b7",
    "Average number of active wallets per week,Weekly number of active wallets",
    "Day"
  );

export const getWalletsNewSingleNumber = () => getSimpleInfo<WalletsNewSingleNumber>("410f2174-e6b8-467e-83fe-a5e003430e1a", "Daily new wallets")
export const getActiveWalletSingleNumber = () => getSimpleInfo<ActiveWalletSingleNumber>("80550158-3bff-40c8-83a8-841d6cda5933", "Daily active wallets")