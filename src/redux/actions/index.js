import {ADD_ARTICLE} from "../constants/action_types";

export function addArticle(payload){
    return {type: ADD_ARTICLE, payload}
}

// export function getData(){
//     return function(dispatch){
//         return fetch('http://jsonplaceholder.typicode.com/posts')
//             .then(response=>response.json)
//             .then(json=>{
//                 dispatch({type: "DATA_LOADED", payload: json})
//             })
//     }
// }

// export function getData() {
//     return { type: "DATA_REQUESTED" };
// }

export function getData(url) {
    return { type: "DATA_REQUESTED", payload: { url } };
}