import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo/client";
import TodoList from "./TodoList/TodoList";
import "./App.css";

const App = () => (
  <ApolloProvider client={client}>
    <div
      className="vh-100 d-flex justify-content-center align-items-center flex-column"
      style={{ background: "#2E2F33" }}
    >
      <h2 className="text-white">Todo List</h2>
      <TodoList />
    </div>
  </ApolloProvider>
);

export default App;
