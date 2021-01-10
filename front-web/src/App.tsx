import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Orders from './Orders';

function App() {
  return (
    <>
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
    <ToastContainer />
    </>
  )
  

}

export default App;
