import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.styl'
export default function Index() {

  return (
    <Swiper className="swiper-container"
      circular
      autoplay
    >
      <SwiperItem>
        <Image className='item' src={require('./images/1.jpg')} />
      </SwiperItem>
      <SwiperItem>
        <Image className='item' src={require('./images/2.jpg')} />
      </SwiperItem>
      <SwiperItem>
        <Image className='item' src={require('./images/3.jpg')} />
      </SwiperItem>
      <SwiperItem>
        <Image className='item' src={require('./images/4.jpg')} />
      </SwiperItem>
    </Swiper>
  )
}
