import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { login } from "../../actions";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLoginButton = () => {
    const { email, password } = this.state;

    this.props.login ( email, password )
  }

  render() {
    const { email, password } = this.state;

    return (
      <form>
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
          />
          <Button onClick = {this.handleLoginButton}>Login</Button>
        </LoginWrapper>
      </form>
    );
  }
}

const mapDispathToProps = (dispath) => ({
  login: (email, password) => dispath (login(email, password))
})

export default connect
(
  null,
  mapDispathToProps
)
(LoginPage);
