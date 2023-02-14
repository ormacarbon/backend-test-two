export interface Reputation {
  id: string;
  reputation: number;
  user_id: string;
}

export interface ReputationUpdate {
  reputation: number;
  id: string;
}
export interface updateReputationUserAlreadyReted {
  reputation: number;
  user_id: string;
  id: string;
}
