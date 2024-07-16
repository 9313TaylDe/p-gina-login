import React from "react";

import "../App.css";

const NotFounds = () => {
  return (
    <>
      <div className="pagenot">
        <div className="login">
          <h1>Página não encontrada</h1>
        </div>
        <button>
          <a href="/">Página de login</a>
        </button>
      </div>
    </>
  );
};

export default NotFounds;
