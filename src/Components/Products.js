import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
export class Products extends Component {
    render() {
        return (

            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* Product */}
                    {this.showProducts()}

                </div>
            </section>

        );
    }
    showProducts =()=>{
        var temp;
        temp = this.props.Products.map((e, index)=>{
            return <Product key={e.id} Product={e}></Product>
        })
        return temp;
    }
}
const mapStateToProps = (state) =>{
    return{
        Products : state.Products
    }
}
export default connect(mapStateToProps, null)(Products);
