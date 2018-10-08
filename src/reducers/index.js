import { combineReducers } from 'redux';

import ProjectsReducer from './reducer_projects.js' ;
import SkillsReducer from './reducer_skills.js' ;

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  skills: SkillsReducer,

});

export default rootReducer;
