import types from '../actions/types';


const DEFAULT_STATE = {
    list: [
        {
            title: 'Make to do list',
            details: 'Build it in react w/ redux'
        },
        {
            title: 'Practice React',
            details: 'Using redux'
        },
        {
            title: 'Get a job',
            details: 'Using React'
        }
    ]
}

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.ADD_ITEM:
            return { list: [action.payload, ...state.list]};
        default:
            return state;
    }
}