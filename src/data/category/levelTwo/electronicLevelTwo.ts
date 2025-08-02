export interface LevelTwoCategory {
    categoryId: string;
    parentCategoryId: string;
    name: string;
    level: number;
}
export const electronicsLevelTwoCategories: LevelTwoCategory[] = [
    {
        categoryId: 'mobilesAndTablets',
        parentCategoryId: 'electronics', // ✅ fixed here
        name: 'Mobiles & Tablets',
        level: 2
    },
    {
        categoryId: 'laptopsAndDesktops',
        parentCategoryId: 'electronics',
        name: 'Laptops & Desktops',
        level: 2
    },
    {
        categoryId: 'audio',
        parentCategoryId: 'electronics',
        name: 'Audio',
        level: 2
    },
    {
        categoryId: 'cameras',
        parentCategoryId: 'electronics',
        name: 'Cameras',
        level: 2
    },
    {
        categoryId: 'smartHome',
        parentCategoryId: 'electronics',
        name: 'Smart Home Devices',
        level: 2
    },
    {
        categoryId: 'gaming',
        parentCategoryId: 'electronics',
        name: 'Gaming',
        level: 2
    },
];

