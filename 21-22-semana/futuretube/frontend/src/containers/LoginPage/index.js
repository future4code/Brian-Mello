import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import { login } from "../../actions";
import {StyledTextField, StyledButtonForms, StyledWrapper} from "../../style/globalStyles";
import SelectDevice from '../../components/selectDevice'

const loginForm = [
    {
       name: 'email',
       type: 'email',
       label: 'E-mail: ',
       required: true,
       pattern: "[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}",
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        required: true,
        id: 'password'
    }
]

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            device: ""
        };
    }

    handleFieldChange = event => {
        const { name, value } = event.target
        
        this.setState({
            form: { ...this.state.form, [name]: value }
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault()

        const { device } = this.state
        const { email, password } = this.state.form;

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

    // tentativa de fazer um "olho mágico" para a senha
    
    // showPassword = () => {
    //     let tipo = document.getElementById("password");
    //     if(tipo.type="password"){
    //         tipo.type ==="text"
    //     } else {
    //         tipo.type === "password"
    //     }
    // }

  render() {
    const { goToSignupPage, goToFeedPage } = this.props;

    return (
      <Fragment>
          <StyledWrapper onSubmit={this.handleFormSubmit}>
            <h1>Log in</h1>
            {loginForm.map(input =>(
                <StyledTextField
                    key={input.name}
                    onChange={this.handleFieldChange}
                    name={input.name}
                    type={input.type}
                    label={input.label}
                    required={input.required}
                    pattern={input.pattern}
                    id={input.id}
                />
            ))}
            {/* <button  type="button" onClick={this.showPassword}>mostrar senha</button> */}
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