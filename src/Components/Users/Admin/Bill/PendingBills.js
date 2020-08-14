import React, { Component } from 'react';
import { actionGetPendingBills, updateBillStatus } from './store/action';
import { connect } from 'react-redux';

class PendingBills extends Component {
  state = {
    search: '',
  };

  componentDidMount() {
    this.props.actionGetPendingBills();
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  }

  filterItems = () => {
    if (this.props?.pendingBills?.length > 0) {
      return this.props.pendingBills?.filter((item) => {
        return (
          item.amount.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        );
      });
    } else {
      return [];
    }
  };

  updateBill = (id) => {
    const data = {
      status: 'paid',
    };
    debugger;
    this.props.updateBillStatus(id, data);
  };

  render() {
    let pendingBill = this.filterItems();
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
          <br />
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search bill by amount here"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
          <h1 style={{ textAlign: 'center' }}>Pending Bills</h1>
          <table className="table table-strip">
            <thead>
              <tr>
                <th>Status </th>
                <th>Payment Type </th>
                <th>CheckIn Code </th>
                <th>Table #</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingBill?.map((order) => (
                <tr key={order.id}>
                  <td style={{ color: 'red' }}>
                    <b>{order?.status.toUpperCase()}</b>
                  </td>
                  <td>{order?.paymentType}</td>
                  <td>{order?.checkIn?.table?.checkInCode}</td>
                  <td>{order?.checkIn?.table?.tableNo}</td>
                  <td>{order?.amount} </td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => this.updateBill(order._id)}
                    >
                      Paid
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
const mapStateToProps = ({ getPendingBillsReducer }) => {
  return {
    pendingBills: getPendingBillsReducer.pendingBills,
  };
};

export default connect(mapStateToProps, {
  actionGetPendingBills,
  updateBillStatus,
})(PendingBills);
