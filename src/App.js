import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Layout from "./components/layout/Layout";
import ProductDetails from "./components/product/ProductDetails";
import ProductCategoryPage from "./components/product/ProductCategoryPage";
import Modal from "./components/ui/Modal";
import CartModal from "./components/cart/CartModal";
import './App.css'

class App extends PureComponent {
  render() {
    return (
      <> 
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/category/all' />
          </Route>
          <Route
            exact
            path='/category/:categoryInput'
            component={ProductCategoryPage}
          />
          <Route
            exact
            path='/category/:categoryName/:productId'
            component={ProductDetails}
          />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Layout>
      </>
    );
  }
}

export default App;
