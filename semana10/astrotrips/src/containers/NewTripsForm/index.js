import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {createTrip, login} from "../../actions"

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class CreateTripPage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            name: "",
            date: "",
            description: "",
            durationDays: "",
            planet: "",
        };
    };
    
    handleFieldChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleApplyChange = () => {
        const { 
            name,
            date, 
            description, 
            durationDays, 
            planet

        } = this.state;
        
        this.props.createTrip ( 
            name,
            date, 
            description, 
            durationDays, 
            planet
        );

    };

    render () {
        const { 
            name,
            date, 
            description, 
            durationDays, 
            planet

        } = this.state;

        return (
            <form>
                <LoginWrapper>
                    <TextField
                        onChange = {this.handleFieldChange}
                        name = "name"
                        type = "text"
                        label = "Nome"
                        value = {name}
                    />
                    <TextField
                        onChange = {this.handleFieldChange}
                        name = "date"
                        type = "number"
                        label = "Data"
                        value = {date}
                    />
                    <TextField
                        onChange = {this.handleFieldChange}
                        name = "description"
                        type = "text"
                        label = "Descrição"
                        value = {description}
                    />
                    <TextField
                        onChange = {this.handleFieldChange}
                        name = "durationDays"
                        type = "text"
                        label = "Duração"
                        value = {durationDays}
                    />
                    <TextField
                        onChange = {this.handleFieldChange}
                        name = "planet"
                        type = "text"
                        label = "Planeta"
                        value = {planet}
                    />
                    <Button onClick = {this.handleApplyChange}>Criar</Button>
                </LoginWrapper>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({

    createTrip: (

        name, 
        date, 
        description, 
        durationDays, 
        planet

    ) => dispatch(
            createTrip(
                name, 
                date, 
                description, 
                durationDays, 
                planet                
            )
        )
})

export default connect
(
    null,
    mapDispatchToProps
) (CreateTripPage);