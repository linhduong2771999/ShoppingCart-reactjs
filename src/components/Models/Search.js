import React, { Component } from "react";

class Search extends Component {

   
    
  render() {
    return (
      <form className="form-inline mr-3 ">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Shirt, jeans, hoddies..."
            name="searchValue"
            value={this.props.search}
            onChange={this.props.handleChangeSearch}
          ></input>
          <div className="input-group-append">
            <span className="input-group-text">Search</span>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
