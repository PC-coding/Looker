import './App.css';
import Home from './Components/Homepage/Home/Home';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Search from './Components/Homepage/SearchEngine/Search';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
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
