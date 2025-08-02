export interface LevelThreeCategory {
    categoryId: string;
    parentCategoryId: string; // should point to level 2 categoryId
    parentCategoryName: string;
    name: string;
    level: number;
}
export const homeLevelThreeCategories: LevelThreeCategory[] = [
    { categoryId: 'sofas', parentCategoryId: 'furniture', parentCategoryName: 'Furniture', name: 'Sofas', level: 3 },
    { categoryId: 'beds', parentCategoryId: 'furniture', parentCategoryName: 'Furniture', name: 'Beds', level: 3 },
    { categoryId: 'wallDecor', parentCategoryId: 'homeDecor', parentCategoryName: 'Home Decor', name: 'Wall Decor', level: 3 },
    { categoryId: 'curtains', parentCategoryId: 'homeDecor', parentCategoryName: 'Home Decor', name: 'Curtains', level: 3 },
    { categoryId: 'cookware', parentCategoryId: 'kitchenAndDining', parentCategoryName: 'Kitchen & Dining', name: 'Cookware', level: 3 },
    { categoryId: 'dinnerware', parentCategoryId: 'kitchenAndDining', parentCategoryName: 'Kitchen & Dining', name: 'Dinnerware', level: 3 },
    { categoryId: 'bedsheets', parentCategoryId: 'bedding', parentCategoryName: 'Bedding', name: 'Bedsheets', level: 3 },
    { categoryId: 'blankets', parentCategoryId: 'bedding', parentCategoryName: 'Bedding', name: 'Blankets', level: 3 },
    { categoryId: 'lamps', parentCategoryId: 'lighting', parentCategoryName: 'Lighting', name: 'Lamps', level: 3 },
    { categoryId: 'ceilingLights', parentCategoryId: 'lighting', parentCategoryName: 'Lighting', name: 'Ceiling Lights', level: 3 },
    { categoryId: 'bathTowels', parentCategoryId: 'bath', parentCategoryName: 'Bath', name: 'Bath Towels', level: 3 },
    { categoryId: 'bathMats', parentCategoryId: 'bath', parentCategoryName: 'Bath', name: 'Bath Mats', level: 3 },
];
