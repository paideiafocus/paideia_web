import decode from 'jwt-decode';
import { INavLinks, NotLoggedLinks, linksToActiveUsers } from './listLinks';

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

  return linksToActiveUsers;
};

export default getFilteredNavLinks;
