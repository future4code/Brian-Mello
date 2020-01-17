import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTrips, getTripDetail } from "../../actions/index"
import styled from 'styled-components';
import back from '../../images/back.jpg'
import LogoTipo from '../../images/LogoTipo.png'

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
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardMain = styled.main `
    width: 100%;
    min-height: 200px;
    display: grid;
    grid-template-rows: 40px 40px 40px 40px;
    align-content: center;
    justify-items: center;
    text-align: center;
`

const CardFooter = styled.footer `
    width: 100%;
    min-height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = styled.footer `
    width: 100%;
    height: 150px;
    background-color: #aeb5b6;
`
const ButtonOption = styled.button `
    width: 100px;
    height: 40px;
    color: black;
    background-color: white;
    outline: 0;
    border: 0;
    box-shadow: 0px 0px 5px;
    border-radius: 5px;
    margin: 10px;
    :hover {
        box-shadow: 0px 0px 10px;
        cursor: pointer;
    }
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
    text-align: center;
    width: 220px;
    min-height: 100%;
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

class PrivateTripListDetails extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        }
    }

    componentDidMount () {
        this.props.getTripDetail(this.props.selectedTripId)
    }

    render () {
        const { goToPrivateTripListPage, goToHomeScreen } = this.props;

        return (
            <Container>
                <Header>
                    <LogoContainer>
                        <HomeButton onClick = {goToHomeScreen}><LogoImg src = {LogoTipo} /></HomeButton>
                    </LogoContainer>  
                    <Menu>
                        <Button onClick = {goToPrivateTripListPage}> back to Private List</Button>
                    </Menu>
                </Header>
                <Main>
                    {this.props.candidates.map((candidate) => 
                        <TripCard>
                            <CardHeader>
                                <P>Nome: {candidate.name}</P>
                            </CardHeader>
                            <CardMain>
                                <P>Id: {candidate.id}</P>
                                <P>Idade: {candidate.age}</P>
                                <P>País: {candidate.country}</P>
                                <P>Motivo de viagem: {candidate.applicationText}</P>
                                <P>Profissão: {candidate.profession}</P>
                            </CardMain>
                            <CardFooter>
                                <ButtonOption>Accept</ButtonOption>
                                <ButtonOption>Decline</ButtonOption>
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
    selectedTripId: state.trips.selectedTripId,
    candidates: state.trips.candidates
})

const mapDispatchToProps = dispatch => ({
    goToPrivateTripListPage: () => dispatch(push(routes.trip_list_private)),
    goToHomeScreen: () => dispatch(push(routes.root)),
    getTripDetail: (tripId) => dispatch(getTripDetail(tripId))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (PrivateTripListDetails);