import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Cats from "./routes/cats";
import Users from "./routes/users";
import "./styles/styles.scss";

const App = () => {
  return (
    <Layout>
      <h1>React Coding Challenge</h1>
      <h2>Choose your API</h2>
      <section>
        <div className="api-endpoint"></div>
        <div className="api-endpoint"></div>
        <div className="api-endpoint"></div>
        <div className="api-endpoint"></div>
        <div className="api-endpoint"></div>
        <div className="api-endpoint"></div>
      </section>
    </Layout>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/users" element={<Users />} />
        <Route path="/cats" element={<Cats />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
