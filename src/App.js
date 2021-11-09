import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/users">

        </Route>
        <Route path="/">

        </Route>
      </Switch>

    </Router>
  );
}

export default App;
