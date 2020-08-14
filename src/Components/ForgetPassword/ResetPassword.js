import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      conPassword: '',
    };
  }
  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitHandler = () => {
    toast.success('password is reset successfully.');
  };

  render() {
    const { newPassword, conPassword } = this.state;
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="align-self-center">
            <h3 className="text-center font-weight-bold mt-5">
              Reset Password
            </h3>
            <Card className="pt-3 pb-3">
              <form className="mx-5" onSubmit={this.submitHandler}>
                <div className="form-group">
                  <label>New Password </label>
                  <input
                    className="form-control"
                    placeholder="new password"
                    type="password"
                    name="newPasword"
                    onChange={this.inputHandler}
                    value={newPassword}
                  />
                </div>
                <div className="form-group">
                  <label>Confrirm Password</label>
                  <input
                    className="form-control"
                    placeholder="confirm password"
                    name="ConfirmPassword"
                    onChange={this.inputHandler}
                    type="password"
                    value={conPassword}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
