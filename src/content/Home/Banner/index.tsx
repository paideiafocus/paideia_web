import { memo } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import * as S from './styles';

const Banner: React.FC = () => {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop>
      <img src="/image_01.png" alt="Curso pré-vestibular gratuito 1" />

      <img src="/image_02.png" alt="Curso pré-vestibular gratuito 2" />

      <img src="/image_03.png" alt="Curso pré-vestibular gratuito 3" />

      <img src="/image_04.png" alt="Curso pré-vestibular gratuito 4" />
    </Carousel>
  );
};

export default memo(Banner);
