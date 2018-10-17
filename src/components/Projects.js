import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../actions/index.js';
import _ from 'lodash';

import Project from './Project';

class Projects extends Component{




    renderProjects(){

        return _.map(this.props.projects, project => {

            return(

                <div key={project.id}

                     onClick={(e) => this.clickProject(project.id, e)} className="col-md-4 text-decoration-none text-center mb-30 portfolio-box">

                    <div

                        className="overflow-hidden rounded border-default box-shadow thumb-container">
                        <img src={project.thumb} alt={project.title} className="d-block flex-img"/>
                        <div className="portfolio-box-caption"  >
                            <div className="portfolio-box-caption-content" >
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    {project.title}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            );
        });
    }



   render(){

       return(
            <div>
               <section className=" demos-wrap">
                   <h2 className="text-center pb-3">Projects</h2>
                   <div className="row">
                       {this.renderProjects()}

                   </div>


               </section>


                <Project   />

            </div>

       );
   }

    clickProject(project){
       this.props.selectProject(project);
   }

}


function mapStateToProps(state){
    return { projects: state.projects };
}


export default connect(mapStateToProps, {selectProject})(Projects);