import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTrips } from "../../actions/index"
import styled from "styled-components"
import LogoTipo from "../../images/LogoTipo.png"
import back from "../../images/back.jpg"

// Estilização
const Container = styled.div `
    width: 100%;
    height: 534px;
`

const Header = styled.header `
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`

const LogoContainer = styled.div `
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const LogoImg = styled.img `
    width: 150px;
    height: 100%;
    margin-left: 20px;
`

const Menu = styled.div `
    width: 20%;
    min-width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const LoginContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TripsContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button `
    width: auto;
    height: 25px;
    color: black;
    background-color: #ffffff;
    outline: 0;
    border: 0;
    font-size: 20px;
    font-weight: bolder;
    :hover {
        border-bottom: 1px solid black;
        cursor: pointer;
    }
`

const Main = styled.main `
    width: 100%;
    min-height: 80%;
    background-color: #e0e7e8;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

const ButtonInscricao = styled.button `
    width: 100px;
    height: 40px;
    color: black;
    background-color: white;
    outline: 0;
    border: 0;
    box-shadow: 0px 0px 5px white;
    border-radius: 5px;
    margin-top: 20px;
    :hover {
        box-shadow: 0px 0px 10px white;
        cursor: pointer;
    }
`

const CardHeader = styled.header `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardMain = styled.main `
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-rows: 1fr 20px 50px 10px;
    align-content: center;
    justify-items: center;
    text-align: center;
`

const CardFooter = styled.footer `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = styled.footer `
    width: 100%;
    height: 150px;
    background-color: #aeb5b6;
`

const HomeButton = styled.button `
    width: auto;
    height: auto;
    background-color: #ffffff;
    outline: 0;
    border: 0;
    :hover {
        cursor: pointer;
        opacity: 50%;
    }
`

const TripCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 310px;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
    background-image: url(${back});
    margin: 10px;
`

const P = styled.p `
    height: 10px;
    margin: 0;
    padding: 0;
`


class TripList extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        }
    }

    componentDidMount(dispatch){
        this.props.getTrips()
    }

    render () {

        const { goToLoginScreen, goToTripsScreen, goToFormScreen, goToHomeScreen } = this.props;
        
        return (
            <Container>
                <Header>
                    <LogoContainer>
                        <HomeButton onClick = {goToHomeScreen}><LogoImg src = {LogoTipo} /></HomeButton>
                    </LogoContainer>
                    <Menu>
                        <LoginContainer>
                            <Button onClick = {goToLoginScreen}>Log-in</Button>
                        </LoginContainer>
                        <TripsContainer>
                            <Button onClick = {goToTripsScreen}>Viagens</Button>
                        </TripsContainer>
                    </Menu>
                </Header>
                <Main>
                    {this.props.trips.map((trip) => 
                        <TripCard>
                            <CardHeader>
                                <h4>{trip.name}</h4>
                            </CardHeader>
                            <CardMain>
                                <P>{trip.description}</P>
                                <P>{trip.planet}</P>
                                <P>{trip.date}</P>
                                <P>days: {trip.durationInDays}</P>
                            </CardMain>
                            <CardFooter>
                                <ButtonInscricao onClick = {goToFormScreen}>Inscrever-se</ButtonInscricao>
                            </CardFooter>
                        </TripCard>
                    )} 
                </Main>
                <Footer>
                            
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    trips: state.trips.allTrips
})

const mapDispatchToProps = dispatch => {
    return {
        goToLoginScreen: () => dispatch(push(routes.login)),
        goToTripsScreen: () => dispatch(push(routes.trip_list)),
        goToFormScreen: () => dispatch(push(routes.form)),
        goToHomeScreen: () => dispatch(push(routes.root)),
        getTrips: () => dispatch(getTrips())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripList);