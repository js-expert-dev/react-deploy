import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  Card,
  Container,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { toast } from 'react-toastify';

export default class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      email: '',
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    this.setState({ validated: true });
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    const data = {
      email: this.state.email,
    };
    delete data.validated;

    toast.success('Email is sent to you successfully.', {
      position: toast.POSITION.TOP_CENTER,
    });
    this.props.history.goBack();

    // this.props.actionForgetPassword(data);
  };

  render() {
    const { email, validated } = this.state;
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="align-self-center">
            <h1 className="text-center font-weight-bold mt-5">
              Smart Ordering
            </h1>
            <Card>
              <h3 className="text-center mt-5 mb-3">Forget Password</h3>
              <Form
                className="mx-5"
                noValidate
                validated={validated}
                onSubmit={this.handleSubmit}
              >
                <Form.Group>
                  <InputGroup>
                    <FormControl
                      value={email}
                      onChange={this.handleChange}
                      name="email"
                      placeholder="Please Enter Email"
                      aria-label="Username or Email"
                      aria-describedby="username-addon"
                      required
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="username-addon">
                        <i className="fas fa-user" />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Button variant="primary" block type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
