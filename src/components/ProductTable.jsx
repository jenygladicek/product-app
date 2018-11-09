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
    const createRowItems = productData.filter(rowItem =>{
        const name = rowItem.name;
        if(name.toLowerCase().search(
            filterText.toLowerCase()) !== -1)
            return;
        if(inStockOnly && !rowItem.stocked)
            return;
    });
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
                {createRowItems.map(row =>{
                    if(row.category !== lastCategory){
                        return(<ProductCategoryRow category={row.category} key={row.id} />)
                     }
                    return(<ProductRow product={row} key={row.id} />)
                    lastCategory = row.category;
                })}       
            </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;