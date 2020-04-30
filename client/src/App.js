import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo/client";
import "./App.css";

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Get started with Apollo &amp; Prisma </h2>
    </div>
  </ApolloProvider>
);

export default App;
