import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { Context } from "../contexts/AuthContext";
import { useContext, useState } from "react";
import NotFound from "../pages/NotFound";

const Paths = () => {
  const { logado } = useContext(Context);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {logado && (
            <>
              <Route path="/Home" element={<Home />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Paths;
