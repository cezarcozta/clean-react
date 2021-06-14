import React, { useState } from "react";
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from "../../../presentation/components/";
import Context from "../../contexts/form/form-context";
import Styles from "./login-styles.scss";

export function Login() {
  const [state, setState] = useState({
    isLoading: false,
  });

  const [errorState, setErrorState] = useState({
    main: "",
    email: "Campo obrigatório",
    password: "Campo obrigatório",
  });

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <Context.Provider value={{ state, errorState }}>
        <form className={Styles.form}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="e-mail" />

          <Input type="password" name="password" placeholder="senha" />

          <button
            data-testid="submit"
            className={Styles.submit}
            type="submit"
            disabled
          >
            Entrar
          </button>

          <a href="#" className={Styles.link}>
            Cadastre-se
          </a>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  );
}
