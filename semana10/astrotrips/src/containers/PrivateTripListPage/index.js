import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTrips, getTripDetailAction } from "../../actions/index"
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


class PrivateTripListPage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        }
    }

    componentDidMount(dispatch){
        this.props.getTrips()
    }

    handleTripDetails = (tripId) => {
        // guardar tripId na store
        this.props.setTripId(tripId) 
        // enviar usuário para página de detalhes do usuário
        this.props.goToDetailsScreen()
    }

    render () {

        const { goToAdminScreen, goToHomeScreen } = this.props;
        
        return (
            <Container>
                <Header>
                    <LogoContainer>
                        <HomeButton onClick = {goToHomeScreen}><LogoImg src = {LogoTipo} /></HomeButton>
                    </LogoContainer>
                    <Menu>
                        <Button onClick = {goToAdminScreen}>back to Admin Page</Button>
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
                                <ButtonInscricao onClick = {() => this.handleTripDetails(trip.id)}>Details</ButtonInscricao>
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

const mapDispatchToProps = dispatch => ({

    goToAdminScreen: () => dispatch(push(routes.adminPage)),
    goToHomeScreen: () => dispatch(push(routes.root)),
    goToDetailsScreen: () => dispatch(push(routes.trip_details)),
    getTrips: () => dispatch(getTrips()),
    setTripId: (tripId) => dispatch(getTripDetailAction(tripId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivateTripListPage);