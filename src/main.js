// eslint-disable-next-line import/no-cycle
import { Home } from './Components/home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './Components/register.js';
import { Feed } from './Components/feed.js';
// import { ProfilePost } from './Components/profile.js';
const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/feed': Feed,
  // '/profile': ProfilePost,

};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
