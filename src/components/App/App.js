import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}

        {/* Add Movie page */}
      </div>
    </Router>

  );
}


export default App;
