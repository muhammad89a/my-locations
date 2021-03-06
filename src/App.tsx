import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import store from "./store/store";
import CategoriesPage from "./pages/categories/Categories.page";
// import HomePage from "./pages/home/Home.page";
import LocationsPage from "./pages/locations/Locations.page";
import Page404 from "./pages/Page404/Page404.page";
import CreateUpdateCategory from "./pages/createCategory/CreateUpdateCategory.page";
import Toolbar from "./components/toolbar/Toolbar";
import DefaultPageLayout from "./components/defaultPageLayout/DefaultPageLayout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Toolbar />
        <Switch>
          <Route path="/" exact>
            <DefaultPageLayout>
              {/* <HomePage /> */}
              <CategoriesPage />
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
          <Route path="/categories/:id" exact>
            <DefaultPageLayout>
              <CreateUpdateCategory />
            </DefaultPageLayout>
          </Route>
          <Route path="/createCategory" exact>
            <DefaultPageLayout>
              <CreateUpdateCategory />
            </DefaultPageLayout>
          </Route>
          <Route>
            <DefaultPageLayout>
              <Page404 />
            </DefaultPageLayout>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
