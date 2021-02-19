import React from "react";
import {connect} from "react-redux"
import {addArticle} from "../redux/actions";

const mapDispatchToProps = {
    addArticle
}

export const Form = connect(null, mapDispatchToProps)(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                title: '',
                counter: 1
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleChange(e) {
            this.setState({title: e.target.value})
        }

        handleSubmit(e) {
            e.preventDefault()
            const {title, counter} = this.state
            this.props.addArticle({title, id: counter})
            this.setState({title: '', counter: this.state.counter+1})
        }

        render() {
            const {title} = this.state
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={title} onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            );
        }
    }
)