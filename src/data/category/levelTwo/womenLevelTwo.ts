export interface LevelTwoCategory {
    categoryId: string;
    parentCategoryId: string;
    name: string;
    level: number;
}
export const womenLevelTwoCategories: LevelTwoCategory[] = [
    {
        categoryId: 'ethnicAndFusionWear',
        parentCategoryId: 'women',
        name: 'Ethnic & Fusion Wear',
        level: 2
    },
    {
        categoryId: 'westernWear',
        parentCategoryId: 'women',
        name: 'Western Wear',
        level: 2
    },
    {
        categoryId: 'lingerieAndSleepwear',
        parentCategoryId: 'women',
        name: 'Lingerie & Sleepwear',
        level: 2
    },
    {
        categoryId: 'footwear',
        parentCategoryId: 'women',
        name: 'Footwear',
        level: 2
    },
    {
        categoryId: 'beautyAndPersonalCare',
        parentCategoryId: 'women',
        name: 'Beauty & Personal Care',
        level: 2
    },
    {
        categoryId: 'fashionAccessories',
        parentCategoryId: 'women',
        name: 'Fashion Accessories',
        level: 2
    },
];
