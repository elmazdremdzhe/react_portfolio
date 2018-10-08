import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Projects extends Component{

    renderProjects(){

        return _.map(this.props.projects, project => {
            return(
                <a href="#" className="col-md-4 text-decoration-none text-center mb-30 portfolio-box">
                    <div className="overflow-hidden rounded border-default box-shadow thumb-container">
                        <img src={project.thumb} alt="Unishop Template 1" className="d-block flex-img"/>
                        <div className="portfolio-box-caption">

                            <div className="portfolio-box-caption-content">
                                <div className="project-category text-faded">
                                    Category
                                </div>
                                <div className="project-name">
                                    {project.title}
                                </div>
                            </div>
                        </div>

                    </div>

                </a>
            );
        });
    }



   render(){
       console.log(this.props.projects);
       return(
            <div>
               <section className=" demos-wrap">
                   <h2 className="text-center pb-3">Projects</h2>
                   <div className="row">
                       {this.renderProjects()}

                   </div>
               </section>



            </div>

       );
   }

}


function mapStateToProps(state){
    return { projects: state.projects };
}


export default connect(mapStateToProps)(Projects);