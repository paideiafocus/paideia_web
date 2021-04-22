import { memo, useState, useCallback } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { useRouter } from 'next/router';
import * as S from './styles';

const navLinks = [
  { id: 0, path: '/' },
  { id: 1, path: '/sobre' },
  { id: 2, path: '/noticias' },
  { id: 3, path: '/contato' },
  { id: 4, path: '/perguntas' },
  { id: 5, path: '/acesso' },
];

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

const Header = () => {
  const router = useRouter();
  const [navId, setNavId] = useState(0);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

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

      <S.DesktopMenu>
        <BottomNavigation value={navId} onChange={handleNavigation} showLabels>
          <BottomNavigationAction label="Início" />
          <BottomNavigationAction label="Sobre" />
          <BottomNavigationAction label="Notícias" />
          <BottomNavigationAction label="Contato" />
          <BottomNavigationAction label="Perguntas Frequentes" />
          <BottomNavigationAction label="Acesse sua conta" />
        </BottomNavigation>
      </S.DesktopMenu>

      <S.MobileMenu>
        <div>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor="left"
            open={mobileMenuIsOpen}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </div>
      </S.MobileMenu>
    </nav>
  );
};

export default memo(Header);
