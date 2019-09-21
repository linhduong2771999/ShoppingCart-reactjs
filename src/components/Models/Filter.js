import React, { Component } from "react";

class Filter extends Component {
 
  
  render() {
    return (
      <div className="col-md-4  d-flex justify-content-end">
        <select
          className="btn btn-primary mr-3"
          value={this.props.size}
          onChange={this.props.handleChangeSize}
        >
          <option>Chose Size</option>
          <option value={-1}>All</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>

        <select
          className="btn btn-primary mr-3"
          value={this.props.name}
          onChange={this.props.handleChangeName}
        >
          <option>Chose Name</option>
          <option value={-1}>All</option>
          <option>Shirt</option>
          <option>Jeans</option>
          <option>Hoddies</option>
        </select>
      </div>
    );
  }
}

export default Filter;
