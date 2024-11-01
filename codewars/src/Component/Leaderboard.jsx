import React from 'react';

// This defines a functional component named Leaderboard that accepts a single prop named leaders.
function Leaderboard(props) {
  // This line extracts the leaders prop from the component's props object and stores it in a constant variable.
  const leaders = props.leaders;

  return (
    // Main container with Bootstrap styling for alignment and padding
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Codewars Leaderboard</h2>
      {/* Bootstrap list group to style each leader link */}
      <div className="list-group">
        {/* Iterates over the leaders array using the map function. Inside the map function, it creates elements for each leader in the array. */}
        {leaders.map((leader) => (
          // Each link is wrapped in a Bootstrap-styled item
          <a
            key={leader}
            href={`http://www.codewars.com/users/${leader}`}
            className="list-group-item list-group-item-action text-success"
          >
            {leader}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
