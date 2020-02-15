import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddToCart } from '../Actions/actCart';
export class Product extends Component {
    showRating(rating) {
        var temp = [];
        for (let i = 1; i <= rating; i++) {
            temp.push(<li key={i}>
                <i className="fa fa-star" /></li>)
        }
        for(let i= 5;i>rating;i--){
            temp.push(<li key={i}>
                <i className="fa fa-star-o" />
            </li>)
        }
        return temp;
    }
    onClick =(Product)=>{


        this.props.AddToCart(Product)

    }
    render() {
        var { Product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={Product.image} className="img-fluid" alt="" />
                        <span>
                            <div className="mask waves-light waves-effect waves-light" />
                       </span>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <span>{Product.name}</span>
                            </strong>
                        </h4>
                        <ul className="rating">
                          {this.showRating(Product.rating)}
                        </ul>
                        <p className="card-text">
                            {Product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{Product.price}$</span>
                            <span className="right">
                                <span 
                                onClick={()=>{this.onClick(Product)}}
                                className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" />
                               </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        AddToCart : (product)=>{
            dispatch(AddToCart(product))
        }
    }
}
export default connect(null, mapDispatchToProps)(Product);
