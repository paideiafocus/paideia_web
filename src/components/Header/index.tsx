import { memo, useState, useCallback } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as S from './styles';

const navLinks = [
  { id: 0, path: '/' },
  { id: 1, path: '/sobre' },
  { id: 2, path: '/noticias' },
  { id: 3, path: '/contato' },
  { id: 4, path: '/perguntas' },
  { id: 5, path: '/acesso' },
];

const Header = () => {
  const router = useRouter();
  const [navId, setNavId] = useState(0);

  const handleNavigation = useCallback(
    (event, newNavId) => {
      console.log(newNavId);
      const slug = navLinks.find(link => link.id === newNavId);
      router.push(slug.path);
      setNavId(newNavId);
    },
    [router]
  );

  return (
    <nav>
      <S.ImageContainer>
        <img src="/logo/logo_paideia.png" alt="Logo Paideia" />
      </S.ImageContainer>
      {/* <Image
          src="/logo/logo_paideia.png"
          width="1496"
          height="314"
          layout="responsive"
          alt="Logo Paideia"
        /> */}
      <BottomNavigation value={navId} onChange={handleNavigation} showLabels>
        <BottomNavigationAction label="Início" />
        <BottomNavigationAction label="Sobre" />
        <BottomNavigationAction label="Notícias" />
        <BottomNavigationAction label="Contato" />
        <BottomNavigationAction label="Perguntas Frequentes" />
        <BottomNavigationAction label="Acesse sua conta" />
      </BottomNavigation>
    </nav>
  );
};

export default memo(Header);
