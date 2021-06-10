import React from "react";
import { Logo } from "../logo/logo";
import Styles from "./login-header-styles.scss";

export function LoginHeader() {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  );
}
