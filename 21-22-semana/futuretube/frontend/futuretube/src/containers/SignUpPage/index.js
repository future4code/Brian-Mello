import React from "react";
import { connect } from "react-redux";

// const signUpForm = [
//     {
//        name: 'username',
//        type: 'text',
//        label: 'Usuário ',
//        required: true,
//        pattern: "[A-Za-z]"
//     },
//     {
//        name: 'email',
//        type: 'email',
//        label: 'E-mail: ',
//        required: true,
//        pattern: "[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}",
//     },
//     {
//         name: 'password',
//         type: 'password',
//         label: 'password',
//         required: true,
//     },

// ]


class SignUpPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {}
        }
    }

    render(){

        return(
            <div>
                
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) =>({

})



export default connect(null, mapDispatchToProps)(SignUpPage);