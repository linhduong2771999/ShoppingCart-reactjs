import React, { Component } from "react";
import Products from "../../Data";
import ShoppingItem from "../Models/ShoppingItem";
import CartItem from "../Models/CartItem";
import ModalPopup from "../Models/ModalPopup";
import Filter from "../Models/Filter";
import Search from "../Models/Search";
const uuidv4 = require("uuid/v4");

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:
        (localStorage.getItem("products") &&
          JSON.parse(localStorage.getItem("products"))) ||
        [],

      productsShopping: Products,
      filterProducts: [],
      size: "",
      search: "",
      name: "",
      totalPrice: 0
    };
  }

  getData() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        filterProducts: Products
      });
    }, 1);
  }

  componentDidMount = () => {
    this.getData();
  };

  // add products to cart item
  addToProducts = products => {
    products.id = uuidv4();
    let productsArr = [...this.state.products, products];
    this.setState({
      products: productsArr
    });

    localStorage.setItem("products", JSON.stringify(productsArr));
  };

  // delete products with id

  deleteProducts = id => {
    const items = this.state.products.filter(item => item.id !== id);
    this.setState({ products: items });
    localStorage.setItem("products", JSON.stringify(items));
  };

  // handle size, name, search
  handleChangeSize = size => {
    this.setState({
      size: size.target.value
    });
  };

  handleChangeName = name => {
    this.setState(
      {
        name: name.target.value
      },
      () => {
        this.filterName();
      }
    );
  };

  handleChangeSearch = search => {
    this.setState(
      {
        search: search.target.value
      },
      () => {
        this.searchItems();
      }
    );
  };

  // search items
  searchItems = () => {
    if (this.state.search === "") {
      this.setState({
        filterProducts: this.state.productsShopping
      });
    } else {
      let searchItems = this.state.productsShopping.filter(items => {
        return (
          items.kind.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        );
      });
      this.setState({
        filterProducts: searchItems
      });
    }
  };
  // filter by name
  filterName = () => {
    if (parseInt(this.state.name, 10) === -1) {
      this.setState({
        filterProducts: this.state.productsShopping
      });
    } else {
      let searchItems = this.state.productsShopping.filter(items => {
        return (
          items.kind.toLowerCase().indexOf(this.state.name.toLowerCase()) !== -1
        );
      });
      this.setState({
        filterProducts: searchItems
      });
    }
  };

  // total price

  totalPrice = (price) => {
    this.setState({
      totalPrice: this.state.totalPrice + price
    })
  }
  newTotalPrice = (price) => {
    this.setState({
      totalPrice: this.state.totalPrice - price
    })
  }
  render() {
    
    // filter items
    let filterItems = this.state.filterProducts.filter(items => {
      if (items.size === this.state.size) {
        return items;
      } else if (parseInt(this.state.size, 10) === -1) {
        return this.state.productsShopping;
      } else if (this.state.size === "") {
        return items;
      }
    });

    // render products for shopping item

    let renderProducts = filterItems.map((products, index) => {
      return (
        <ShoppingItem
          key={index}
          products={products}
          addToProducts={this.addToProducts}
          totalPrice={this.totalPrice}
        />
      );
    });

    //render products for cart item
    let renderProductsCart = this.state.products.map((products, index) => {
      return (
        <CartItem
          key={index}
          products={products}
          deleteProducts={this.deleteProducts}
          totalPrice={this.state.totalPrice}
          newTotalPrice={this.newTotalPrice}
        />
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 ">
            <h1 className="display-5 mt-4 text-left">
              Shopping here <kbd>Enjoy</kbd>
            </h1>
            <hr></hr>
            {/*Filter option*/}
            <div className="row">
              <h3 className="col-md-4 text-left">Here some products: </h3>
              <Search
                searchProducts={this.searchProducts}
                handleChangeSearch={this.handleChangeSearch}
                search={this.state.search}
              />
              <Filter
                handleChangeSize={this.handleChangeSize}
                size={this.state.size}
                handleChangeName={this.handleChangeName}
                name={this.state.name}
              />
            </div>

            {/*Shopping  Item*/}
            {renderProducts}
          </div>
          {/*Your cart item*/}
          <div className="col-md-4  border border-bottom-0 border-info ">
            <div style={{ position: "fixed" }}>
              <div
                className="container"
                style={{ height: "700px", overflow: "auto" }}
              >
                <div className="mt-4 text-left" id="title">
                  <h3 >Your carts: {this.state.products.length }</h3>
                  <h3 >Total price: {this.state.totalPrice}</h3>
                </div>
                {renderProductsCart}
              </div>
            </div>
          </div>
          {/*Modal popup*/}
          <ModalPopup />
        </div>
      </div>
    );
  }
}

export default Shopping;
