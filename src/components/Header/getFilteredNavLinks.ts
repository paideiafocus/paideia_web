import decode from 'jwt-decode';
import {
  INavLinks,
  NotLoggedLinks,
  linksToActiveUsers,
  linksToAdminUsers,
  linksToSubscriberUsers,
} from './listLinks';

interface IDecodeToken {
  status: string;
}

const getFilteredNavLinks = (token = ''): INavLinks[] => {
  if (!token) {
    return NotLoggedLinks;
  }

  const { status } = decode(token) as IDecodeToken;

  if (status === 'common') {
    return NotLoggedLinks;
  }

  if (status === 'admin') {
    return linksToAdminUsers;
  }

  if (status === 'subscriber') {
    return linksToSubscriberUsers;
  }

  return linksToActiveUsers;
};

export default getFilteredNavLinks;
