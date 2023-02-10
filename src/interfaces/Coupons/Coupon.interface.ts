export interface CouponInterface {
  name: string;
  description?: string;
  discount_max: number;
  found_on: FoundOn;
  status: 'ACTIVE' | 'CLOSED';
  created_by: string;
}

export interface CouponUpdateInterface {
  name?: string;
  description?: string;
  discount_max?: number;
  created_by?: string;
  status?: 'ACTIVE' | 'CLOSED';
  found_on: FoundOn;
}

type FoundOn = {
  name: string;
  website: string;
};
