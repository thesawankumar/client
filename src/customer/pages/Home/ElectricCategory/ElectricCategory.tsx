import laptop from "../../../../images/laptop.jpg";
import phone from "../../../../images/phone.png";
import camera from "../../../../images/camera.jpg";
import tv from "../../../../images/tv.jpg";
import smartwatch from "../../../../images/smartwatch.jpg";
import headphone from "../../../../images/headphone.jpg";
import speaker from "../../../../images/speaker.jpg";
import ElectricCategoryCard from "./ElectricCategoryCard";


type Category = {
  name: string;
  image: string;
};

const categories: Category[] = [
  { name: "Laptop", image: laptop },
  { name: "Phone", image: phone },
  { name: "Camera", image: camera },
  { name: "TV", image: tv },
  { name: "Smartwatch", image: smartwatch },
  { name: "Headphone", image: headphone },
  { name: "Speaker", image: speaker },
];

export default function ElectricCategory() {
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b border-gray-300">
      {categories.map((item) => (
        <ElectricCategoryCard
          key={item.name}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
}
