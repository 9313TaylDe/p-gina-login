import React, { useContext, useState } from "react";
import Paths from "./components/Paths";
import "primeflex/primeflex.css";
import { Context } from "./contexts/AuthContext";
import { AuthContext } from "./contexts/AuthContext";
const App = () => {
  const [logado, setLogado] = useState(false);
  return (
    <>
      <AuthContext context={{ logado, setLogado }}>
        <Paths />
      </AuthContext>
    </>
  );
};
export default App;
