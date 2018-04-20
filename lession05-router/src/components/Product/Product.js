import React, { Component } from 'react';
import Item from './Item';

class Product extends Component {
    render() {
        return (
            <div id="products" className="row list-group">
                <Item>Sản Phẩm IPhone</Item>
                <Item>Sản Phẩm IPhone</Item>
                <Item>Sản Phẩm IPhone</Item>
                <Item>Sản Phẩm IPhone</Item>
                <Item>Sản Phẩm IPhone</Item>
                <Item>Sản Phẩm IPhone</Item>
            </div>
        );
    }
}

export default Product;