import React, { Component } from "react";

class ShoppingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      name: "",
      size: "",
      kind: "",
      price: this.props.products.price,
      quantify: 1,
      id: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addToCart = () => {
    let { products } = this.props;
    this.setState(
      {
        img: products.img,
        name: products.name,
        size: products.size,
        kind: products.kind,
        price: this.state.price,
        quantify: this.state.quantify,
        id: ""
      },
      () => {
        this.props.addToProducts(this.state);        
        this.props.totalPrice(this.state.price);        
        
      }
    );
  };

  increaseBtn = () => {
    this.setState({
      quantify: this.state.quantify + 1,
      price:this.state.price + this.props.products.price   
    })
  }

  decreaseBtn = () => {
    this.setState({
      quantify: this.state.quantify - 1,
      price:this.state.price- this.props.products.price   
    })
  }
  render() {
    let { products } = this.props;        
    return (
      <div className="row mt-5">
        <div className="col-md-3">
          <img src={`${products.img}`} width="100%" alt="products" />
        </div>
        <div className="col-md-3 text-center mt-5">
          <h3 className="text-primary">{products.name}</h3>
          <p>Size: {products.size}</p>
        </div>
        <div className="col-md-3 text-center mt-5">
          <h3 className="text-danger">${products.price}</h3>
          <p>each</p>
        </div>
        <div className="col-md-3 mt-5">
          <button className="btn btn-primary" onClick={this.increaseBtn}>+</button>
          <span className="mx-3">{this.state.quantify}</span>
          <button className="btn btn-danger " onClick={this.decreaseBtn}>-</button> <br></br>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={this.addToCart}
          >
            Add To cart
          </button>
        </div>
      </div>
    );
  }
}

export default ShoppingItem;
