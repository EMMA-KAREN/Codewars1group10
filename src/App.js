
import React from "react";
//code war one, creating element and an ordered list
import CreateElement from "./components/CreateElement";
import CreateUnordered from "./components/CreateUnordered";
//codewar 2,users and leaders
import CodewarsLink from "./components/CodewarsLink";
import Leaderboard from "./components/Leaderboard";


const App = () => {
  const myHeader = (
    <h1>
      My three favorite codewarriors are{' '}
      <CodewarsLink user="noLan" />,{' '}
      <CodewarsLink user="jhoffner" />, and{' '}
      <CodewarsLink user="OverZealous" />
    </h1>
  );
  const leaders = ["Sch3lp", "nplus", "noLan", "jhoffner", "OverZealous"];
  return (
    <div>
      <div class="card">
        <h1>Code War One</h1>
      <CreateElement hellocontent="Hello World"  />
      <CreateUnordered list={['Apples', 'Oranges', 'Bananas']}/>
      </div>
      <div class="container">
      <h1>Code War Two</h1>
      {myHeader}
      <Leaderboard leaders={leaders}/>
    </div>
    </div>
  );
};
export default App;