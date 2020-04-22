import React from 'react';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { connect } from "react-redux";
import { BodyContainer } from '../../style/globalStyles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { getVideoDetails, setVideoId, getVideos, deleteVideo, getProfile } from '../../actions';
import { StyledMain, StyledIFrame, VideoSettingsContainer, FeedOfVideosContainer, TitleAndUpdateContainer, UsersInformation, StyledUserImage, DescriptionContainer, StyledUserName, StyledP, StyledH2, StyledH3, StyledUpdateIcon } from './styled';
import VideoContainer from '../../components/videoContainer';
import Loader from '../../components/loader';
import ScrollToTop from '../../components/ScrollToTop';

export class VideoDetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            search: ""
        }
    }

    componentDidMount() {
        let videoId = this.props.selectedVideoId ? this.props.selectedVideoId : this.props.match.params.videoId 
        const accessToken = window.localStorage.getItem("accessToken")
        if(!accessToken){
            this.props.getVideoDetails(videoId)
            this.props.getVideos()

        } else if (videoId){
                this.props.getVideoDetails(videoId)
                this.props.getVideos()
                this.props.getProfile()
        } else {
            this.props.goToFeedPage()
        }
    }

    handleLogout = (videoId) => {
        localStorage.removeItem("accessToken")
        videoId = this.props.selectedVideo.id
        window.alert("Usuário deslogado com sucesso!")
        this.props.goToVideoDetailsPage(videoId)
    }

    handleFieldChange = event => {
        this.setState({
           [event.target.name]: event.target.value
        });
    
        this.setState({ search: event.target.value })
    };

    handleDeleteVideo = (videoId) => {
        this.props.deleteVideo(videoId)
    };

    handleSetUpdateVideoId = (videoId) => {
        this.props.setVideoId(videoId)
        this.props.goToUpdateVideo(videoId)
    };

    handleSetVideoId = (videoId) => {
        this.props.setVideoId(videoId)
        this.props.goToVideoDetailsPage(videoId)
        this.props.getVideoDetails(videoId)
        window.scroll({
            top: 0,
            behavior: 'auto'
        });
    };

    render() {

        const { search, feed } = this.state

        const { goToFeedPage, goToLoginPage, goToSignupPage, selectedVideo } = this.props

        const { id } = this.props.profile

        const isLogged = window.localStorage.getItem("accessToken")

        let showUpdateButton

        let buttonRenderization 

        if(isLogged && selectedVideo.user_id === id){
            showUpdateButton = (<StyledUpdateIcon onClick={() => this.handleSetUpdateVideoId(selectedVideo.id)}/>)
        }

        if(isLogged){
            buttonRenderization = (
                <Header onClick={goToFeedPage} button1={"Voltar"} onClick1={goToFeedPage} button2={"Logout"} onClick2={this.handleLogout} value={feed} onChange={this.handleFieldChange}/>
            )
        } else {
            buttonRenderization = (
                <Header onClick={goToFeedPage} button1={"Login"} onClick1={goToLoginPage} button2={"Signup"} onClick2={goToSignupPage} button3={"Voltar"} onClick3={goToFeedPage} value={feed} onChange={this.handleFieldChange}/>
        )
        }

        let filterVideos = this.props.feed.filter((video) => {
            return video.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || 
            video.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          });
      
        let orderedVideo;
    
        let mapVideos = (<h3>Vídeo não encontrado!</h3>)
    
        if(filterVideos) {
            orderedVideo = filterVideos.sort((a,b) => (a.title > b.title ? 1 : -1));
        };
    
        if (this.props.feed.length === 0){
            mapVideos = (<Loader/>)
        } else if (orderedVideo.length > 0) {
            mapVideos = orderedVideo.map((video) => 
                <VideoContainer
                key={video.id}
                img={video.photo}
                videoTitle={video.title}
                username={video.name}
                onDelete={() => this.handleDeleteVideo(video.id)}
                onClick={() => this.handleSetVideoId(video.id)}
                />
            )
        }

        return(
            <BodyContainer>
                {buttonRenderization}
                <StyledMain>
                    <VideoSettingsContainer>
                        <StyledIFrame title="Video" allowFullScreen={true} type="video/webm" width="900" height="500" src={`https://www.youtube.com/embed/${selectedVideo.link}`} controls/>
                        <TitleAndUpdateContainer>
                            <StyledH2>{selectedVideo.title}</StyledH2>
                            {showUpdateButton}
                        </TitleAndUpdateContainer>
                        <UsersInformation>
                            <StyledUserImage src={selectedVideo.userPhoto}/>
                            <StyledUserName>{selectedVideo.name}</StyledUserName>
                        </UsersInformation>
                        <DescriptionContainer>
                            <StyledH3>Descrição</StyledH3>
                            <StyledP>{selectedVideo.description}</StyledP>
                        </DescriptionContainer>
                    </VideoSettingsContainer>
                    <FeedOfVideosContainer>
                        <StyledH2>Outros vídeos</StyledH2>
                        {mapVideos}
                    </FeedOfVideosContainer>
                    <ScrollToTop/>
                </StyledMain>
                <Footer/>
            </BodyContainer>
        )
    }
}

const mapStateToProps = state => ({
    selectedVideoId: state.videos.selectedVideoId,
    selectedVideo: state.videos.selectedVideo,
    feed: state.videos.allVideos,
    profile: state.users.profile
})

const mapDispatchToProps = dispatch => ({
    goToVideoDetailsPage: (videoId) => dispatch(push(`/video/${videoId}`)),
    goToFeedPage: () => dispatch(push(routes.home)),
    goToUpdateVideo: (videoId) => dispatch(push(`/video/${videoId}/updateVideo`)),
    goToLoginPage: () => dispatch(push(routes.login)),
    goToSignupPage: () => dispatch(push(routes.signup)),
    getVideoDetails: (videoId) => dispatch(getVideoDetails(videoId)),
    deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
    getVideos: () => dispatch(getVideos()),
    setVideoId: (videoId) => dispatch(setVideoId(videoId)),
    getProfile: () => dispatch(getProfile())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoDetailPage);