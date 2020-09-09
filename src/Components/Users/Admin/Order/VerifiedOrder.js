import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import { url } from '../../../../constants/index';

export default class VerifiedOrder extends Component {
  state = {
    isLoaded: false,
    orders: [],
    isOrder: false,
  };

  componentDidMount() {
    const apiUrl = url + '/order?status=approved';
    const token = localStorage.getItem('token');

    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': token,
      },
    };

    return fetch(apiUrl, options)
      .then((res) => res.json())
      .then((result) => {
        if (!result.error) {
          this.setState({
            isLoaded: true,
            orders: result.data,
          });
        } else {
          alert('Error is Found');
        }
      });
  }

  orderInProgress = (orderId) => {
    const apiUrl = url + '/order/' + orderId;
    const token = localStorage.getItem('token');

    const data = {
      status: 'in-progress',
    };

    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'access-token': token,
      },
      body: JSON.stringify(data),
    };

    return fetch(apiUrl, options)
      .then((res) => res.json())
      .then((result) => {
        if (!result.error) {
          this.setState({
            approved: result.data,
          });
          toast.success('Order is updated successfully.');
        } else {
          alert('Error is Found');
        }
      });
  };

  OrderShow = () => {
    this.setState({
      isOrder: true,
    });
  };
  render() {
    if (this.state.isLoaded) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12">
              <h1 className="text-center p-1">Approved Orders</h1>
              <table className="table table-strip">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Table Details</th>
                    <th>Items Details</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state?.orders?.map((order) => (
                    <tr key={order._id}>
                      <td style={{ color: 'red' }}>
                        <b>{order?.status.toUpperCase()}</b>
                      </td>
                      <td>{order?.dateTime}</td>
                      <td>
                        <ul>
                          <li>
                            <b>Hall # </b> {order?.checkIn?.table?.hallNo}
                          </li>
                          <li>
                            <b>Table # </b> {order?.checkIn?.table?.tableNo}
                          </li>
                        </ul>
                      </td>
                      <td>
                        {order?.orderDetail?.map((items) => (
                          <ul key={items._id}>
                            <li>
                              <b>Name : </b>
                              {items?.item?.name}
                            </li>
                            <li>
                              <b>Quantity :</b> {items?.quantity}
                            </li>
                          </ul>
                        ))}
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-success btn-small"
                          onClick={() => this.orderInProgress(order._id)}
                        >
                          In Prograss
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Data is loading......</h1>
        </div>
      );
    }
  }
}
