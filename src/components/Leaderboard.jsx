import React from 'react';

const Leaderboard = ({ leaders }) => (
  <div>
    {leaders.map((leader) => (
      <a key={leader} href={`http://www.codewars.com/users/${leader}`} >
        {leader}
      </a>
    ))}
  </div>
);

export default Leaderboard;
