import React, { Component } from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
export class Cart extends Component {
    priceToTal(){
        let total=0;
        let temp = this.props.Cart;
        temp.forEach(element => {
            total += element.Product.price * element.Quantity
        });
        return total;
    }
    showCart(){
        let temp = this.props.Cart;
        temp = temp.map((e, index)=>{
            return <CartItem key={index} element={e}></CartItem>
        })
        return temp;
    }
    render() {
        return (
            <section className="section">
            <div className="rounded col-sm-3 bg-primary p-2"><h3 className="">CART &nbsp; <i className="fa fa-cart-plus" aria-hidden="true"></i></h3></div>
            <div className="table-responsive">
              <table className="table product-table">
                <thead>
                  <tr>
                    <th />
                    <th>Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Cộng</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.showCart()}
                {/* <CartItem></CartItem>
                <CartItem></CartItem>
                <CartItem></CartItem> */}
                  <tr>
                    <td colSpan={3} />
                    <td>
                      <h4>
                        <strong>Tổng Tiền</strong>
                      </h4>
                    </td>
                    <td>
                      <h4>
                    <strong>{this.priceToTal()}$</strong>
                      </h4>
                    </td>
                    <td colSpan={3}>
                      <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        Cart : state.Cart
    }
}
export default connect(mapStateToProps, null)(Cart);
