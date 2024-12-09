// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Image from 'next/image';
import Lanches from '@/assets/svg/clientes/flashlanches.svg';
import TrafegoPago from '@/assets/svg/clientes/trafegopago.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Clientes() {
  return (
    <div className='flex'>
      <Swiper
        // spaceBetween={30}
        loop={true}
        autoplay={{ delay:1500, disableOnInteraction: false,}}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-[300px]"
      >
        <SwiperSlide className="flex">
            <a className="flex justify-center" href="https://www.lanches-one.vercel.app">
              <Image className="img-carousel"  alt="EmpresaWD" src={Lanches} />
              App de Lanches
            </a>
        </SwiperSlide>
        <SwiperSlide className="">
            <a className="flex justify-center" href="https://trafegopago-eta.vercel.app">
              <Image className="img-carousel" alt="EmpresaWD" src={TrafegoPago} />
            </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}