import React, { useContext } from "react";
import { Spinner } from "../../../presentation/components/spinner/spinner";
import Context from "../../../presentation/contexts/form/form-context";
import Styles from "./form-status-styles.scss";

export function FormStatus() {
  const { state } = useContext(Context);
  const { isLoading, mainError } = state;
  return (
    <div test-id="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span className={Styles.error}>{mainError}</span>}
    </div>
  );
}
