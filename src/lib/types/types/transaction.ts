export interface TransactionsTxCountAndSuccess {
  Day: string;
  "tx count": number;
  "Success Rate": number;
  "MA7 tx count": number;
  "Cum tx count": number;
  "AVG tx count": number;
  "AVG success rate": number;
}

export interface TransactionsFee {
  Day: string;
  fee: number;
  "MA7 fee": number;
  "Cum fee": number;
  "AVG tx fee": number;
  "AVG fee": number;
  "AVG tx fee per week": number;
}

export interface TransactionTPS {
  Day: string;
  TPS: number;
  "AVG TPS": number;
}

export interface TransactionsBlockAge {
  Day: string;
  "block age": number;
  "Block tx": number;
  "MA7 block tx": number;
  "AVG block age": number;
  "AVG block tx": number;
}
