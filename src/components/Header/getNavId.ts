import { INavLinks } from './listLinks';

const getNavId = (filteredNavLinks: INavLinks[], pathname: string): number => {
  const currentLink = filteredNavLinks.find(link => link.path === pathname);

  if (!currentLink) {
    return 0;
  }

  return currentLink.id;
};

export default getNavId;
