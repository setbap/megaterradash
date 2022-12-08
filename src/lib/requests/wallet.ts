import { WalletsActive, WalletsNew } from "lib/types/types/wallet";
import { getSimpleArrayData } from "./utils";

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
