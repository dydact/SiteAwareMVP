import { createElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ href, children, ...props }) => {
  return createElement(RouterLink, { to: href, ...props }, children);
};

export default Link;