import React from "react";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
    };

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <div className="row">
      <div className="offset-md-2 offset-sm-2 offset-lg-2 offset-xl-2 offset-2 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-8">
        <h2 className="mt-2 mb-2">Add Category</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name : </label>
            <input
              required
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Category Name"
            />
          </div>
          <br />

          <button className="btn btn-outline-success" type="submit">
          <i class="fa fa-check">&nbsp; </i>  Save
          </button>
        </form>
      </div>
      </div>
    );
  }
}

export default AddCategory;
