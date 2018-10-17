import { combineReducers } from 'redux';

import ProjectsReducer from './reducer_projects.js' ;
import SkillsReducer from './reducer_skills.js' ;
import ActiveProjectReducer from './reducer_active_project.js';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  skills: SkillsReducer,
    activeProject: ActiveProjectReducer,

});

export default rootReducer;
