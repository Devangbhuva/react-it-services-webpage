import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Sections.css";

import t1 from "../assets/images/testimonial-1.jpg";
import t2 from "../assets/images/testimonial-2.jpg";
import t3 from "../assets/images/testimonial-3.jpg";
import t4 from "../assets/images/testimonial-4.jpg";

export default function Testimonials() {
  const data = [
    { img: t1, name: "Fizzi Brandon", role: "Freelancer" },
    { img: t2, name: "Jhone Doe", role: "CFO" },
    { img: t3, name: "Afa Rose", role: "Web Designer" },
    { img: t4, name: "Keena Lara", role: "Store Owner" },
  ];

  return (

    <section id="testimonials" className="testimonials-section">

      <div className="container">

        <div className="section-header">
          <h2>Testimonials</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={false}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">

                <div className="testimonial-top">
                  <img src={item.img} alt={item.name} />

                  <div className="testimonial-info">
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>

                    <div className="stars">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>

                <p className="testimonial-text">
                  “Proin iaculis purus consequat sem cure digni ssim
                  donec porttitora entum suscipit rhoncus.
                  Accusantium quam, ultricies eget id.”
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}