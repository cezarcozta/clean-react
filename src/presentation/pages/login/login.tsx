import Footer from "@/presentation/components/footer/footer";
import { FormStatus } from "@/presentation/components/form-status/form-status";
import { Input } from "@/presentation/components/input/input";
import Header from "@/presentation/components/login-header/login-header";
import React from "react";
import Styles from "./login-styles.scss";

export function Login() {
  return (
    <div className={Styles.login}>
      <Header />

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
