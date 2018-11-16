import React, { Component } from 'react';

import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText : this.props.filterText,
            inStockOnly : this.props.inStockOnly,
            productData : this.props.productData
        }
    }
  render() {
    const {filterText , inStockOnly, productData} = this.state;
    let lastCategory = null;
    let rows = [];
    productData.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
          }
        rows.push(<ProductRow product={product} key={product.id} />)
        lastCategory = product.category;
    })
    return (
      <div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}       
            </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;