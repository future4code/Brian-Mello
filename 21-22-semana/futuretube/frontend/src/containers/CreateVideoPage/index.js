import React from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { StyledWrapper, StyledTextField, StyledButtonForms } from '../../style/globalStyles'
import { createVideo } from '../../actions/index';

const createVideoForm = [
    {
        name: "title",
        type: "text",
        label: "Título: ",
        required: true,
        pattern: "[a-zA-Z0-9]+"
    },
    {
        name: "link",
        type: "text",
        label: "Id Youtube Link: ",
        required: true,
    },
    {
        name: "description",
        type: "text",
        label: "Descrição: ",
        required: true,
        pattern: "[A-Za-z]"
    },
    {
        name: "photo",
        type: "text",
        label: "Foto: ",
        required: true
    }
]

export class CreateVideoPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            form: {}
        }
    }

    componentDidMount() {
        const accessToken = window.localStorage.getItem("accessToken")
        if(accessToken === null){
          this.props.goToFeedPage()
        }
    };

    handleFieldChange = event => {
        const { name, value } = event.target
        
        this.setState({
          form: { ...this.state.form, [name]: value }
        });
    };

    handleOnSubmit = (event) =>{
        event.preventDefault();
        const { title, link, description, photo } = this.state.form
        this.props.createVideo(title, link, description, photo)
        this.setState({form: {}})
    }

    render(){

        const { goToFeedPage } = this.props

        return(
            <StyledWrapper onSubmit={this.handleOnSubmit}>
                <h1>Create Video</h1>
                {createVideoForm.map( input => (
                    <StyledTextField
                        key={input.name}
                        onChange={this.handleFieldChange}
                        name={input.name}
                        type={input.type}
                        label={input.label}
                        required={input.required}
                        pattern={input.pattern}
                    />
                ))}
                <StyledButtonForms type="submit">Create Video</StyledButtonForms>
                <StyledButtonForms onClick={goToFeedPage}>Voltar</StyledButtonForms>
            </StyledWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    goToFeedPage: () => dispatch(push(routes.home)),
    createVideo: (title, link, description, photo) => dispatch(createVideo(title, link, description, photo))
})

export default connect(
    null,
    mapDispatchToProps
)(CreateVideoPage);