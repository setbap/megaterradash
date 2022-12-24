export interface DevelopmentMostUsedContracts {
  "Contract Name": string;
  Count: number;
}

export interface DevelopmentWeeklyActiveContract {
  Day: string;
  "Active Contract": number;
}

export interface DevelopmentWeeklyNewContract {
  Day: string;
  "New Contract": number;
  "Cum New Contract": number;
}

export interface DevelopmentMostUniqueUser {
  "Contract Name": string;
  "Unique user": number;
}

export interface DevelopmentWeeklyInflowTransaction {
  Day: string;
  STABLECOINS: string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
}

export interface DevelopmentAXLUSDDestination {
  "Destination chain": string;
  TRANSFER_TYPE: string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
}
