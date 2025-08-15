import DealCard from "./DealCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import { useAppSelector } from "../../../../redux/store";

export default function Deal() {
  const { customer } = useAppSelector((store) => store);

  // अगर data undefined है तो empty array fallback
  const deals = customer?.homePageData?.deals || [];

  // Duplicate for smooth infinite loop
  const infiniteDeals = [...deals, ...deals];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-20">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
        Today Deals
      </h2>
      <Swiper
        modules={[Navigation, Autoplay, FreeMode]}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000} // speed जितनी ज्यादा होगी उतना smooth लगेगा
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
        {infiniteDeals.map((item, index) => (
          <SwiperSlide key={index}>
            <DealCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
