import React from 'react';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { connect } from "react-redux";
import { BodyContainer } from '../../style/globalStyles';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { StyledMain } from './styled';
import { getProfile } from '../../actions';

export class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount() {
        this.props.getProfile()
      };

    render(){
        const { name, email, birthdate, photo, password } = this.props.profile

        const { goToFeedPage, goToUpdatePasswordPage } = this.props

        return(
            <BodyContainer>
                <Header
                    button1={"Voltar"}
                    onClick1={goToFeedPage}
                />
                <StyledMain>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{birthdate}</p>
                    <img alt="not found" src={photo}/>
                    <p>{password}</p>
                    <button onClick={goToUpdatePasswordPage}>atualizar senha</button>
                </StyledMain>
                <Footer/>
            </BodyContainer>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.users.profile
})

const mapDispatchToProps = dispatch => ({
    goToFeedPage: () => dispatch(push(routes.home)),
    getProfile: () => dispatch(getProfile()),
    goToUpdatePasswordPage: () => dispatch(push(routes.updatePassword))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage);