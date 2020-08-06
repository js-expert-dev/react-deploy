import React, { Component } from 'react';
import { toast } from 'react-toastify';

export default class StaffDetails extends Component {
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
  render() {
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
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.staff?.map((user) => (
                <tr key={user.id}>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.password} </td>
                  <td>
                    <button
                      className="btn btn-outline-info btn-small mr-1"
                      onClick={() =>
                        toast.success('User is updated successfully.')
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger btn-small"
                      onClick={() =>
                        toast.success('User is deleted successfully.')
                      }
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
