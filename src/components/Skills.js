import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Skills extends Component{

    renderSkills(){
        return _.map(this.props.skills, skill => {
            return(
                <div className="col-lg-2 col-md-2 col-xl-2 text-center">
                    <div className="service-box mt-5 mx-auto">
                        <img src={skill.icon} alt={skill.title} className="d-block flex-img"/>

                        <p className="text-muted mb-0">{skill.text}</p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">My Skills</h2>
                            <hr className="my-4"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.renderSkills()}
                    </div>
                </div>
            </section>
        );
    }

}


function mapStateToProps(state){
    return { skills: state.skills };
}


export default connect(mapStateToProps)(Skills);