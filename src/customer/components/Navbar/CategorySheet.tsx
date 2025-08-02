import { Box } from "@mui/material";
import { electronicsLevelThreeCategories } from "../../../data/category/levelThree/electronicLevelThree";
import { homeLevelThreeCategories } from "../../../data/category/levelThree/homeLevelThree";
import { menLevelThreeCategories } from "../../../data/category/levelThree/menLevelThree";
import { womenLevelThreeCategories } from "../../../data/category/levelThree/womenLevelThree";
import { electronicsLevelTwoCategories } from "../../../data/category/levelTwo/electronicLevelTwo";
import { homeLevelTwoCategories } from "../../../data/category/levelTwo/homeLevelTwo";
import { menLevelTwoCategories } from "../../../data/category/levelTwo/menLevelTwo";
import { womenLevelTwoCategories } from "../../../data/category/levelTwo/womenLevelTwo";

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwoCategories,
  women: womenLevelTwoCategories,
  home: homeLevelTwoCategories,
  electronics: electronicsLevelTwoCategories,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThreeCategories,
  women: womenLevelThreeCategories,
  home: homeLevelThreeCategories,
  electronics: electronicsLevelThreeCategories,
};

export default function CategorySheet({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const getChildCategories = (categories: any[], parentId: string) => {
    return categories.filter((child) => child.parentCategoryId === parentId);
  };

  return (
    <Box
      sx={{ zIndex: 50 }}
      className="bg-white w-full max-h-[500px] border border-gray-200 shadow-2xl rounded-2xl overflow-y-auto scrollbar-thin
       scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 transition-all"
    >
      {categoryTwo[selectedCategory]?.map((parent) => (
        <div key={parent.categoryId}>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b border-indigo-200 pb-1">
            {parent.name}
          </h3>
          <ul className="space-y-2">
            {getChildCategories(
              categoryThree[selectedCategory],
              parent.categoryId
            ).map((sub) => (
              <li
                key={sub.categoryId}
                className="text-sm text-gray-600 hover:text-indigo-600 hover:underline cursor-pointer transition-all duration-150"
              >
                {sub.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Box>
  );
}
