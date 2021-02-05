import { memo } from 'react';

import Image from 'next/image';

import * as S from './styles';

const Banner: React.FC = () => {
  return (
    <S.BannerImage>
      <Image
        src="/image_01.png"
        alt="Curso pré-vestibular gratuito"
        height="auto"
        width="900"
        // layout="responsive"
        priority
      />
    </S.BannerImage>
  );
};

export default memo(Banner);
