import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home';
import { PRODUCT_PAGE_PATH } from '../constants/routes';
import ProductPage from '../pages/ProductPage';

export const routes: IRoute[] = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'productPage',
        path: PRODUCT_PAGE_PATH,
        component: ProductPage
    }
]

const Router = () => {
    return (
        <Switch>
            {routes.map(route => {
                const { path, component: Component } = route;

                return <Route exact path={path} key={path}>
                    <Component />
                </Route>
            })}
        </Switch>
    )
};

export default Router;