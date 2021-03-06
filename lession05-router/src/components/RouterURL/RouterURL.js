import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Product from '../Product/Product';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
class RouterURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/san-pham" component={Product}/>
                        <Route path="/lien-he" component={Contact} />
                        <Route component={Home} />
                    </Switch>
                </div>
        );
    }
}

export default RouterURL;