import { Col, ColProps } from '@pengfew/base-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

const swiperCss = (height: string) => ({
  height: height,
  '& .swiper-scrollbar.swiper-scrollbar-vertical': {
    right: 'var(--swiper-scrollbar-right,0px)',
  },
});

export interface SwiperColProps extends ColProps {
  /** swiper 的 height  */
  height?: string;
  /** slide 的list長度，用於rerender slide的scrollbar*/
  slideHeight: number;
}

export const SwiperCol = ({
  children,
  height = '60vh',
  slideHeight,
  ...props
}: SwiperColProps) => {
  return (
    <Col {...props}>
      <Swiper
        spaceBetween={20}
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        autoHeight={true}
        css={swiperCss(height)}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide key={slideHeight}>{children}</SwiperSlide>
      </Swiper>
    </Col>
  );
};

export default SwiperCol;
