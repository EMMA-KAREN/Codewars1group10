// This line imports the React library
import React from 'react';
// Defines a functional component named CodewarsLink
function CodewarsLink({ user }) { 
  // Takes a single prop named 'user' and constructs the URL to the user's Codewars profile
  const url = `http://www.codewars.com/users/${user}`;
  
  // Creates an anchor tag (<a>) element with Bootstrap styling.
  // The href attribute is set to the constructed URL (url), and the content of the anchor tag is set to the user prop value.
  // The link has classes for removing the underline and adding color (success/green)
  return (
    <a href={url} className="text-decoration-none text-success">
      {user}
    </a>
  );
}

// This line exports the CodewarsLink component as the default export from this module.
// This allows other components to import and use the CodewarsLink component.
export default CodewarsLink;