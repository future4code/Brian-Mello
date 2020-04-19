import React from 'react';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { connect } from "react-redux";
import { BodyContainer } from '../../style/globalStyles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { getVideoDetails, setVideoId, getVideos, deleteVideo } from '../../actions';
import { StyledMain, StyledIFrame, VideoSettingsContainer, FeedOfVideosContainer, TitleAndUpdateContainer, UsersInformation, StyledUserImage, DescriptionContainer, StyledUserName, StyledP, StyledH2, StyledH3, StyledUpdateIcon } from './styled';
import VideoContainer from '../../components/videoContainer';
import Loader from '../../components/loader';

export class VideoDetailPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            search: ""
        }
    }

    componentDidMount() {
        if(this.props.selectedVideoId !== ""){
            this.props.getVideoDetails(this.props.selectedVideoId)
        } else if(this.props.selectedVideoId === "") {
            this.props.goToFeedPage()
        } else {
            this.props.getVideos()
        }
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
        this.props.goToUpdateVideo()
    };

    handleSetVideoId = (videoId) => {
        this.props.setVideoId(videoId)
        this.props.goToVideoDetailsPage()
    };
    

    render() {

        const { search, feed } = this.state

        const { goToFeedPage, selectedVideo } = this.props

        let filterVideos = this.props.feed.filter((video) => {
            return video.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || 
            video.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
          });
      
        let orderedVideo;
    
        let mapVideos = (<h1>Vídeo não encontrado!</h1>)
    
        if(filterVideos) {
            orderedVideo = filterVideos.sort((a,b) => (a.title > b.title ? 1 : -1));
        };
    
        if (this.props.feed.length === 0){
            mapVideos = (<Loader/>)
        } else if (orderedVideo.length > 0) {
            { mapVideos = orderedVideo.map((video) => 
                <VideoContainer
                key={video.id}
                img={video.photo}
                videoTitle={video.title}
                username={video.name}
                onDelete={() => this.handleDeleteVideo(video.id)}
                onClick={() => this.handleSetVideoId(video.id)}
                />
            )}
        }

        return(
            <BodyContainer>
                <Header
                    button1={"Voltar"}
                    onClick1={goToFeedPage}
                    value={feed}
                    onChange={this.handleFieldChange.bind(this)}
                />
                <StyledMain>
                    <VideoSettingsContainer>
                        <StyledIFrame title="Video" allowFullScreen="true" type="video/webm" width="900" height="500" src={`https://www.youtube.com/embed/${selectedVideo.link}`} controls/>
                        <TitleAndUpdateContainer>
                            <StyledH2>{selectedVideo.title}</StyledH2>
                            <StyledUpdateIcon onClick={() => this.handleSetUpdateVideoId(selectedVideo.id)}/>
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
                </StyledMain>
                <Footer/>
            </BodyContainer>
        )
    }
}

const mapStateToProps = state => ({
    selectedVideoId: state.videos.selectedVideoId,
    selectedVideo: state.videos.selectedVideo,
    feed: state.videos.allVideos
})

const mapDispatchToProps = dispatch => ({
    goToVideoDetailsPage: () => dispatch(push(routes.videoDetail)),
    goToFeedPage: () => dispatch(push(routes.home)),
    goToUpdateVideo: () => dispatch(push(routes.updateVideo)),
    getVideoDetails: (videoId) => dispatch(getVideoDetails(videoId)),
    deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
    getVideos: () => dispatch(getVideos()),
    setVideoId: (videoId) => dispatch(setVideoId(videoId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoDetailPage);