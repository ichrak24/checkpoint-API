import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, Switch } from "react-router-dom";
import Users from "./Components/Users";
import Posts from "./Components/Posts";
import Comment from "./Components/Comment";
function App() {
  const [ListUsers, setListUsers] = useState([]);
  const [ListPosts, setListPosts] = useState([]);
  const [ListComments, setListComments] = useState([]);
  const getAllusers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListUsers(res.data))
      .catch((err) => console.log(err));
  };
  const getAllposts = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setListPosts(res.data))
      .catch((err) => console.log(err));
  };
  const getAllcomments = () => {
    Axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setListComments(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllusers();
    getAllposts();
    getAllcomments();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "#4BAED4" }}> API Application </h1>
      <br />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Users ListUsers={ListUsers} />}
        ></Route>
        <Route
        exact
          path="/posts/:id"
          render={(props) => <Posts {...props} ListPosts={ListPosts} />}
        ></Route>
        <Route
          path="/posts/:id/comment/:id"
          render={(props) => <Comment {...props} ListComments={ListComments} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
