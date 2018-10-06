import React, {Component} from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export default class FloatingImages extends Component{


    renderImages(img_count){
        const images = [];

       // const directions = ['transition-right', 'transition-up', 'transition-diag', 'transition-rotate'];
        const directions = ['transition-right', 'transition-rotate', 'transition-diag'];

        for (let i = 0; i < img_count; i++) {

            let size = Math.floor(Math.random() * 30)+15;
            let transition = directions[Math.floor(Math.random()*directions.length)];
            let animation = transition + " " + Math.floor(Math.random() * 25) + " ease-in-out infinite";


            let imgStyle = {
                left: Math.floor(Math.random() * 100) + "%",
                top: Math.floor(Math.random() * 60) + "%",
                width: size + "px",
                height: size + "px",
                animationDuration:  Math.floor(Math.random() * 50)+30 + "s"
            };

            let transitionClass = directions[Math.floor(Math.random()*directions.length)];
            images.push(
                <img src="./img/firefly.png" className={ "fireflight " +  transitionClass } style={imgStyle}/>
            );

        }

        return images;
    }

    render(){
//@todo figure out csstransitions react - maybe work with them, and maybe randomize them more

        return(
            <div className="floating">

                    {this.renderImages(20)}


            </div>
        );
    }
}