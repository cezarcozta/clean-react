import { Validation } from "@/presentation/protocols/validation";
import React, { useEffect, useState } from "react";
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from "../../../presentation/components/";
import Context from "../../contexts/form/form-context";
import Styles from "./login-styles.scss";

type Props = {
  validation: Validation;
};

export function Login({ validation }: Props) {
  const [state, setState] = useState({
    isLoading: false,
    mainError: "",
    email: "",
    emailError: "Campo obrigatório",
    password: "",
    passwordError: "Campo obrigatório",
  });

  useEffect(() => {
    validation.validate({ email: state.email });
  }, [state.email]);
  useEffect(() => {
    validation.validate({ email: state.password });
  }, [state.password]);

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="digite seu e-mail" />

          <Input
            type="password"
            name="password"
            placeholder="digite sua senha"
          />

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
