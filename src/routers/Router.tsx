import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home';
import { PRODUCT_PAGE_PATH } from '../constants/routes';

export const routes: IRoute[] = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'productPage',
        path: PRODUCT_PAGE_PATH,
        component: () => <div>Product Page !</div>
    }
]

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(route => {
                const {path, component: Component} = route;

                return <Route exact path={path} key={path}>
                    <Component />
                </Route>
                 })}
            </Switch>
        </BrowserRouter>
    )
};

export default Router;