import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import styled from "styled-components";

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

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state;

    this.props.login ( email, password )
    this.setState({
      email: "",
      password:"",
    })
  }

  render() {
    const { email, password } = this.state;
    const { goToSignUpScreen } = this.props;

    return (
      <div>

      </div>
    );
  }
}

const mapDispathToProps = (dispath) => ({

})

export default connect
(
  null,
  mapDispathToProps
)
(LoginPage);