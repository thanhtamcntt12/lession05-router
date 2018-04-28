import React, { Component } from 'react';
import Item from './Item';
import myData from './data.json';

class Product extends Component {
    render() {
        return (
            <div id="products" className="row list-group">
                {
                    myData.map((val,key) => {
                        return <Item> { val.ten } </Item>
                    })
                }
            </div>
        );
    }
}

export default Product;