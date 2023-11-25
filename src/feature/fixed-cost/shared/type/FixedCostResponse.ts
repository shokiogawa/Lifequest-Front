export type FixedCostResponse = {
  id: number;
  family_id: number;
  name: string;
  expose: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

export type FixedCostListResponse = {
  fixed_costs: FixedCostResponse[];
};
