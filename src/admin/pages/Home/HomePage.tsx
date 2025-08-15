import { useAppSelector } from "../../../redux/store";
import HomePageTable from "./HomePageTable";

export default function HomePage() {
   const { customer } = useAppSelector((store) => store);
  return (
    <div>
      <HomePageTable data={customer.homePageData?.grid || []}/>
    </div>
  );
}
