import React, { Component } from 'react';
import { actionGetPaidBills } from './store/action';
import { connect } from 'react-redux';

class PaidBills extends Component {
  state = {
    search: '',
  };

  componentDidMount() {
    this.props.actionGetPaidBills();
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  }

  filterItems = () => {
    if (this.props?.paidBills?.length > 0) {
      return this.props.paidBills?.filter((item) => {
        return (
          item.amount.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        );
      });
    } else {
      return [];
    }
  };

  render() {
    let paidBill = this.filterItems();
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
          <br />
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search bill by amount here"
              value={this.state?.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
          <h1 style={{ textAlign: 'center' }}>Paid Bills</h1>
          <table className="table table-strip">
            <thead>
              <tr>
                <th>Status </th>
                <th>Payment Type </th>
                <th>CheckIn Code </th>
                <th>Table #</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {paidBill?.map((order) => (
                <tr key={order?.id}>
                  <td style={{ color: 'red' }}>
                    <b>{order?.status.toUpperCase()}</b>
                  </td>
                  <td>{order?.paymentType}</td>
                  <td>{order?.checkIn?.table?.checkInCode}</td>
                  <td>{order?.checkIn?.table?.tableNo}</td>
                  <td>{order?.amount} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ getPaidBillsReducer }) => {
  return {
    paidBills: getPaidBillsReducer.paidBills,
  };
};

export default connect(mapStateToProps, { actionGetPaidBills })(PaidBills);
