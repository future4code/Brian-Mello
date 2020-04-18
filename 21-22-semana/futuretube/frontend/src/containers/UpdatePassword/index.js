import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { StyledTextField, StyledButtonForms, StyledWrapper } from "../../style/globalStyles";
import { updatePassword } from '../../actions/index'

const updatePasswordForm = [

    {
        name: 'oldPassword',
        type: 'text',
        label: 'Old Password: ',
        required: true,
        pattern: "(?=^.{6,}$)((?=.*)|(?=.*+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    },
    {
        name: 'newPassword',
        type: 'text',
        label: 'New Password: ',
        required: true,
        pattern: "(?=^.{6,}$)((?=.*)|(?=.*+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    }
]

class UpdatePasswordPage extends React.Component{
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
        const { oldPassword, newPassword } = this.state.form
        this.props.updatePassword(oldPassword, newPassword)
        this.setState({form: {}})
    }

    render(){

        const { goToProfilePage } = this.props

        return(
            <Fragment>
                <StyledWrapper onSubmit={this.handleOnSubmit}>
                    <h1>Update Password</h1>
                    {updatePasswordForm.map(input =>(
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
                    <StyledButtonForms type="submit"> Update </StyledButtonForms>
                    <StyledButtonForms onClick={goToProfilePage}> Voltar </StyledButtonForms>
                </StyledWrapper> 
            </Fragment>
        )
    }

}

const mapDispatchToProps = (dispatch) =>({
    goToProfilePage: () => dispatch(push(routes.profile)),
    updatePassword: (oldPassword, newPassword) => dispatch(updatePassword(oldPassword, newPassword))
})

export default connect(
    null, 
    mapDispatchToProps
)(UpdatePasswordPage);