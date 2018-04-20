import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item col-xs-4 col-lg-4">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            { this.props.children }
                        </h4>
                        <p className="group inner list-group-item-text">
                            Khóa học lập trình web bằng PHP &amp;aap;MySQl cung cấp cho bạn các kiến thức liên quan là chính.
                        </p>
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <p className="lead">
                                    1.000.000 VNĐ
                                </p>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <a className="btn btn-success" href="http://www.jquery2dotnet.com">Chi tiết</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;