import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import store from "./store/store";
import CategoriesPage from "./pages/categories/Categories.page";
import HomePage from "./pages/home/Home.page";
import LocationsPage from "./pages/locations/Locations.page";
import Toolbar from "./components/toolbar/Toolbar";
import DefaultPageLayout from "./components/defaultPageLayout/DefaultPageLayout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/locations">LOCATIONS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul> */}

        <CssBaseline />
        <Toolbar />
        <Switch>
          <Route path="/" exact>
            <DefaultPageLayout>
              <HomePage />
            </DefaultPageLayout>
          </Route>
          <Route path="/locations" exact>
            <DefaultPageLayout>
              <LocationsPage />
            </DefaultPageLayout>
          </Route>
          <Route path="/categories" exact>
            <DefaultPageLayout>
              <CategoriesPage />
            </DefaultPageLayout>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
