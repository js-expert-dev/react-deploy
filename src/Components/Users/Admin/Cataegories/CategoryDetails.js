import React from 'react';
import CategoryList from './CatagoryGetData';
import EditCategory from './EditCategory';
import { toast } from 'react-toastify';

const token = localStorage.getItem('token');

export default class CategoryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      response: {},
      product: {},
      isEditProduct: false,
      isAddCategory: false,
      isHomeShow: false,
      itemId: '',
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
      apiUrl = 'http://localhost:3000/category/' + this.state.itemId;
      options = {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'access-token': token,
        },
        body: JSON.stringify(data),
      };
    } else {
      apiUrl = 'http://localhost:3000/category';
      options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'access-token': token,
        },
        body: JSON.stringify(data),
      };
    }
    fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          toast.success('Category is updated successfully.');
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
    const apiUrl = 'http://localhost:3000/category/' + categoryId;

    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': token,
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
        {this.state.response.status === 'success' && (
          <div>
            <br />
            <p>{this.state.response.message}</p>
          </div>
        )}
        {!this.state.isAddCategory &&
          !this.state.isEditProduct &&
          !this.state.isHomeShow && (
            <CategoryList editCategory={this.editCategory} />
          )}
        {!this.state.isAddCategory &&
          this.state.isEditProduct &&
          !this.state.isHomeShow && (
            <EditCategory
              onFormSubmit={this.onFormSubmit}
              product={this.state.product}
            />
          )}
        {this.state.error && <div>Error: {this.state.error.message}</div>}
      </div>
    );
  }
}
