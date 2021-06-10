import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from "@/presentation/components/";
import React from "react";
import Styles from "./login-styles.scss";

export function Login() {
  return (
    <div className={Styles.login}>
      <LoginHeader />

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

      <Footer />
    </div>
  );
}
