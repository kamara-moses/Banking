import React from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "../components/Login";

const AppRouter = () => {
    retunr (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/" component={Login} exact={true} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}