import React, {Fragment} from "react";
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { connect } from "react-redux";
import Footer from "../../components/footer";
import { getVideos, setVideoId, deleteVideo } from "../../actions";
import Loader from "../../components/loader";
import { StyledMain, MenuContainer, StyledP, FeedContainer, FeedTitle, FeedContainerHeader, FeedTitleContainer, FeedOrderSelectContainer} from "./styled";
import VideoContainer from "../../components/videoContainer"
import { BodyContainer } from "../../style/globalStyles";
import SelectOrder from "../../components/selectOrder";
import Header from "../../components/header";
import ScrollToTop from "../../components/ScrollToTop";

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search: "",
      order: ""
    }
  }

  componentDidMount() {
      this.props.getVideos()
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

  handleSetVideoId = (videoId) => {
    this.props.setVideoId(videoId)
    this.props.goToVideoDetailPage(videoId)
    window.scroll({
      top: 0,
      behavior: 'auto'
    });
  };

  handleDeleteVideo = (videoId) => {
    this.props.deleteVideo(videoId)
  };

  handleSelectOrderOnChange = event => {
    const { value } = event.target;

    this.setState ({ order: value});
  }

  handleScrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
  };

  render() {

    const isLogged = window.localStorage.getItem("accessToken")

    const { search, feed, order } = this.state;

    const { goToSignupPage, goToLoginPage, goToCreateVideoPage, goToFeedPage, goToProfilePage } = this.props

    let  menuItems

    let buttonRenderization

    if(isLogged){
      menuItems = <Fragment>
        <StyledP onClick={goToProfilePage}>Profile</StyledP>
        <StyledP onClick={goToCreateVideoPage}>Create Video</StyledP>
      </Fragment>
    }

    if(isLogged){
      buttonRenderization = (
          <Header onClick={goToFeedPage} button1={"Logout"} onClick1={this.handleLogout} value={feed} onChange={this.handleFieldChange}/>
      )
    } else {
      buttonRenderization = (
          <Header onClick={goToFeedPage} button1={"Login"} onClick1={goToLoginPage} button2={"Signup"} onClick2={goToSignupPage} value={feed} onChange={this.handleFieldChange}/>
      )
    }

    let filterVideos = this.props.feed.filter((video) => {
      return video.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || 
      video.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    let orderedVideo;

    let mapVideos = (<h1>Vídeo não encontrado!</h1>)

    if(filterVideos) {
      if(order === "crescente"){
        orderedVideo = filterVideos.sort((a,b) => (a.title > b.title ? 1 : -1));
      } else if (order === "decrescente"){
        orderedVideo = filterVideos.sort((a,b) => (a.title > b.title ? -1 : 1));
      } else {
        orderedVideo = filterVideos.sort((a,b) => (a.title > b.title ? 1 : -1));
      }
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
          defaultValue="https://i.pinimg.com/originals/4a/19/4e/4a194eec519841ce2815141db087b7ac.jpg"
        />
      )
    }

    return (
      <BodyContainer>
        {buttonRenderization}
        <StyledMain>
            <MenuContainer>
                {menuItems}
            </MenuContainer>
            <FeedContainer>
                <FeedContainerHeader>
                  <FeedTitleContainer>
                    <FeedTitle>Videos</FeedTitle>
                  </FeedTitleContainer>
                  <FeedOrderSelectContainer>
                    <SelectOrder value={order} onChange={this.handleSelectOrderOnChange}/>
                  </FeedOrderSelectContainer>
                </FeedContainerHeader>
                {mapVideos}
            </FeedContainer>
            <ScrollToTop/>
        </StyledMain>
        <Footer/>
      </BodyContainer>
    );
  }
}

const mapStateToProps = state => ({
  feed: state.videos.allVideos,
})

const mapDispatchToProps = dispatch =>({
  goToSignupPage: () => dispatch(push(routes.signup)),
  goToLoginPage: () => dispatch(push(routes.login)),
  goToCreateVideoPage: () => dispatch(push(routes.createVideo)),
  goToFeedPage: () => dispatch(push(routes.home)),
  getVideos: () => dispatch(getVideos()),
  setVideoId: (videoId) => dispatch(setVideoId(videoId)),
  deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  goToProfilePage: () => dispatch(push(routes.profile)),
  goToVideoDetailPage: (videoId) => dispatch(push(`/video/${videoId}`))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
