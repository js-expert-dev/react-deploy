import React, { Component, } from 'react';


import TableList from "./TableGetData";
import EditTable from "./EditTable";




const token = localStorage.getItem('token');

 class tableDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          response: {},
          product: {},
          isEditProduct: false,
          isAddCategory: false,
          isHomeShow: false,
          itemId: "",
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }
    
      onCreate() {
        this.setState({
          isAddCategory: true,
          isEditProduct: false,
          isHomeShow: false,
        });
      }
    
      onFormSubmit(data) {
        let apiUrl;
        let options;
        if (this.state.isEditProduct) {
          apiUrl = "http://localhost:3000/table/" + this.state.itemId;
          options = {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "access-token": token,
            },
            body: JSON.stringify(data),
          };
        } else {
          apiUrl = "http://localhost:3000/table";
          options = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "access-token": token,
            },
            body: JSON.stringify(data),
          };
        }
        fetch(apiUrl, options)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                response: result,
                isAddCategory: false,
                isEditProduct: false,
              });
            },
            (error) => {
              this.setState({ error: error });
            }
          );
      }
    
      editCategory = (categoryId) => {
        this.setState({ itemId: categoryId });
        const apiUrl = "http://localhost:3000/table/" + categoryId;
    
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
                isAddCategory: false,
                isEditProduct: true,
                isHomeShow: false,
              });
            },
            (error) => {
              this.setState({ error });
            }
          );
        console.log(categoryId);
      };
    
      homeShow() {
        this.setState({
          isAddItem: false,
          isEditProduct: false,
          isHomeShow: true,
        });
      }
    
      render() {
        return (
          <div className="">
            {this.state.response.status === "success" && (
              <div>
                <br />
                <p>{this.state.response.message}</p>
              </div>
            )}
            {!this.state.isAddCategory &&
              !this.state.isEditProduct &&
              !this.state.isHomeShow && (
                <TableList editCategory={this.editCategory} />
              )}
            {!this.state.isAddCategory &&
              this.state.isEditProduct &&
              !this.state.isHomeShow && (
                <EditTable
                  onFormSubmit={this.onFormSubmit}
                  product={this.state.product}
                />
              )}
            {this.state.error && <div>Error: {this.state.error.message}</div>}
          </div>
        );
      }
}
export default tableDetails;
