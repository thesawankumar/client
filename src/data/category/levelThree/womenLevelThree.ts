export interface LevelThreeCategory {
    categoryId: string;
    parentCategoryId: string; // should point to level 2 categoryId
    parentCategoryName: string; // added parent category name
    name: string;
    level: number;
}
export const womenLevelThreeCategories: LevelThreeCategory[] = [
    { categoryId: 'sarees', parentCategoryId: 'ethnicAndFusionWear', parentCategoryName: 'Ethnic & Fusion Wear', name: 'Sarees', level: 3 },
    { categoryId: 'kurtas', parentCategoryId: 'ethnicAndFusionWear', parentCategoryName: 'Ethnic & Fusion Wear', name: 'Kurtas & Kurtis', level: 3 },
    { categoryId: 'dresses', parentCategoryId: 'westernWear', parentCategoryName: 'Western Wear', name: 'Dresses', level: 3 },
    { categoryId: 'tops', parentCategoryId: 'westernWear', parentCategoryName: 'Western Wear', name: 'Tops & Tunics', level: 3 },
    { categoryId: 'bras', parentCategoryId: 'lingerieAndSleepwear', parentCategoryName: 'Lingerie & Sleepwear', name: 'Bras', level: 3 },
    { categoryId: 'nightwear', parentCategoryId: 'lingerieAndSleepwear', parentCategoryName: 'Lingerie & Sleepwear', name: 'Nightwear', level: 3 },
    { categoryId: 'heels', parentCategoryId: 'footwear', parentCategoryName: 'Footwear', name: 'Heels', level: 3 },
    { categoryId: 'flats', parentCategoryId: 'footwear', parentCategoryName: 'Footwear', name: 'Flats', level: 3 },
    { categoryId: 'makeup', parentCategoryId: 'beautyAndPersonalCare', parentCategoryName: 'Beauty & Personal Care', name: 'Makeup', level: 3 },
    { categoryId: 'skincare', parentCategoryId: 'beautyAndPersonalCare', parentCategoryName: 'Beauty & Personal Care', name: 'Skincare', level: 3 },
    { categoryId: 'handbags', parentCategoryId: 'fashionAccessories', parentCategoryName: 'Fashion Accessories', name: 'Handbags', level: 3 },
    { categoryId: 'jewellery', parentCategoryId: 'fashionAccessories', parentCategoryName: 'Fashion Accessories', name: 'Jewellery', level: 3 },
];
