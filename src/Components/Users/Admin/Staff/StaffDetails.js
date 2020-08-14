import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { actionGetStaffUser, actionDeleteStaffUser } from './Store/action';
import { connect } from 'react-redux';

class StaffDetails extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      staff: [
        {
          id: 1,
          name: 'test',
          email: 'test@test.com',
          password: 'password',
        },
      ],
    };

    this.state = this.initialState;
  }

  componentDidMount() {
    const res = this.props.actionGetStaffUser();
  }

  editUser = (user) => {
    this.props.history.push(this.props.match.url + '/edit', user);
  };
  deleteUser = async (id) => {
    const res = await this.props.actionDeleteStaffUser(id);

    toast.success('User is deleted successfully.');
  };

  render() {
    const { staffUser } = this.props;
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
          <br />
          {/* <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search Item here"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div> */}

          <h1 style={{ textAlign: 'center' }}>Staff Details</h1>

          <table className="table table-strip">
            <thead>
              <tr>
                <th>Admin</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffUser?.map((user) => (
                <tr key={user.id}>
                  <td>{user.isAdmin ? 'Admin' : 'Staff'}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    <button
                      className="btn btn-outline-info btn-small mr-1"
                      onClick={() => this.editUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger btn-small"
                      onClick={() => this.deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ getStaffUsersReducer }) => {
  return {
    staffUser: getStaffUsersReducer.staffUser,
  };
};
export default connect(mapStateToProps, {
  actionGetStaffUser,
  actionDeleteStaffUser,
})(StaffDetails);
