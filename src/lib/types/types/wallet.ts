export interface WalletsActive {
  Day: string;
  "Active wallet": number;
  "AVG active wallet": number;
}

export interface WalletsNew {
  Day: string;
  "New wallet": number;
  "Cum new wallet": number;
  "AVG New wallet": number;
}

export interface WalletsNewSingleNumber {
  "AVG New wallet": number
}


export interface ActiveWalletSingleNumber {
  "AVG active wallet": number
}
