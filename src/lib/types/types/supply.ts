

export interface Top100Richlist {
  Wallet: string;
  Balance: number;
}

export interface SupplySingleNumber {
  "Total Supply": number;
  "Circulating Supply": number;
  "Ratio of Circulation Supply from Total Supply (%)": number;
}


export interface SupplyVestingSchadule {
  dates: string;
  "Community Pool": number;
  "Pre Lunc": number;
  "Pre Aust": number;
  "PostLunc": number;
  "Post Aust": number;
  "Dev": number;
} 