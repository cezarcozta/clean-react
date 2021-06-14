import React, { useContext } from "react";
import Context from "../../contexts/form/form-context";
import Styles from "./input-styles.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input(props: InputProps) {
  const { errorState } = useContext(Context);
  const error = errorState[props.name];
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };
  const getStatus = (): string => {
    return "🔴";
  };
  const getTitle = (): string => {
    return error;
  };
  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
}
