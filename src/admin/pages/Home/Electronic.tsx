import { useAppSelector } from "../../../redux/store";
import HomePageTable from "./HomePageTable";

export default function Electronic() {
  const { customer } = useAppSelector((store) => store);
  return (
    <div>
      <HomePageTable data={customer.homePageData?.electricCategories || []} />
    </div>
  );
}
