/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import { ProvideAuth } from './pages/Auth/UseAuth';
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddReview from "./pages/Dashboard/AddReview";
import AddService from "./pages/Dashboard/AddService";
import Checkout from "./pages/Dashboard/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageService from "./pages/Dashboard/ManageService";
import OrderList from "./pages/Dashboard/OrderList";
import Home from "./pages/Home/Home";

// export const AuthContext = createContext();
function App() {
  
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/order-list">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/add-service">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/add-admin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manage-service">
            <ManageService></ManageService>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/add-review">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/order-service/:id">
            <Checkout />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
