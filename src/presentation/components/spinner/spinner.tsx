import React from "react";
import Styles from "./spinner-styles.scss";

type SpinnerProps = React.HTMLAttributes<HTMLElement>;

export function Spinner({ className }: SpinnerProps) {
  return (
    <div className={[Styles.spinner, className].join(" ")}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
