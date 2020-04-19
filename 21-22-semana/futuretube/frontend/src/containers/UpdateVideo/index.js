import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { StyledTextField, StyledButtonForms, StyledWrapper } from "../../style/globalStyles";
import { updateVideo, getVideoDetails } from '../../actions/index';

const updateVideoForm = [

    {
        name: 'title',
        type: 'text',
        label: 'Título: ',
        pattern: "[a-zA-Z0-9]+"
    },
    {
        name: 'description',
        type: 'text',
        label: 'Descrição: ',
        pattern: "[a-zA-Z0-9]+"
    }
]

class UpdateVideoPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {}
        }
    }

    componentDidMount() {
        const accessToken = window.localStorage.getItem("accessToken")
        if(accessToken === null){
          this.props.goToFeedPage()
          window.alert("Você precisa estar logado para ver essa página")
        } else if (this.props.selectedVideoId !== ""){
            this.props.getVideoDetails(this.props.selectedVideoId)
        } else {

        }
    };


    handleFieldChange = event => {
        const { name, value } = event.target
        this.setState({
          form: { ...this.state.form, [name]: value }
        });
    };

    handleOnSubmit = (event, videoId) =>{
        event.preventDefault();
        const { title, description } = this.state.form
        this.props.updateVideo(videoId, title, description )
        this.setState({form: {}})
        console.log(videoId)
    }

    render(){

        const { goToVideoDetailPage, selectedVideo } = this.props

        return(
            <Fragment>
                <StyledWrapper onSubmit={() => this.handleOnSubmit(selectedVideo.id)}>
                    <h1>Update Video</h1>
                    {updateVideoForm.map(input =>(
                        <StyledTextField
                            key={input.name}
                            color='primary'
                            onChange={this.handleFieldChange}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            required={input.required}
                            pattern={input.pattern}
                        />
                    ))}
                    <StyledButtonForms type="submit"> Update </StyledButtonForms>
                    <StyledButtonForms onClick={goToVideoDetailPage}> Voltar </StyledButtonForms>
                </StyledWrapper> 
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    selectedVideoId: state.videos.selectedVideoId,
    selectedVideo: state.videos.selectedVideo
})

const mapDispatchToProps = (dispatch) =>({
    goToVideoDetailPage: () => dispatch(push(routes.videoDetail)),
    goToFeedPage: () => dispatch(push(routes.home)),
    getVideoDetails: (videoId) => dispatch(getVideoDetails(videoId)),
    updateVideo: (videoId, title, description) => dispatch(updateVideo(videoId, title, description))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(UpdateVideoPage);