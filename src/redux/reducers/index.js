import {ADD_ARTICLE} from "../constants/action_types";

const initialState = {
    articles: [],
    remoteArticles: []
}

export function rootReducer(state=initialState, action){
    switch (action.type){
        case ADD_ARTICLE:{
            return {...state, articles: state.articles.concat(action.payload)}
        }
        case "DATA_LOADED":{
            return {...state, remoteArticles: state.remoteArticles.concat(action.payload)}
        }
        default:
            return state
    }
}
