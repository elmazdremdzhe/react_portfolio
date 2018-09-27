import React, {Component} from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export default class FloatingImages extends Component{


    renderImages(img_count){
        const images = [];

        const directions = ['transition-right', 'transition-up', 'transition-diag'];

        for (let i = 0; i < img_count; i++) {

            let size = Math.floor(Math.random() * 40);
            let imgStyle = {
                left: Math.floor(Math.random() * 100) + "%",
                top: Math.floor(Math.random() * 100) + "%",
                width: size + "px",
                height: size + "px"
            };

            let transitionClass = directions[Math.floor(Math.random()*directions.length)];
            images.push(
                <img src="./img/firefly.png" className={ "fireflight " + transitionClass  } style={imgStyle}/>
            );

        }

        return images;
    }

    render(){
//@todo figure out csstransitions react - maybe work with them
        return(
            <div>
                <TransitionGroup className="floating-images">
                    {this.renderImages(20)}
                </TransitionGroup>
            </div>
        );
    }
}