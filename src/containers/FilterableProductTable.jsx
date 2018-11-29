import React, { Component } from 'react';

import SearchBar from "./../components/SearchBar";
import ProductTable from "./../components/ProductTable";

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData : [
                {id: 1,category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {id: 2,category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {id: 3,category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {id: 4,category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {id: 5,category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {id: 6,category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
              ],
              filterText : '',
              inStockOnly  : false
        }
    }
  textChange = (text) =>{
    this.setState({filterText : text})
  }
  checkChange = (checkval) =>{
    this.setState({inStockOnly : checkval})
  }
  render() {
    return (
      <div className="container">
        <header><h1>List of products</h1></header>
        <SearchBar filterText = {this.state.filterText} inStockOnly = {this.state.inStockOnly} onFilterTextChange = {this.textChange} onInStockChange = {this.checkChange}/>
        <ProductTable productData = {this.state.productData} filterText = {this.state.filterText} inStockOnly = {this.state.inStockOnly}/>
      </div>
    );
  }
}

export default FilterableProductTable;