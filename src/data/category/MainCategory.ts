export interface MainCategory {
    categoryId: String;
    name: string;
    level: number;
}

export const mainCategories: MainCategory[] = [
    {
        categoryId: "men",
        name: "Men",
        level: 1,
    },
    {
        categoryId: "women",
        name: "Women",
        level: 1,
    },
    {
        categoryId: "home",
        name: "Home",
        level: 1,
    },
    {
        categoryId: "electronics",
        name: "Electronics",
        level: 1,
    }
];