import React from "react";
import "./Button.css";

type ButtonProps = {
  text?: string;
  type?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
};

export const Button = ({
  text,
  type,
  isDisabled,
  isVisible,
  onClick
}: ButtonProps) => {
  const _getClassName = () => {
    return ["kuc-btn", type === "submit" ? "submit" : "normal"]
      .join(" ")
      .trim();
  };
  if (isVisible === false) {
    return null;
  }
  return (
    <button onClick={onClick} className={_getClassName()} disabled={isDisabled}>
      {text}
    </button>
  );
};
