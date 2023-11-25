export type InputBank = {
  id?: number;
  family_id: number;
  family_member_id: number;
  name: string;
  code: string;
  branch_number: number;
  branch_name: string;
  account_number: number;
  total_amount: number;
  category_name: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
};
