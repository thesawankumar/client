import type { Deal } from "./dealTypes";

export interface HomeCategory {
  id?: number;
  categoryId: string;
  section?: string;
  name?: string;
  image: string;
  parentCategoryId?: string;
}
export interface HomeData {
  id: number;
  grid: HomeCategory[];
  shopByCategories: HomeCategory[];
  electricCategories: HomeCategory[];
  deals: Deal[];
  dealCategories: HomeCategory[];
}
