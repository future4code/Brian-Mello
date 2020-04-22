import React from 'react';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { connect } from "react-redux";
import { BodyContainer } from '../../style/globalStyles';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { StyledMain, ProfileContainer, PhotoContainer, UserPhoto, NameAndTypeContainer, NameContainer, TypeContainer, EmailAndBirthdateContainer, MyVideosContainer, StyledUpdateIcon, UserVideosContainer, UpdatePasswordIcon, Password, PasswordContainer, EmailContainer, BirthdateContainer } from './styled';
import { getProfile, getVideos, setVideoId, deleteVideo } from '../../actions';
import { StyledH2 } from '../VideoDetailPage/styled';
import UserInfo from '../../components/UserInfo';
import Loader from '../../components/loader';
import VideoContainer from '../../components/videoContainer';
import ScrollToTop from '../../components/ScrollToTop';

export class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            search: "",
        }
    }

    componentDidMount() {
        const accessToken = window.localStorage.getItem("accessToken")
        if(accessToken === null){
          this.props.goToFeedPage()
        } else {
            this.props.getProfile()
            this.props.getVideos()
        }
    };

    handleLogout = () => {
        localStorage.removeItem("accessToken")
        window.alert("Usuário deslogado com sucesso!")
        this.props.goToFeedPage()
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

    handleSetVideoId = (videoId) => {
        this.props.setVideoId(videoId)
        this.props.goToVideoDetailPage(videoId)
        window.scroll({
            top: 0,
            behavior: 'auto'
        });
    };

    render(){

        const { search, feed } = this.state

        const { id, name, email, birthDate, photo, password, type } = this.props.profile

        const { goToFeedPage, goToUpdatePasswordPage } = this.props

        let filterByUser = this.props.feed.filter((video) => {
            return video.user_id === id
        })
        
        let filterVideos = filterByUser.filter((video) => {
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
                <Header
                    button1={"Voltar"}
                    onClick1={goToFeedPage}
                    button2={"Logout"}
                    onClick2={this.handleLogout}
                    value={feed}
                    onChange={this.handleFieldChange}
                />
                <StyledMain>
                    <ProfileContainer>
                        <PhotoContainer>
                            <UserPhoto alt="not found" src={photo}/>
                        </PhotoContainer>
                        <NameAndTypeContainer>
                            <NameContainer>
                                <UserInfo Label="Name: " userData={name}/>
                            </NameContainer>
                            <TypeContainer>
                                <UserInfo Label="Tipo: " userData={type}/>
                            </TypeContainer>
                        </NameAndTypeContainer>
                        <EmailAndBirthdateContainer>
                            <EmailContainer>
                                <UserInfo Label="Email: " userData={email}/>
                            </EmailContainer>
                            <BirthdateContainer>
                                <UserInfo Label="Birthdate: " userData={birthDate}/>
                            </BirthdateContainer>
                        </EmailAndBirthdateContainer>
                        <PasswordContainer>
                            <Password>
                                <UserInfo Label="Password: " value={password}/>
                                <UpdatePasswordIcon>
                                    <StyledUpdateIcon onClick={goToUpdatePasswordPage}/>
                                </UpdatePasswordIcon>
                            </Password>
                        </PasswordContainer>
                    </ProfileContainer>
                    <UserVideosContainer>
                        <MyVideosContainer>
                            <StyledH2>Meus Videos</StyledH2>
                        </MyVideosContainer>
                        {mapVideos}
                    </UserVideosContainer>
                    <ScrollToTop/>
                </StyledMain>
                <Footer/>
            </BodyContainer>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.users.profile,
    feed: state.videos.allVideos
})

const mapDispatchToProps = dispatch => ({
    goToFeedPage: () => dispatch(push(routes.home)),
    getProfile: () => dispatch(getProfile()),
    goToUpdatePasswordPage: () => dispatch(push(routes.updatePassword)),
    goToVideoDetailPage: (videoId) => dispatch(push(`/video/${videoId}`)),
    getVideos: () => dispatch(getVideos()),
    setVideoId: (videoId) => dispatch(setVideoId(videoId)),
    deleteVideo: (videoId) => dispatch(deleteVideo(videoId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage);