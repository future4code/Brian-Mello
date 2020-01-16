import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import LogoTipo from '../../images/LogoTipo.png'

// Estilização 

const HomeContainer = styled.div `
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

const Main = styled.main `
    width: 100%;
    min-height: 400px;
    background-color: #e0e7e8;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`
const Card = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 250px;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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

// código
class AdminPage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        }
    }

    render () {

        const { goToHomeScreen, goToTripsDetailsScreen, goToCreateTripsScreen } = this.props;

        return (
            <HomeContainer>
                <Header>
                    <LogoContainer>
                        <HomeButton onClick = {goToHomeScreen}><LogoImg src = {LogoTipo}/></HomeButton>
                    </LogoContainer>
                    <Menu>
                        <Button onClick = {goToTripsDetailsScreen}> Trip Details</Button>
                        <Button onClick = {goToCreateTripsScreen}> Create Trips</Button>
                    </Menu>
                </Header>
                <Main>

                </Main>
                <Footer>

                </Footer>
            </HomeContainer>
        )
    }
}

const mapDispathToProps = dispatch => {
    return {
        goToHomeScreen: () => dispatch(push(routes.root)),
        goToTripsDetailsScreen: () => dispatch(push(routes.trip_details)),
        goToCreateTripsScreen: () => dispatch(push(routes.trip_create))
    };
};

export default connect (
    null, 
    mapDispathToProps) 
(AdminPage);