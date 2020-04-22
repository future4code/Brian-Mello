import React, { Fragment } from 'react';
import { ScrollToTopContainer, StyledExpandLessIcon } from './styled';

export class ScrollToTop extends React.Component{

    handleScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };

    render(){
        return(
            <Fragment>
                <ScrollToTopContainer>
                  <StyledExpandLessIcon onClick={this.handleScrollToTop}/>
                </ScrollToTopContainer>
            </Fragment>
        )
    }  
}

export default ScrollToTop;