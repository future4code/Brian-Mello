import React from 'react';
import styled from 'styled-components';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import SelectCountry from '../../components/SelectCountry';
import {applyToTrip} from '../../actions'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Estilização 

const FormWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const Input = styled.input `
    margin: 10px;
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
        name: "name",
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
            country: "",
        };
    };

    handleInputOnChange = event => {
        const { name, value } = event.target;

        this.setState ({ form: { ...this.state.form, [name]: value }});
    }

    handleApplyTrip = event => {
        event.preventDefault();
        
        const {
            country
        } = this.state

        const { 
            name, 
            age, 
            applicationText, 
            profession, 
            tripId 
        } = this.state.form

        this.props.applyToTrip ( 
            name, 
            age, 
            applicationText,
            profession, 
            country, 
            tripId
        )
    }
    
    handleSelectedCountryOnChange = event => {
        const { value } = event.target;
        this.setState ({ country: value });
    }

    render () {
        return (
            <form>
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
                <SelectCountry 
                    name = "country" 
                    value = {this.state.country} 
                    onChange = {this.handleSelectedCountryOnChange}
                />
                <br/>
                <select 
                    name = "tripId" 
                    value = {this.state.form.tripId} 
                    onChange = {this.handleInputOnChange}
                    required
                >
                    {this.props.trips.map ((trip) => 
                        <option value = {trip.id}>{trip.name}</option>
                    )}
                </select>
                <br/>
                <Button onClick = {this.handleApplyTrip}>Enviar</Button>
            </form>
        )
    }

}

const mapStateToProps = state => ({
    trips: state.trips.allTrips
})

const mapDispatchToProps = (dispatch) => ({
    applyToTrip: (
        name, 
        age, 
        applicationText, 
        profession, 
        country, 
        tripId
        ) => dispatch(applyToTrip(
            name, 
            age, 
            applicationText, 
            profession, 
            country, 
            tripId))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Form);