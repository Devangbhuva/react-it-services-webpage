import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Sections.css";

import client1 from "../assets/images/client-1.png";
import client2 from "../assets/images/client-2.png";
import client3 from "../assets/images/client-3.png";
import client4 from "../assets/images/client-4.png";
import client5 from "../assets/images/client-5.png";

export default function Clients() {

  // Original logos
  const logos = [client1, client2, client3, client4, client5];

  // Duplicate logos for proper loop
  const extendedLogos = [...logos, ...logos];

  return (
    <section className="clients-section">
      <div className="container">

        <Swiper
          slidesPerView={5}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {extendedLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="client" className="client-logo" />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}