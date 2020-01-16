import React from 'react';
import styled from 'styled-components';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import SelectCountry from '../../components/SelectCountry';
import {applyToTrip} from '../../actions'

// Estilização 

const Input = styled.input `
    margin-top: 10px;
`
const Main = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const applyForm = [
    {
        name: "username",
        type: "text",
        label: "Nome",
        required: true,
        
    },
    {
        name: "age", 
        type: "number",
        label: "Idade",
        required: true,
        minValue: 18
    },
    {
        name: "applicationText", 
        type: "text",
        label: "Motivo da Aplicação",
        required: true
    },
    {
        name: "profession",
        type: "text",
        label: "Profissão",
        required: true
    }
]
class Form extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            form: {},
            selectedCountry: "",
        };
    };

    handleInputOnChange = e => {
        const { name, value } = e.target;

        this.setState ({ form: { ...this.state.form, [name]: value }});
    }

    handleOnSubmit = event => {
        event.preventDefault();
        window.alert ("Aplicação enviada com sucesso")
        console.log(this.state)
    }

    handleSelectedCountryOnChange = event => {
        const { value } = event.target;
        this.setState ({ selectedCountry: value });
    }

    render () {
        return (
            <div>
                <form onSubmit = {this.handleOnSubmit}>
                    {applyForm.map (input => (
                        <div key = {input.name}>
                            <label htmlFor = {input.name}>{input.label}</label>
                            <Input
                                id = {input.id}
                                name = {input.name}
                                type = {input.type}
                                value = {this.state.form[input.name] || ""}
                                required = {input.required}
                                onChange = {this.handleInputOnChange}
                                pattern = {input.pattern}
                            />
                        </div>
                    ))}
                    <SelectCountry value = {this.state.selectedCountry} onChange = {this.handleSelectedCountryOnChange}/>
                    <button type = "submit">Enviar</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    // applyToTrip: (name, age, applicationText, profession, country) => dispatch(applyToTrip(name, age, applicationText, profession, country))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Form);