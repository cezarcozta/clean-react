import { Logo } from "@/presentation/components/logo/logo";
import { Spinner } from "@/presentation/components/spinner/spinner";
import React from "react";
import Styles from "./login-styles.scss";

export function Login() {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>

        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>

        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="senha" />
          <span className={Styles.status}>🔴</span>
        </div>

        <button className={Styles.submit} type="submit">
          Entrar
        </button>

        <a href="#" className={Styles.link}>
          Cadastre-se
        </a>

        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  );
}
