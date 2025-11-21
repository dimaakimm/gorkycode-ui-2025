import { FC } from "react";

import { ButtonProps } from "../model/button.types";
import { SButton } from "./button.styles";

export const Button: FC<ButtonProps> = ({
  color = "black",
  disabled = false,
  ...props
}) => {
  return (
    <SButton
      disabled={disabled}
      $color={disabled ? "gray" : color}
      {...props}
    />
  );
};
