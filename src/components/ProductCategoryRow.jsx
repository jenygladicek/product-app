import React, { Component } from 'react';

class ProductCategoryRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category : this.props.category
        }
    }
  render() {
      const category= this.state.category;
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
      </tr>
    );
  }
}

export default ProductCategoryRow;