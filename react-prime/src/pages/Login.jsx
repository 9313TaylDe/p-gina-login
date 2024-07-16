import React, { useContext, useState } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import { Context } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit } = useForm();
  const { setLogado } = useContext(Context);
  const navigate = useNavigate();
  function Logar(dados) {
    if (dados.email === "expe@gmail.com" && dados.password === "1234") {
      setLogado(true);
      navigate("/home");
    }
  }

  return (
    <div className="flex align-items-center justify-content-center h-screen bg-primary-500 px-3">
      <form
        onSubmit={handleSubmit(Logar)}
        className="col-12 md:col-3 surface-0 p-3 border-round-md"
      >
        <h3 className="text-center text-4xl">Seja Bem-vindo</h3>

        <label
          htmlFor="email"
          className="block uppercase font-bold text-sm mb-1"
        >
          Email
        </label>
        <InputText
          id="email"
          type="email"
          placeholder="email@example.com"
          className="mb-3 w-full"
          {...register("email", { required: true })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="mb-3">
          <label
            htmlFor="password"
            className="block uppercase font-bold text-sm mb-1"
          >
            Senha
          </label>
          <IconField>
            <InputIcon
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className={`pi ${mostrarSenha ? "pi-eye" : "pi-eye-slash"}`}
              style={{ cursor: "pointer" }}
            />
            <InputText
              id="password"
              type={mostrarSenha ? "text" : "password"}
              placeholder="***************"
              className="w-full"
              {...register("password", { required: true })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </IconField>
        </div>

        <Button
          label="Entrar"
          type="submit"
          className="bg-primary-500 w-full"
        />
      </form>
    </div>
  );
};

export default Login;
