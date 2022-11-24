import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import * as pages from '../page'

export default function Authenticate() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route index path="/item" component={pages.ItemPage} />
                </Switch>
            </Router>
        </div>
    );
}
