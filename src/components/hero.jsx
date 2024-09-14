import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import 'swiper/css'; 
import './HeroStyle.css'

const fakeData = [
  {
    _id: "1",
    selectedImage: "https://bestinbd.com/projects/web/task/admin/uploads/page/test/1726299827iG15L.mp4",
    id: "1",
    text: "If you're meeting a client, I'd suggest looking for a place that offers a "
  },
  {
    _id: "2",
    selectedImage: "https://bestinbd.com/projects/web/task/admin/uploads/page/test/1726299827iG15L.mp4",
    id: "2",
    text: "If you're meeting a client, I'd suggest looking for a place that offers a "
  },
  {
    _id: "3",
    selectedImage: "https://bestinbd.com/projects/web/task/admin/uploads/page/test/1726299827iG15L.mp4",
    id: "3",
    text: "If you're meeting a client, I'd suggest looking for a place that offers a "
  },
];

const SuggestedProfiles = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <div className="relative">
      <Swiper
        speed={1500}
        loop
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation, Autoplay]}
        onSlideChange={() => {
          setIsTextVisible(false);
          setTimeout(() => setIsTextVisible(true), 500);
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {fakeData.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="relative">
              <video
                className="h-full object-cover mx-auto w-full"
                src={item.selectedImage}
                autoPlay
                loop
                muted
              ></video>

              <div
                className={`text-6xl font-bold w-[50%] z-50 absolute text-white left-4 top-1/2 transform -translate-y-1/2 transition-opacity duration-700 ${isTextVisible ? "opacity-100" : "opacity-0"}`}
              >
                {item.text}
              </div>
              <div
                className={`font-bold w-[50%] z-50 absolute text-white left-[2%] bottom-[15%] transform -translate-y-1/2 transition-opacity duration-700 ${isTextVisible ? "opacity-100" : "opacity-0"}`}
              >
                {item.id}
              </div>
              <div
                className={`w-[40%] text-center z-50 absolute text-white left-[50%] bottom-[8%] transform transition-opacity duration-700 ${isTextVisible ? "opacity-100" : "opacity-0"}`}
              >
                {item.text}
                {item.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev">
          <AiOutlineArrowLeft className="text-white" />
        </div>
        <div className="swiper-button-next">
          <AiOutlineArrowRight className="text-white" />
        </div>
      </Swiper>
    </div>
  );
};

export default SuggestedProfiles;
