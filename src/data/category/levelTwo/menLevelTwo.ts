export interface LevelTwoCategory {
    categoryId: string;
    parentCategoryId: string;
    name: string;
    level: number;
}

export const menLevelTwoCategories: LevelTwoCategory[] = [
    {
        categoryId: 'topwear',
        parentCategoryId: 'men',
        name: 'Topwear',
        level: 2
    },
    {
        categoryId: 'bottomwear',
        parentCategoryId: 'men',
        name: 'Bottomwear',
        level: 2
    },
    {
        categoryId: 'innerwearAndSleepwear',
        parentCategoryId: 'men',
        name: 'Innerwear and Sleepwear',
        level: 2
    },
    {
        categoryId: 'footwear',
        parentCategoryId: 'men',
        name: 'Footwear',
        level: 2
    },
    {
        categoryId: 'grooming',
        parentCategoryId: 'men',
        name: 'Grooming',
        level: 2
    },
    {
        categoryId: 'Fashion',
        parentCategoryId: 'men',
        name: 'Fashion',
        level: 2
    },
];