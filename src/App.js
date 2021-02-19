import React from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {List} from "./components/List";
import {Form} from "./components/Form";
import {Posts} from "./components/Posts";

export default class App extends React.Component{
  render() {
    return (
        <Provider store={store}>
            <div>
                <h2>Articles</h2>
                <List />
            </div>
            <div>
                <h2>Add a new article</h2>
                <Form />
            </div>

            <div>
                <h2>API posts</h2>
                <Posts />
            </div>
        </Provider>
    );
  }
}
