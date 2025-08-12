import DealCard from "./DealCard";
import skirtImg from "../../../../images/skirt.png";
import shirtImg from "../../../../images/shirt.png";
import formalShirtImg from "../../../../images/formal-shirt.png";
import sareeImg from "../../../../images/saree.png";
import topsImg from "../../../../images/tops.png";
import smartwatchesImg from "../../../../images/smartwatch.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const deals = [
  { title: "Skirt", image: skirtImg, offer: "30% OFF" },
  { title: "Shirt", image: shirtImg, offer: "25% OFF" },
  { title: "Formal Shirt", image: formalShirtImg, offer: "40% OFF" },
  { title: "Saree", image: sareeImg, offer: "50% OFF" },
  { title: "Tops", image: topsImg, offer: "35% OFF" },
  { title: "Smartwatches", image: smartwatchesImg, offer: "20% OFF" },
];

// Duplicate for smooth infinite loop
const infiniteDeals = [...deals, ...deals];

export default function Deal() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-20">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
        Today Deals
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        loop={true}
        grabCursor={true}
        allowTouchMove={false}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {infiniteDeals.map((deal, index) => (
          <SwiperSlide key={index}>
            <DealCard {...deal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
