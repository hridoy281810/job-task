import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import React Icons

const Concerns = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://bestinbd.com/projects/web/task/api/get-req-data/sections?type=slug&value=test&get_section=yes&image=yes&post=yes&file=yes&gallery=yes`
    )
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData?.data?.sections || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Our Concerns</h2>
      {loading ? (
        <p>Loading concerns...</p>
      ) : data.length > 0 ? (
        <>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.flatMap((section) =>
              section.posts.list.map((post) => (
                <SwiperSlide key={post.data.id}>
                  <div className="bg-white p-6 rounded shadow">
                    <img
                      src={post.images && post.images.length > 0 ? post.images[0].url : 'https://i.ibb.co.com/TWdbfkP/clg5.jpg'}
                      alt={post.data.title}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-bold">{post.data.title}</h3>
                    <p className="text-gray-700 mt-2">{post.data.short_desc}</p>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4">
            <button className="swiper-button-prev custom-nav-button">
              <FaChevronLeft size={24} />
            </button>
            <button className="swiper-button-next custom-nav-button">
              <FaChevronRight size={24} />
            </button>
          </div>
        </>
      ) : (
        <p>No concerns found.</p>
      )}
    </section>
  );
};

export default Concerns;
