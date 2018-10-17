import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Project extends Component{
    constructor(props){
        super(props);

        this.state = { show: false};
    }

    renderProjectSection(){
        if(this.props.project ) {

            const project  = this.props.project;
            console.log(project.thumb);
            const bannerStyle = {
                background: `linear-gradient(
                    rgba(34, 66, 86, 0.85),
                    rgba(34, 66, 86, 0.85)
                    ), url("${project.thumb}") center no-repeat,
                center, no-repeat`
                //backgroundImage: `url("${project.thumb}")`
            };

            return (
                <section id="project-section" className=" bg-dark text-white" style={bannerStyle}>
                    <div className="container text-center">
                        <h2 className="mb-4">{project.title}</h2>

                        <h6 className="mb-4">{project.tags}</h6>
                        <hr className="light mb-4"/>
                        <div className="row">
                           <div className="col-sm-6">
                               <p>{project.text}</p>
                           </div>
                           <div className="col-sm-6">
                               <p>{project.text}</p>
                           </div>
                       </div>
                           <a className="" href="http://startbootstrap.com/template-overviews/creative/" >Download Now!</a>
                    </div>
                </section>
            );
        } else {
            return ('<div></div>');
        }

    }

    render(){
        const classCollapse = "banner" + (this.props.project ? "    in visible " : "") ;


        return(
          <div className={classCollapse}>


                    {this.renderProjectSection()}

              <section className=" demos-wrap">
                  <div className="row">
                  </div>
              </section>
          </div>
        );
    }

}

function mapStateToProps(state){

    return { project: state.projects[state.activeProject] };

}

export default connect(mapStateToProps)(Project);