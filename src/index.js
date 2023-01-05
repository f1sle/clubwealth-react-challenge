import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './routes/layout';
import Index from './routes/index';
import Cats from "./routes/cats";
import Users from "./routes/users";
import Page404 from "./routes/404";

import "./styles/styles.scss";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="*" element={<Page404 />} 
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
