import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Projects extends Component{

    renderProjects(){

        return _.map(this.props.projects, project => {
            return(
                <a href="template-1/index.html" className="col-md-4 text-decoration-none text-center mb-30">
                    <div className="overflow-hidden rounded border-default box-shadow">
                        <img src={project.thumb} alt="Unishop Template 1" className="d-block flex-img"/>
                    </div>
                    <h3 className="h6 pt-4">{project.title}</h3>
                    <span className="btn btn-outline-primary btn-sm">View Demo</span>
                </a>
            );
        });
    }


   render(){
       console.log(this.props.projects);
       return(
           <div>
               <section className="demos-wrap rounded">
                   <h2 className="text-center pb-3">Choose Demo</h2>
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