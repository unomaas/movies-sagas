//#region ⬇⬇ All document setup, below:
// ⬇ Component imports:
import './App.css';
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';
import MovieDetail from '../MovieDetail/MovieDetail';
// ⬇ Dependent imports:
import { HashRouter as Router, Route } from 'react-router-dom';
//#endregion ⬆⬆ All document setup above.


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/detail/:id" children={<MovieDetail />} />

        {/* Add Movie page */}
        <Route path="/addmovie">
          <AddMovie />
        </Route>
      </div>
    </Router>
  ); // End return
} // End App


export default App;
