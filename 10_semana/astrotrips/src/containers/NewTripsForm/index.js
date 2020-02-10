import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {createTrip} from "../../actions"
import SelectedPlanet from "../../components/selectedPlanet"

const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const Input = styled.input `
    margin: 10px;
`

const createTripForm = [
    {
        name: "name",
        type: "text",
        label: "Nome",
        required: true,
    },
    {
        name: "date", 
        type: "text",
        label: "Data",
        required: true,
        pattern: "(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
    },
    {
        name: "description", 
        type: "text",
        label: "Descrição",
        required: true,
    },
    {
        name: "durationInDays",
        type: "text",
        label: "Duração",
        required: true
    }
]

class CreateTripPage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            form: [],
            planet: "",
        };
    };

    handleInputOnChange = event => {
        const { name, value } = event.target;

        this.setState ({ form: { ...this.state.form, [name]: value }});
    }

    handleCreateTrip = event => {
        event.preventDefault();

        const {
            planet
        } = this.state

        const { 
            name, 
            date, 
            description, 
            durationInDays, 
        } = this.state.form

        this.props.createTrip ( 
            name, 
            date, 
            description,
            durationInDays, 
            planet
        )
    }

    handleSelectedPlanetOnChange = event => {
        const { value } = event.target;
        this.setState ({ planet: value });
    }

    render () {

        return (
            <FormWrapper>
                <form>
                    {createTripForm.map (input => (
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
                    <SelectedPlanet 
                        name = "planet" 
                        value = {this.state.planet} 
                        onChange = {this.handleSelectedPlanetOnChange}
                    />
                    <br/>
                    <Button onClick = {this.handleCreateTrip}> Enviar</Button>
                </form>
            </FormWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({

    createTrip: (

        name,
        date, 
        description, 
        durationInDays, 
        planet

    ) => dispatch(
            createTrip(
                name,
                date, 
                description, 
                durationInDays,     
                planet           
            )
        )
})

export default connect
(
    null,
    mapDispatchToProps
) (CreateTripPage);