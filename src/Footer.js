import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Active</FilterLink>
    {' '}
    <FilterLink>Complete</FilterLink>
  </div>
)

export default Footer;
