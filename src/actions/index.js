export const PROJECT_SELECTED = 'PROJECT SELECTED';

export function selectProject(project){


    return{
        type: PROJECT_SELECTED,
        payload: project
    };
}