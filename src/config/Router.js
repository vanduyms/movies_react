import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Header from '../components/Header';
import Footer from '../components/Footer';

const config = [
  {
    path: '/:catergory/search/:keyword',
    component: <Catalog />,
  },
  {
    path: '/:catergory',
    component: <Catalog />,
  },
  {
    path: "/:catergory/:id",
    component: <Detail />,
  },
  {
    path: "/",
    component: <Home />,
  },
]

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {config.map((item, index) =>
          <Route key={index} index={index} path={item.path} element={item.component} />
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;