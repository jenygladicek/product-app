import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    onChange = e =>{
        console.log(e.target.value,"first onchange");
        this.props.onFilterTextChange(e.target.value);
    }
    checkChange = e =>{
        console.log(e.target.checked,"2nd onchange");
        this.props.onInStockChange(e.target.checked);
    }
  render(){
    return (
      <div>
        <div><input type="text" name="search" placeholder="Search..." value={this.props.filterText} onChange={this.onChange}/></div>
        <div><label><input type="checkbox" name="stock" checked={this.props.inStockOnly} onChange={this.checkChange}/>Only show products in stock</label></div>
      </div>
    );
  }
}

export default SearchBar;