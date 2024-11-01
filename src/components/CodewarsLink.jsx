import React from 'react';

const CodewarsLink = ({ user }) => (
  <a href={`http://www.codewars.com/users/${user}`} target="_blank" rel="noopener noreferrer">
    {user}
  </a>
);

export default CodewarsLink;
