import React from "react";
import {connect} from "react-redux"

const mapStateToProps = state=>({
    articles: state.articles
})

export const List = connect(mapStateToProps)(
    class extends React.Component{
        render() {
            console.log('List props', this.props)
            return (
                <ul>
                    {this.props.articles.map(el=>(
                        <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
            );
        }
    }
)