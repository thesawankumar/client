export interface LevelThreeCategory {
    categoryId: string;
    parentCategoryId: string; // should point to level 2 categoryId
    parentCategoryName: string; // added parent category name
    name: string;
    level: number;
}
export const menLevelThreeCategories: LevelThreeCategory[] = [
    { categoryId: 'tshirts', parentCategoryId: 'topwear', parentCategoryName: 'Topwear', name: 'T-Shirts', level: 3 },
    { categoryId: 'shirts', parentCategoryId: 'topwear', parentCategoryName: 'Topwear', name: 'Shirts', level: 3 },
    { categoryId: 'jeans', parentCategoryId: 'bottomwear', parentCategoryName: 'Bottomwear', name: 'Jeans', level: 3 },
    { categoryId: 'trousers', parentCategoryId: 'bottomwear', parentCategoryName: 'Bottomwear', name: 'Trousers', level: 3 },
    { categoryId: 'boxers', parentCategoryId: 'innerwearAndSleepwear', parentCategoryName: 'Innerwear & Sleepwear', name: 'Boxers', level: 3 },
    { categoryId: 'pyjamas', parentCategoryId: 'innerwearAndSleepwear', parentCategoryName: 'Innerwear & Sleepwear', name: 'Pyjamas', level: 3 },
    { categoryId: 'casualShoes', parentCategoryId: 'footwear', parentCategoryName: 'Footwear', name: 'Casual Shoes', level: 3 },
    { categoryId: 'formalShoes', parentCategoryId: 'footwear', parentCategoryName: 'Footwear', name: 'Formal Shoes', level: 3 },
    { categoryId: 'beardCare', parentCategoryId: 'grooming', parentCategoryName: 'Grooming', name: 'Beard Care', level: 3 },
    { categoryId: 'hairCare', parentCategoryId: 'grooming', parentCategoryName: 'Grooming', name: 'Hair Care', level: 3 },
    { categoryId: 'watches', parentCategoryId: 'Fashion', parentCategoryName: 'Fashion', name: 'Watches', level: 3 },
    { categoryId: 'sunglasses', parentCategoryId: 'Fashion', parentCategoryName: 'Fashion', name: 'Sunglasses', level: 3 },
];
