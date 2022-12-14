// 07a4656d-7f81-4126-b6f6-c31cbde7b505
export interface Top30validatorsbasedoncurrentbalance {
  "Validator name": string;
  "Validator address": string;
  Validators: string;
  "Current delegate amount": number;
}
// ac0805f3-0919-475d-bcd2-f8334c070ce0
export interface Top10validatorbasedontotalvolumeofdelegatetothem {
  "Validator name": string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
}
// 4f6568d6-a6e6-4e89-a871-0a3e58d0cfb5
export interface Top10validatorbasedonuniqueuserdelegatetothem {
  "Validator name": string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
}
// 6ef77d4c-252b-4026-80eb-8313ee91ec0e
export interface Top10validatorbasedontotalnumberofdelegatetothem {
  "Validator name": string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
}
// 7b354100-5f9c-4559-90e8-b3b7436a7e37
export interface Weeklytop10validatorbasedonnumberofdelegatetothem {
  Day: string;
  "Validator name": string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
  Rank: number;
}
// 9103e919-5e84-4dec-bad8-3da6195eaa16
export interface Weeklytop10validatorbasedonuniqueuserdelegatetothem {
  Day: string;
  "Validator name": string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
  Rank: number;
}
// eb48a6b4-557f-4685-ab89-362a2ff33422
export interface Weeklytop10validatorbasedonvolumeofdelegatetothem {
  Day: string;
  "Validator name": string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
  Rank: number;
}
// a24aa648-28b5-47c8-b6d0-a4a8cbe7391b
export interface Averageweeklytxcounttxvolumeanduniqueusers {
  Actions: string;
  "AVG tx count": number;
  "AVG unique wallet": number;
  "AVG volume": number;
  "AVG TX volume": number;
}
// e61958f7-d387-48af-8b41-9d4d20a99c2d
export interface Weeklytxcounttxvolumeanduniqueusers {
  Day: string;
  Actions: string;
  "tx count": number;
  "Unique wallet": number;
  Volume: number;
  "AVG volume": number;
  "Cum tx count": number;
  "Cum volume": number;
}
