import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Orders from './Orders';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
  

}

export default App;
