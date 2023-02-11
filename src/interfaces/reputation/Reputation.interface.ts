export interface Reputation {
  id: string;
  reputation: number;
  user_id: string;
}

export interface ReputationUpdate {
  id: string;
  list_reputation: any[];
  user_id: string;
}

export interface ListReputationInterface {
  user_id: string;
  reputation: number;
}
