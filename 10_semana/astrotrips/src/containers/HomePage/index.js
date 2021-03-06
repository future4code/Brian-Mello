import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import styled from "styled-components"
import LogoTipo from "../../images/LogoTipo.png"

// Estilização
const HomeContainer = styled.div `
    width: 100%;
    height: 604px;
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
    justify-content: center;
    align-items: center;
`

const AboutUsContainer = styled.div `
    width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PlanetsTripContainer = styled.div `
    width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const AboutUsCard = styled.div `
    width: 60%;
    height: 420px;
    max-height: 420px;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px;
    text-align: center;
`


const PlanetsCard = styled.div `
    width: 60%;
    min-height: 80%;
    max-height: 420px;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px;
    text-align: center;
`



const CardHeader = styled.header `
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardMain = styled.main `
    width: 100%;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const CardFooter = styled.footer `
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonInscricao = styled.button `
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

const Footer = styled.footer `
    width: 100%;
    height: 30%;
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

const P = styled.p `
    height: 20px;
    margin: 5px;
    font-size: 20px;
`


class HomePage extends React.Component {
    constructor (props) {
        super (props);

        this.state = {

        }
    }

    render () {

        const { goToLoginScreen, goToTripsScreen, goToFormScreen, goToHomeScreen } = this.props;

        return (
            <HomeContainer>
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
                    <AboutUsContainer>
                        <AboutUsCard>
                            <CardHeader>
                                <h2>Sobre Nós</h2>
                            </CardHeader>
                            <CardMain>
                                <P>Somos uma empresa focada em viagens espaciais e InterEstelares. 
                                    Temos diversos tipos e marcas de naves a sua disposição para os 
                                    planetas que mais bombão na galáxia.
                                </P>
                            </CardMain>
                        </AboutUsCard>
                    </AboutUsContainer>
                    <PlanetsTripContainer>
                        <PlanetsCard>
                            <CardHeader>
                                <h2>Planetas disponíveis</h2>
                            </CardHeader>
                            <CardMain>
                                <P>Mercúrio</P>
                                <P>Vênus</P>
                                <P>Terra</P>
                                <P>Marte</P>
                                <P>Júpiter</P>
                                <P>Saturno</P>
                                <P>Urano</P>
                                <P>Netuno</P>
                                <P>Plutão</P>
                            </CardMain>
                            <CardFooter>
                                <ButtonInscricao onClick = {goToTripsScreen}>Inscreva-se</ButtonInscricao>
                            </CardFooter>
                        </PlanetsCard>
                    </PlanetsTripContainer>
                </Main>
                <Footer>

                </Footer>
            </HomeContainer>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      goToLoginScreen: () => dispatch(push(routes.login)),
      goToTripsScreen: () => dispatch(push(routes.trip_list)),
      goToFormScreen: () => dispatch(push(routes.form))
    };
  };

export default connect(
    null,
    mapDispatchToProps
)(HomePage);