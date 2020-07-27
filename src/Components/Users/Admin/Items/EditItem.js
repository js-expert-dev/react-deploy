import React from "react";
import toFormData from "../utils/utils";
// import { getToken } from "../utils/common";

const token =localStorage.getItem('token');

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      image: "",
      name: "",
      price: "",
      description: "",
      category: "",
      itemCate: [],
      isLoading: false,
      _id: "",
    };
    if (props.product) {
      this.state = props.product;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleImageChange(event) {
    this.setState({ image: event.target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = toFormData(this.state);
    this.props.onFormSubmit(formData, this.state._id);
    this.setState(this.initialState);
  }

  componentDidMount() {
    const apiUrl = "http://localhost:3000/category";

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
            isLoading: true,
            itemCate: result.data,
          });
        },
        (error) => {
          console.log("Error : " + error);
        }
      );
  }
  render() {
    let pageTitle;
    if (this.state._id) {
      pageTitle = <h2>Edit Item</h2>;
    } else {
      pageTitle = <h2>Item is not Editing</h2>;
    }

    var { isLoading, itemCate } = this.state;

    if (!isLoading) {
      return <div>Add item is loading.....</div>;
    } else {
      return (
        <div className="Container row">
          <div className="offset-md-2 offset-sm-2 offset-lg-2 offset-xl-2 offset-2 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-8">
            {pageTitle}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Image: </label>
                <input
                  className="form-control"
                  type="file"
                  name="image"
                  onChange={this.handleImageChange}
                />
              </div>
              <div className="form-group">
                <label>Name : </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Item Name"
                />
              </div>
              <div className="form-group">
                <label>Price: </label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                  placeholder="Price"
                />
              </div>
              <div className="form-group">
                <label>Description : </label>
                <textarea
                  className="form-control"
                  rows="5"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  placeholder="Write the details description of item here"
                />
              </div>
              <div className="form-group">
                <label>Category : </label>
                <select
                  className="form-control"
                  value={this.state.category}
                  onChange={(e) => this.setState({ category: e.target.value })}
                >
                  {itemCate.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <input type="hidden" name="_id" value={this.state._id} />

              <button
                className="btn btn-outline-block btn-success"
                type="submit"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default EditItem;
