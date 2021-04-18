import './App.css';
import Home from './Components/Homepage/Home/Home';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import SearchPage from './Components/Homepage/SearchEngine/SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
