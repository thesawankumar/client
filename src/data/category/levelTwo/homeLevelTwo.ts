export interface LevelTwoCategory {
    categoryId: string;
    parentCategoryId: string;
    name: string;
    level: number;
}
export const homeLevelTwoCategories: LevelTwoCategory[] = [
    {
        categoryId: 'furniture',
        parentCategoryId: 'home',
        name: 'Furniture',
        level: 2
    },
    {
        categoryId: 'homeDecor',
        parentCategoryId: 'home',
        name: 'Home Decor',
        level: 2
    },
    {
        categoryId: 'kitchenAndDining',
        parentCategoryId: 'home',
        name: 'Kitchen & Dining',
        level: 2
    },
    {
        categoryId: 'bedding',
        parentCategoryId: 'home',
        name: 'Bedding',
        level: 2
    },
    {
        categoryId: 'lighting',
        parentCategoryId: 'home',
        name: 'Lighting',
        level: 2
    },
    {
        categoryId: 'bath',
        parentCategoryId: 'home',
        name: 'Bath',
        level: 2
    },
];
