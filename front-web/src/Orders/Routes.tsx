import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from ".";
import Home from "../Home";

function Routes(){
    return(
        <BrowserRouter>
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

export default Routes;