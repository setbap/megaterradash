import { SupplySingleNumber, Top100Richlist } from "lib/types/types/supply";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getTop100Richlist = () =>
  getSimpleArrayData<Top100Richlist, Top100Richlist>(
    "d5e35fae-75a5-4008-8a7b-3c076ce0eaff",
    "Top 100 LUNA holders",
    "Balance"
  );
export const getSupplyInfo = () =>
  getSimpleInfo<SupplySingleNumber>(
    "a914da84-68c8-4d98-b5d9-5bdd2e7268ff",
    "Total Supply, Circulating Supply, Ratio of Circulation Supply from Total Supply (%)",
  );