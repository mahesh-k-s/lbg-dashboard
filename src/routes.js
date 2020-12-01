import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import SubPage from './pages/SubPage'
// import SalesOrder from './pages/sales-order';

const Routes = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page/:pageComponent" component={SubPage} />
        {/* <Route exact path="/" render={() => <Redirect to="/purchase-order" />} /> */}
        {/* <Route path="/purchase-order" component={PurchaseOrder} />
        <Route path="/sales-order" component={SalesOrder} /> */}
    </Switch>
)

export default Routes