import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import store  from './store/store';
import HomePage from './pages/home/Home.page'
import LocationsPage from './pages/locations/Locations.page'
import CategoriesPage from './pages/categories/Categories.page'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/locations">LOCATIONS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>


        <Switch>
          <Route path="/" exact> 
            <HomePage />
          </Route>
          <Route path="/locations" exact> 
            <LocationsPage />
          </Route>
          <Route path="/categories" exact> 
            <CategoriesPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
