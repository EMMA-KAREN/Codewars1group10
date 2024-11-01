// CodewarsLink component
const CodewarsLink = ({ user }) => (
  <a 
    href={`http://www.codewars.com/users/${user}`} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-warning text-decoration-none fw-bold px-2"
  >
    {user}
  </a>
);

// Leaderboard component
const Leaderboard = ({ leaders }) => (
  <div className="container bg-dark text-center text-light p-5 rounded shadow-lg">
    <h1 className="display-5 mb-5 text-warning">
      MY THREE FAVORITE CODEWARRIORS ARE <a href="http://www.codewars.com/users/noLan" className="text-warning">noLan</a>,
      <a href="http://www.codewars.com/users/OverZealous" className="text-warning">OverZealous</a> AND 
      <a href="http://www.codewars.com/users/jhoffner" className="text-warning">jhoffner</a>
    </h1>
    <ul className="list-unstyled d-flex flex-wrap justify-content-center">
      {leaders.map((leader, index) => (
        <li key={index} className="m-2">
          <CodewarsLink user={leader} />
        </li>
      ))}
    </ul>
  </div>
);

export { CodewarsLink, Leaderboard };
