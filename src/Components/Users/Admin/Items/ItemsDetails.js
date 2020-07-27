import React from "react";
import ItemList from "./ItemGetData";
import EditItem from "./EditItem";

const axios = require("axios").default;
const API_URL = "http://localhost:3000";
const token = localStorage.getItem('token');

export default class itemsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddItem: false,
      isEditProduct: false,
      home: false,
      error: null,
      response: {},
      product: {},
      itemId: "",
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({
      isAddItem: true,
      isEditProduct: false,
      home: false,
    });
  }

  onFormSubmit(data, itemId = null) {



    if (this.state.isEditProduct) {
      const config = {
        method: 'PUT',
        url: API_URL + "/item/" + itemId,
        headers: { 'access-token': token },
        data: data
    }

      axios(config)
        .then((result) => {
          this.setState({
            isAddItem: false,
            isEditProduct: false,
            home: false,
          });
        });
    } else {

      const config = {
        method: 'POST',
        url: API_URL + "/item",
        headers: { 'access-token': token },
        data: data
    }
      axios(config)
        .then((result) => {
          this.setState({
            isAddItem: false,
            isEditProduct: false,
            home: false,
          });
        });
    }
  }

  editItem = (itemid) => {
    this.setState({ itemId: itemid });
    const apiUrl = "http://localhost:3000/item/" + itemid;

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "access-token": token,
      },
    };

    fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            product: result.data,
            isAddItem: false,
            isEditProduct: true,
            home: false,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
    console.log(itemid);
  };
  homeShow() {
    this.setState({
      isAddItem: false,
      isEditProduct: false,
      home: true,
    });
  }

  render() {
    return (
      <div className="Container">
        {/* {!this.state.isAddItem &&
          !this.state.isEditProduct &&
          !this.state.home && (
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => this.homeShow()}
                >
                  <i className="fa fa-arrow-left"></i>&nbsp;Back
                </button>
              </div>
              <div className="offset-md-4 offset-sm-4 offset-lg-4 offset-xl-4 offset-4 col-md-2 col-lg-2 col-sm-2 col-xl-2 col-2">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => this.onCreate()}
                >
                  Add Product
                </button>
              </div>
            </div>
          )} */}
        {this.state.response.status === "success" && (
          <div>
            <br />
            <p>{this.state.response.message}</p>
          </div>
        )}
        {!this.state.isAddItem &&
          !this.state.isEditProduct &&
          !this.state.home && <ItemList editItem={this.editItem} />}
        {!this.state.isAddItem &&
          this.state.isEditProduct &&
          !this.state.home && (
            <EditItem
              onFormSubmit={this.onFormSubmit}
              product={this.state.product}
            />
          )}
        {/* {this.state.home &&
          !this.state.isAddItem &&
          !this.state.isEditProduct && <Home />} */}
        {/* {this.state.isAddItem &&
          !this.state.isEditProduct &&
          !this.state.home && <AddItem onFormSubmit={this.onFormSubmit} />} */}
        {this.state.error && <div>Error: {this.state.error.message}</div>}
      </div>
    );
  }
}
