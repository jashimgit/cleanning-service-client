import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import { ProvideAuth } from "./pages/Auth/UseAuth";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddReview from "./pages/Dashboard/AddReview";
import AddService from "./pages/Dashboard/AddService";
import Checkout from "./pages/Dashboard/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageService from "./pages/Dashboard/ManageService";
import OrderList from "./pages/Dashboard/OrderList";
import Home from "./pages/Home/Home";

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
          <Route exact path="/dashboard/order-list">
            <OrderList></OrderList>
          </Route>
          <Route exact path="/dashboard/add-service">
            <AddService></AddService>
          </Route>
          <Route exact path="/dashboard/add-admin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/dashboard/manage-service">
            <ManageService></ManageService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard/add-review">
            <AddReview></AddReview>
          </Route>
          <PrivateRoute path="/order-service/:id">
            <Checkout />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
