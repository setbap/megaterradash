import { CiWallet } from "react-icons/ci";
import { GiProfit } from "react-icons/gi";
import { BsCodeSquare } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";

export default [
  { name: "Transactions", path: "/", icon: BiTransferAlt },
  { name: "Wallet", path: "/wallet", icon: CiWallet },
  { name: "Staking", path: "/staking", icon: GiProfit },
  { name: "IBC", path: "/ibc", icon: GiProfit },
  { name: "Development", path: "/development", icon: BsCodeSquare },
];
