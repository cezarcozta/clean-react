import React, { useContext } from "react";
import { Spinner } from "../../../presentation/components/spinner/spinner";
import Context from "../../../presentation/contexts/form/form-context";
import Styles from "./form-status-styles.scss";

export function FormStatus() {
  const { state, errorState } = useContext(Context);
  return (
    <div test-id="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && (
        <span className={Styles.error}>{errorState.main}</span>
      )}
    </div>
  );
}
