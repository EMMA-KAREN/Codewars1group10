

import FavoriteCodewarriors from './Component/FavoriteCodeWorriors';
import Leaderboard from './Component/Leaderboard';

import CustomElements from './Component/CustomElement';

function App() {
  const leaders = ['Sch3lp', 'nplus']; 

  return (
    <div>
      <FavoriteCodewarriors />
      <Leaderboard leaders={leaders} />
  
      < CustomElements/>
    </div>
  );
}

export default App;
