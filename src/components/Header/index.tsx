import { memo, useState, useCallback, useEffect } from 'react';
import { BottomNavigationAction } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useRouter } from 'next/router';
import * as S from './styles';
import getFilteredNavLinks from './getFilteredNavLinks';
import getNavId from './getNavId';

interface INavLinks {
  id: number;
  path: string;
  label: string;
}

const Header = () => {
  const router = useRouter();
  const [navLinks, setNavLinks] = useState(getFilteredNavLinks());
  const [navId, setNavId] = useState<number | undefined>(
    getNavId(navLinks, router.pathname)
  );
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    if (localStorage) {
      const token = localStorage.getItem('token');
      const filteredNavLinks = getFilteredNavLinks(token);
      setNavLinks(filteredNavLinks);
      setNavId(getNavId(filteredNavLinks, router.pathname));
    }
  }, [router.pathname]);

  const toggleDrawer = open => event => {
    const { type, key } = event;

    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }

    setMobileMenuIsOpen(() => open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map(link => (
          <div key={link.id}>
            <ListItem button onClick={() => router.push(link.path)}>
              <ListItemText primary={link.label} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );

  const handleNavigation = useCallback(
    (event, newNavId) => {
      const slug = navLinks.find(link => link.id === newNavId);
      router.push(slug.path);
    },
    [navLinks, router]
  );

  return (
    <S.HeaderNav>
      <S.ImageContainer>
        <img src="/logo/logo_paideia.png" alt="Logo Paideia" />
      </S.ImageContainer>

      <S.DesktopMenu>
        <S.NavigationContainer
          value={navId}
          onChange={handleNavigation}
          showLabels
        >
          {navLinks.map(link => (
            <BottomNavigationAction key={link.id} label={link.label} />
          ))}
        </S.NavigationContainer>
      </S.DesktopMenu>

      <S.MobileMenu>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large" />
        </Button>
        <Drawer
          anchor="left"
          open={mobileMenuIsOpen}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </S.MobileMenu>
    </S.HeaderNav>
  );
};

export default memo(Header);
