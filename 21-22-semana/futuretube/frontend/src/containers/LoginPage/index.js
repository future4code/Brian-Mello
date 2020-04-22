import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import { login } from "../../actions";
import {StyledTextField, StyledButtonForms, StyledWrapper, StyledVisibilityIcon, FormPasswordContainer, StyledVisibilityOffIcon} from "../../style/globalStyles";
import SelectDevice from '../../components/selectDevice';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            device: "",
            type: "password"
        };
    }

    handleFieldChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        const { device } = this.state
        const { email, password } = this.state;

        this.props.login( email, password, device )
        this.setState({
            email: "",
            password:"",
            device:""
        })
    }

    handleSelectDeviceOnChange = event => {
        const { value } = event.target;

        this.setState ({ device: value});
    }
    
    showPassword = () => {
        if(this.state.type ==="password"){
            this.setState({
                type: "text"
            })
        } else if( this.state.type === "text"){
            this.setState({
                type: "password"
                
            })
        }
    }

  render() {

    const { type, email, password } = this.state
    const { goToSignupPage, goToFeedPage } = this.props;

    let magicEye

    if(type === "password"){
        magicEye = (<StyledVisibilityIcon onClick={this.showPassword}/>)
    } else {
        magicEye = (<StyledVisibilityOffIcon onClick={this.showPassword}/>)
    }

    return (
      <Fragment>
          <StyledWrapper onSubmit={this.handleFormSubmit}>
            <h1>Log in</h1>
            <FormPasswordContainer>
                <StyledTextField
                color="primary"
                onChange={this.handleFieldChange}
                name="email"
                type="email"
                label="E-mail"
                required
                value={email}
                />
            </FormPasswordContainer>
            
            <FormPasswordContainer>
                <StyledTextField
                onChange={this.handleFieldChange}
                name="password"
                type={type}
                label="Password"
                required
                value={password}
                />
                {magicEye}
            </FormPasswordContainer>
            <SelectDevice
                name="device"
                value= {this.state.device}
                onChange={this.handleSelectDeviceOnChange}
            />
            <StyledButtonForms type="submit">Entrar</StyledButtonForms>
            <StyledButtonForms onClick={goToSignupPage}>Cadastro</StyledButtonForms>
            <StyledButtonForms onClick={goToFeedPage}>voltar</StyledButtonForms>
          </StyledWrapper>
      </Fragment>
    );
  }
}

const mapDispathToProps = (dispath) => ({
    goToFeedPage: () => dispath(push(routes.home)),
    goToSignupPage: () => dispath(push(routes.signup)),
    login: (email, password, device) => dispath (login(email, password, device))
})

export default connect
(
  null,
  mapDispathToProps
)
(LoginPage);