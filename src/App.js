import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import MealDetails from './components/MealDetails/MealDetails';


function App() {
  return (
    <div className="App bg-dark">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/meal/:mealID">
            <MealDetails></MealDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
