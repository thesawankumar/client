export interface LevelThreeCategory {
    categoryId: string;
    parentCategoryId: string; // should point to level 2 categoryId
    parentCategoryName: string;
    name: string;
    level: number;
}
export const electronicsLevelThreeCategories: LevelThreeCategory[] = [
    { categoryId: 'smartphones', parentCategoryId: 'mobilesAndTablets', parentCategoryName: 'Mobiles & Tablets', name: 'Smartphones', level: 3 },
    { categoryId: 'tablets', parentCategoryId: 'mobilesAndTablets', parentCategoryName: 'Mobiles & Tablets', name: 'Tablets', level: 3 },
    { categoryId: 'gamingLaptops', parentCategoryId: 'laptopsAndDesktops', parentCategoryName: 'Laptops & Desktops', name: 'Gaming Laptops', level: 3 },
    { categoryId: 'ultrabooks', parentCategoryId: 'laptopsAndDesktops', parentCategoryName: 'Laptops & Desktops', name: 'Ultrabooks', level: 3 },
    { categoryId: 'headphones', parentCategoryId: 'audio', parentCategoryName: 'Audio', name: 'Headphones', level: 3 },
    { categoryId: 'speakers', parentCategoryId: 'audio', parentCategoryName: 'Audio', name: 'Speakers', level: 3 },
    { categoryId: 'dslrCameras', parentCategoryId: 'cameras', parentCategoryName: 'Cameras', name: 'DSLRs', level: 3 },
    { categoryId: 'actionCameras', parentCategoryId: 'cameras', parentCategoryName: 'Cameras', name: 'Action Cameras', level: 3 },
    { categoryId: 'smartLights', parentCategoryId: 'smartHome', parentCategoryName: 'Smart Home', name: 'Smart Lights', level: 3 },
    { categoryId: 'smartSpeakers', parentCategoryId: 'smartHome', parentCategoryName: 'Smart Home', name: 'Smart Speakers', level: 3 },
    { categoryId: 'consoles', parentCategoryId: 'gaming', parentCategoryName: 'Gaming', name: 'Consoles', level: 3 },
    { categoryId: 'gamingAccessories', parentCategoryId: 'gaming', parentCategoryName: 'Gaming', name: 'Gaming Accessories', level: 3 },
];
