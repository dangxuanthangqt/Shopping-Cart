import React, { Component } from 'react';
import { changeQuantity, deleteItem } from '../Actions/actCart';
import { connect } from 'react-redux';
export class CartItem extends Component {
    render() {
        var {element} = this.props;
        console.log(element)
        return (
            <tr>
            <th scope="row">
              <img src={element.Product.image} alt={element.Product.desciption} className="img-fluid z-depth-0" />
            </th>
            <td>
              <h5>
        <strong>{element.Product.name}</strong>
              </h5>
            </td>
        <td>{element.Product.price}$</td>
            <td className="center-on-small-only">
              <span className="qty">{this.props.element.Quantity} </span>
              <div className="btn-group radio-group" data-toggle="buttons">
                <label onClick={()=>{
                    this.props.changeQuantity(-1, element.Product.id)
                  }} className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light">
                  <span >—</span>
                </label>
                <label onClick={()=>{
                    this.props.changeQuantity(1, element.Product.id)
                  }} className="btn btn-sm btn-primary
                                      btn-rounded waves-effect waves-light">
                  <span >+</span>
                </label>
              </div>
            </td>
        <td>{element.Product.price*element.Quantity}$</td>
            <td>
              <button 
              onClick={()=>{this.props.deleteItem(element.Product.id)}}
               type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item">
                X
              </button>
            </td>
          </tr>
          
        );
    }
}
const mapDispatchToProps =(dispatch, props)=>{
  return {
    changeQuantity:(value, id)=>{
      dispatch(changeQuantity(value, id))
    },
    deleteItem :(id)=>{
          dispatch(deleteItem(id))
    }
  }
}
export default connect(null, mapDispatchToProps)(CartItem);
