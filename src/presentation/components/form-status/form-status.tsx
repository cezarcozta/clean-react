import { Spinner } from "@/presentation/components/spinner/spinner";
import React from "react";
import Styles from "./form-status-styles.scss";

export function FormStatus() {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  );
}