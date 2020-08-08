import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStaffUser } from './Store/action';
class EditStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      password: '',
      email: '',
      isAdmin: '',
    };
  }

  componentDidMount() {
    const { state } = this.props.location;
    debugger;
    this.setState({
      id: state._id,
      name: state.name,
      password: state.password,
      email: state.email,
      isAdmin: state.isAdmin,
    });
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
    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      isAdmin: this.state.isAdmin,
    };
    const res = this.props.updateStaffUser(this.state.id, formData);
    debugger;
    const { history } = this.props;
    if (!res.error) {
      this.setState(this.initialState);
      this.props.history.goBack();
    }
  };

  render() {
    const { name, email, password, isAdmin } = this.state;
    debugger;
    return (
      <div className="Container row">
        <div className="offset-md-2 offset-sm-2 offset-lg-2 offset-xl-2 offset-2 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-8">
          <h2>Edit User</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="checkbox"
              name="isAdmin"
              value={isAdmin}
              onChange={this.handleChange}
              checked={this.state?.isAdmin}
            />
            <label>&nbsp; Admin </label>
            <div className="form-group">
              <label>Name : </label>
              <input
                required
                className="form-control"
                type="text"
                name="name"
                value={name}
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
                value={email}
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
                type="password"
                name="password"
                maxLength="14"
                value={password}
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

export default connect(null, { updateStaffUser })(EditStaff);
