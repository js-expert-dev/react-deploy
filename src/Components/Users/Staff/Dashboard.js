import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    let { history } = this.props;
    return (
      <Container>
        <Row>
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
                  onClick={() => history.push('/staff/order')}
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
                  onClick={() => history.push('/staff/bill')}
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
