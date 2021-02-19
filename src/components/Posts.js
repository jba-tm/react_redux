// import React from "react";
// import {connect} from "react-redux"
// import {getData} from "../redux/actions";
//
// const mapStateToProps =state=> ({
//     articles: state.remoteArticles.slice(0,10)
// })
//
// export const Posts = connect(mapStateToProps, {getData})(
//     class extends React.Component{
//         componentDidMount() {
//             this.props.getData()
//         }
//
//         render() {
//             return (
//                 <ul>
//                     {this.props.articles.map(el=>(
//                         <li key={el.id}>{el.title}</li>
//                     ))}
//                 </ul>
//             )
//         }
//     }
// )

import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../redux/actions/index";

export class Post extends Component {
    componentDidMount() {
        this.props.getData("https://api.valentinog.com/api/link/");
    }

    render() {
        return (
            <ul>
                {this.props.articles.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.remoteArticles.slice(0, 10)
    };
}

export const Posts =  connect(mapStateToProps, { getData })(Post);