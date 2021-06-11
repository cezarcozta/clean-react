import React, { useContext } from "react";
import { Spinner } from "../../../presentation/components/spinner/spinner";
import Context from "../../../presentation/contexts/form/form-context";
import Styles from "./form-status-styles.scss";

export function FormStatus() {
  const { isLoading, hasError } = useContext(Context);
  return (
    <div test-id="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {hasError && <span className={Styles.error}>Erro</span>}
    </div>
  );
}
