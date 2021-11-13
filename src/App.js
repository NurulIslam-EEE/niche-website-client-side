import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Booking from './pages/Booking/Booking';
import MoreProducts from './pages/Home/MoreProducts/MoreProducts';
import RepairAndService from './pages/Home/RepairAndService/RepairAndService';

function App() {
  return (
    <AuthProvider>
      <Router>

        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Booking />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/moreProducts">
            <MoreProducts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/repairAndService">
            <RepairAndService />
          </Route>

        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
