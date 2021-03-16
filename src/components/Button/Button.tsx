import React from "react";
import "./Button.scss";

export interface IButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button(props: IButtonProps) {
  return (
    <button className="botes-button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}
