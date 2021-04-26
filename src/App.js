import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import RestaurentListing from './containers/RestaurentListing';
import SearchComponent from './containers/SearchComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={RestaurentListing} />
          <Route path={"/SearchComponent/:SearchComponent"} exact component={SearchComponent} />
          <Route>404 Not Found!</Route>
          <Redirect to={"/"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;