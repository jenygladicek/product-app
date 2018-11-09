import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText : this.props.filterText,
            inStockOnly : this.props.inStockOnly
        }
    }
    onChange = e =>{
        this.setState({filterText : e.target.value});
    }
    checkChange = e =>{
        this.setState({inStockOnly : e.target.checked});
    }
  render(){
    return (
      <div>
        <div><input type="text" name="search" placeholder="Search..." value={this.state.filterText} onChange={this.onChange}/></div>
        <div><label><input type="checkbox" name="stock" checked={this.state.inStockOnly} onChange={this.checkChange}/>Only show products in stock</label></div>
      </div>
    );
  }
}

export default SearchBar;