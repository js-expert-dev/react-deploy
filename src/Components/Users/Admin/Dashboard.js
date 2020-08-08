import React, { Component } from 'react';
import './Dashboard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dashboard extends Component {
  render() {
    let { history } = this.props;
    return (
      <Container>
        <Row>
          <Col md={4}>
            <div className="dbox dbox--color-1">
              <div className="dbox__icon">
                <i className="fas fa-users" />
              </div>
              <div className="dbox__body">
                <span className="dbox__count">50</span>
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
                <span className="dbox__count">100</span>
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
                <span className="dbox__count">5</span>
                <span className="dbox__title">Total Bills</span>
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

export default Dashboard;
