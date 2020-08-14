import React, { Component } from 'react';
import './Dashboard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { actionGetStaffUser } from './Staff/Store/action';
import { actionGetPendingBills } from './Bill/store/action';

class Dashboard extends Component {
  async componentDidMount() {
    await this.props.actionGetStaffUser();
    await this.props.actionGetPendingBills();
  }

  render() {
    let { history, staffUser, pendingBills } = this.props;
    return (
      <Container>
        <Row>
          <Col md={4}>
            <div className="dbox dbox--color-1">
              <div className="dbox__icon">
                <i className="fas fa-users" />
              </div>
              <div className="dbox__body">
                <span className="dbox__count">
                  {staffUser.length.toString()}
                </span>
                <span className="dbox__title">Total Users</span>
              </div>

              <div className="dbox__action">
                <button
                  className="dbox__action__btn"
                  onClick={() => history.push('/admin/user')}
                >
                  MoreInfo
                </button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="dbox dbox--color-2">
              <div className="dbox__icon">
                <i className="far fa-bell" />
              </div>
              <div className="dbox__body">
                <span className="dbox__count">52</span>
                <span className="dbox__title">Total Orders</span>
              </div>

              <div className="dbox__action">
                <button
                  className="dbox__action__btn"
                  onClick={() => history.push('/admin/orders')}
                >
                  MoreInfo
                </button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="dbox dbox--color-3">
              <div className="dbox__icon">
                <i className="far fa-object-group" />
              </div>
              <div className="dbox__body">
                <span className="dbox__count">
                  {pendingBills.length.toString()}
                </span>
                <span className="dbox__title">Total Pending Bills</span>
              </div>
              <div className="dbox__action">
                <button
                  className="dbox__action__btn"
                  onClick={() => history.push('/admin/bills')}
                >
                  MoreInfo
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ getStaffUsersReducer, getPendingBillsReducer }) => {
  return {
    staffUser: getStaffUsersReducer.staffUser,
    pendingBills: getPendingBillsReducer.pendingBills,
  };
};

export default connect(mapStateToProps, {
  actionGetStaffUser,
  actionGetPendingBills,
})(Dashboard);
