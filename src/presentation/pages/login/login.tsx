import React, { useState } from "react";
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from "../../../presentation/components/";
import Context from "../../contexts/form/form-context";
import Styles from "./login-styles.scss";

type LoginStateProps = {
  isLoading: boolean;
  hasMessageError: string;
};

export function Login() {
  const [state, setState] = useState<LoginStateProps>({
    isLoading: false,
    hasMessageError: "",
  });

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="e-mail" />

          <Input type="password" name="password" placeholder="senha" />

          <button className={Styles.submit} type="submit">
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
