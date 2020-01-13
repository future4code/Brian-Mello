import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class HomePage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        }
    }

    render () {

        const { goToLoginScreen, goToTripsScreen, goToFormScreen } = this.props;

        return (
            <div>
                <button onClick = {goToLoginScreen}>Log-in</button>
                <button onClick = {goToTripsScreen}>Viagens</button>
                <button onClick = {goToFormScreen}>Formulário de inscrição</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      goToLoginScreen: () => dispatch(push(routes.login)),
      goToTripsScreen: () => dispatch(push(routes.trips_list)),
      goToFormScreen: () => dispatch(push(routes.form))
    };
  };

export default HomePage;