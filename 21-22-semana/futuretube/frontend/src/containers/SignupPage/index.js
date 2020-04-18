import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { StyledTextField, StyledButtonForms, StyledWrapper } from "../../style/globalStyles";
import { signup } from '../../actions/index'

const signupForm = [
    {
       name: 'name',
       type: 'text',
       label: 'Name: ',
       required: true,
       pattern: "[A-Za-z]"
    },
    {
        name: 'birthdate',
        type: 'text',
        label: 'BirthDate: ',
        required: true,
        pattern: "[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"
    },
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
        label: 'Password: ',
        required: true,
        pattern: "(?=^.{6,}$)((?=.*)|(?=.*+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    },
    {
        name: 'type',
        type: 'text',
        label: 'Type: ',
        required: true,
        pattern: "[A-Za-z]"
    },
    {
        name: 'photo',
        type: 'link',
        label: 'Photo: ',
        required: true,
    }
]

class SignupPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {}
        }
    }

    handleFieldChange = event => {
        const { name, value } = event.target
        this.setState({
          form: { ...this.state.form, [name]: value }
        });
    };

    handleOnSubmit = (event) =>{
        event.preventDefault();
        const { name, birthdate, email, password, type, photo } = this.state.form
        this.props.signup(name, birthdate, email, password, type, photo)
        this.setState({form: {}})
    }

    render(){

        const { goToFeedPage, goToLoginPage } = this.props

        return(
            <Fragment>
                <StyledWrapper onSubmit={this.handleOnSubmit}>
                    <h1>Cadastre-se</h1>
                    {signupForm.map(input =>(
                        <StyledTextField
                            key={input.name}
                            color='primary'
                            onChange={this.handleFieldChange}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            required={input.required}
                            pattern={input.pattern}
                        />
                    ))}
                    <StyledButtonForms type="submit"> Sign Up </StyledButtonForms>
                    <StyledButtonForms onClick={goToLoginPage}> Login </StyledButtonForms>
                    <StyledButtonForms onClick={goToFeedPage}> Voltar </StyledButtonForms>
                </StyledWrapper> 
            </Fragment>
        )
    }

}

const mapDispatchToProps = (dispatch) =>({
    goToFeedPage: () => dispatch(push(routes.home)),
    goToLoginPage: () => dispatch(push(routes.login)),
    signup: (name, birthdate, email, password, type, photo) => dispatch(signup(name, birthdate, email, password, type, photo))
})

export default connect(
    null, 
    mapDispatchToProps
    )(SignupPage);