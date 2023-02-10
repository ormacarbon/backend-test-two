export interface CouponInterface {
  name: string;
  description: string;
  discount_max: number;
  created_by: string;
  avaliable: Avaliable;
  found_on: string;
}

export interface CouponUpdateInterface {
  name?: string;
  description?: string;
  discount_max?: number;
  created_by?: string;
  avaliable?: Avaliable;
  found_on?: string;
}

type Avaliable = {
  name: string;
  website: string;
};
