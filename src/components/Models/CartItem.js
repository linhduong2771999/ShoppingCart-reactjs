import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.totalPrice
    };
  }
  confirmID = id => {
    this.setState(
      {
        price: this.props.products.price 
      },
      () => {
        this.props.deleteProducts(id);
        this.props.newTotalPrice(this.state.price);
      }
    );
  };

  render() {
    let { products } = this.props;
    return (
      <div>
        <hr></hr>

        <div className="row" id="item">
          <div className="col-md-4">
            <img src={`${products.img}`} width="100%" alt="products" />
          </div>
          <div className="col-md-6 text-center">
            <h5>{products.name}</h5>
            <span>{products.size} </span>
            <p id="quantify">Quantify: {products.quantify}</p>
            <span id="price">
              <strong>Price:</strong> {products.price}
            </span>
          </div>
          <div className="col-md-2">
            <div className="button-group">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.confirmID(products.id)}
              >
                X
              </button>
              <button
                type="button"
                className="btn btn-primary mt-1"
                data-toggle="modal"
                data-target="#myModal"
              >
                <i className="fa fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
