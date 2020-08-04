import React, { Component } from 'react';
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import './Login.css';
import { login } from './action';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn.loggedIn && newProps.user.user) {
      debugger;
      if (newProps.user.user.isAdmin) {
        this.props.history.push('/admin');
      } else {
        this.props.history.push('/staff');
      }
    }
  }
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
      password: this.state.password,
    };
    delete data.validated;

    this.props.login(data);
  };

  render() {
    const { validated, email, password } = this.state;

    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="align-self-center">
            <h1 className="text-center font-weight-bold mt-5">
              Smart Ordering
            </h1>
            <Card>
              <small className="text-center mt-5 mb-3">Sign In</small>
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
                      placeholder="Email Username"
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
                <Form.Group>
                  <InputGroup>
                    <FormControl
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                      required
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="password-addon">
                        <i className="fas fa-lock" />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Button variant="primary" block type="submit">
                    Login
                  </Button>
                  <small className="text-info">ForgotPassword?</small>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps, { login })(Login);
