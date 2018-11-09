import React, { Component } from 'react';

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product : this.props.product
        }
    }
  render() {
    const product = this.state.product;
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;