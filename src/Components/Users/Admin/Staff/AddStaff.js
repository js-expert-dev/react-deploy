import React, { Component } from 'react';
import { addStaffUser } from './Store/action';
import { connect } from 'react-redux';

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      password: '',
      email: '',
    };
    this.state = this.initialState;
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = this.state;
    const res = this.props.addStaffUser(formData);
    debugger;
    if (!res.error) {
      this.setState(this.initialState);
    }
  };

  render() {
    return (
      <div className="Container row">
        <div className="offset-md-2 offset-sm-2 offset-lg-2 offset-xl-2 offset-2 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-8">
          <h2>Add User</h2>
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
                placeholder="Staff User Name"
              />
            </div>
            <div className="form-group">
              <br />
              <label>Email : </label>
              <input
                required
                className="form-control"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <br />
              <label>Password : </label>
              <input
                required
                className="form-control"
                type="text"
                name="password"
                maxLength="14"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
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

export default connect(null, { addStaffUser })(AddStaff);
