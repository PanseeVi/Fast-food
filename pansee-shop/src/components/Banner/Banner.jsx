import { Swiper, SwiperSlide } from 'swiper/react'
import { CardMedia } from '@mui/material'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const bannerList = [
  {
    image:
      'https://img.freepik.com/free-vector/hand-drawn-fast-food-sale-banner_23-2150970571.jpg?w=1060&t=st=1727450401~exp=1727451001~hmac=ac0f461bdfd164bb08ebba3ec1c53a9e7df9a50c5d68550147ba542f3f4052c5',
  },
  {
    image:
      'https://img.freepik.com/free-vector/hand-drawn-fast-food-sale-banner_23-2150968575.jpg?t=st=1727450497~exp=1727454097~hmac=ffc7c2a4657260bef5136fb6f12e9072f0e98eb2aa7922d825ebcef54ba8e34e&w=1060',
  },
  {
    image:
      'https://img.freepik.com/free-psd/fast-food-restaurant-banner-template_23-2148987499.jpg?w=1060&t=st=1727450580~exp=1727451180~hmac=0d215dc6afdf1709ac1da7ba4777203d08c6d390d88be13d99299a1eb721140c',
  },
]

export default function BannerSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSlideChangeTransitionEnd={() =>
        console.log('slide change transition end')
      }
    >
      {bannerList.map((item, index) => (
        <SwiperSlide key={index}>
          <CardMedia component='img' image={item.image} height={600} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
