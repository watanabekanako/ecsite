import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'; //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper'; //使いたい機能をインポート
import s from './TestCarousel.module.css'; //同じディレクトリにCSSを用意
SwiperCore.use([Pagination, Autoplay, EffectFade]);

// カルーセルにする画像のソースをリストにします
const images = ['/TopImage.jpg', '/TopImage2.jpg'];

const TestCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
        bulletClass: `swiper-pagination-bullet ${s.custom_bullet}`, //非アクティブなアイコンのクラスを指定
        bulletActiveClass: `swiper-pagination-bullet-active ${s.custom_bullet_active}`, //アクティブなアイコンのクラスを指定
      }}
      autoplay={{ delay: 1000, disableOnInteraction: true }}
      speed={2000}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              src={src}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default TestCarousel;
