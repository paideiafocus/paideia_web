import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import * as S from './styles';

interface OptionCardProps {
  pdfLink?: string;
  imageSrc: string;
  title: string;
}

const OptionCard: React.FC<OptionCardProps> = ({
  pdfLink,
  imageSrc,
  title,
}) => {
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    router.push('/perguntas');
  }, [router]);

  return (
    <S.OptionCard>
      {pdfLink && (
        <S.Link href={`/${pdfLink}`} target="__blank">
          <Image
            src={`/${imageSrc}`}
            width="50"
            height="50"
            priority
            alt={title}
          />
          <p>{title}</p>
        </S.Link>
      )}

      {!pdfLink && (
        <S.NextLink
          onKeyPress={handleNavigation}
          onClick={handleNavigation}
          role="button"
          tabIndex={0}
        >
          <Image
            src={`/${imageSrc}`}
            width="50"
            height="50"
            priority
            alt={title}
          />
          <p>{title}</p>
        </S.NextLink>
      )}
    </S.OptionCard>
  );
};

export default OptionCard;
