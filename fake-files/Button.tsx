import React, { FunctionComponent } from "react";

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  theme?: "default" | "primary" | "danger" | "warning";
  small?: boolean;
  disabled?: boolean;
  className?: string;
  preventDefault?: boolean;
};

const Button: FunctionComponent<Props> = ({
  text,
  className,
  disabled,
  onClick,
  theme,
  preventDefault,
}) => {
  return (
    <button
      onClick={(event) => {
        if (preventDefault) event.preventDefault();
        onClick && onClick(event);
      }}
      data-theme={theme}
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
