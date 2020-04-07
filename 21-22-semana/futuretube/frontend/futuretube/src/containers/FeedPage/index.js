import React, { Fragment } from 'react'
import { StyledBody } from './styled';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { connect } from 'react-redux';
import { getVideos } from '../../actions';
import Loader from '../../components/Loader'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

class FeedPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.getVideos()
    }

    handleLogOut = () => {
        localStorage.removeItem("token")
        this.props.goToLoginPage()
    };

    render () {

        // const { videos } = this.state;

        const videosIsReady = this.props.videos.length === 0 ? <Loader/> : (
            <Fragment>
                {this.props.videos.map((video) => 
                    <p>{video.title}</p>
                )}
            </Fragment>
        )

        return (
            <StyledBody>
                <Header text={"Login"}/>
                <Main>
                    {videosIsReady}
                </Main>
                <Footer/>
            </StyledBody>
        )
    }
}

const mapStateToProps = (state) => ({
    videos: state.videos.allVideos
})

const mapDispatchToProps = (dispatch) => ({
    goToLoginPage: () => dispatch(push(routes.root)),
    getVideos: () => dispatch(getVideos())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedPage);