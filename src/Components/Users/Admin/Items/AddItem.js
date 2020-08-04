import React from 'react';
import toFormData from '../utils/utils';
import './item.css';
import { addItems } from './action';
import { connect } from 'react-redux';
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      image: null,
      name: '',
      price: '',
      description: '',
      category: '',
      itemCat: [],
      isLoading: false,
    };

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.addItems(formData);
    this.setState(this.initialState);
  }

  async componentDidMount() {
    const apiUrl = 'http://localhost:3000/category';
    const token = localStorage.getItem('token');

    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': token,
      },
    };

    return await fetch(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: true,
            itemCat: result.data,
          });
        },
        (error) => {
          console.log('Error : ' + error);
        }
      );
  }

  render() {
    var { isLoading, itemCat } = this.state;
    return (
      <div className="Container row">
        <div className="offset-md-2 offset-sm-2 offset-lg-2 offset-xl-2 offset-2 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-8">
          <h2>Add Product</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Select image: </label>
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
                required
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Item Name"
              />
            </div>
            <div className="form-group">
              <br />
              <label>Price: </label>
              <input
                required
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
                required
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
                <option value="" disabled>
                  select category
                </option>
                {itemCat.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <button className="btn btn-outline-success" type="submit">
              <i class="fa fa-check">&nbsp; </i> Save
            </button>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
export default connect(null, { addItems })(AddItem);
