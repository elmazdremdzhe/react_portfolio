import {PROJECT_SELECTED} from "../actions/index";
import _ from 'lodash';

export default function(state = null, action){


    switch(action.type){
        case PROJECT_SELECTED:

            return action.payload;
    }
    return state;
}