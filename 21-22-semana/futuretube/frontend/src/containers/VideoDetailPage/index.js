import React from 'react';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { connect } from "react-redux";
import { BodyContainer } from '../../style/globalStyles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { getVideoDetails } from '../../actions';
import { StyledMain } from './styled';

export class VideoDetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount() {
        if(this.props.selectedVideoId !== ""){
            this.props.getVideoDetails(this.props.selectedVideoId)
        } else {
            this.props.goToFeedPage()
        }
    }

    

    render() {

        const { goToFeedPage, selectedVideo } = this.props
        console.log(selectedVideo)
        return(
            <BodyContainer>
                <Header
                    button1={"Voltar"}
                    onClick1={goToFeedPage}
                />
                <StyledMain>
                    <p>title: {selectedVideo.title}</p>
                    <iframe title="Video" allowFullScreen="true" type="video/webm" width="400" height="300" src={`https://www.youtube.com/embed/${selectedVideo.link}`} controls/>
                    <p>description: {selectedVideo.description}</p>
                    <p>creation Date: {selectedVideo.creationDate}</p>
                    <p>name: {selectedVideo.name}</p>
                    <p>user photo: {selectedVideo.userPhoto}</p>
                </StyledMain>
                <Footer/>
            </BodyContainer>
        )
    }
}

const mapStateToProps = state => ({
    selectedVideoId: state.videos.selectedVideoId,
    selectedVideo: state.videos.selectedVideo
})

const mapDispatchToProps = dispatch => ({
    goToFeedPage: () => dispatch(push(routes.home)),
    getVideoDetails: (videoId) => dispatch(getVideoDetails(videoId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoDetailPage);