import React, { FC } from "react";
import { DotLoader } from "react-spinners";

import { LoaderProps } from "../model/loader.types";

export const Loader: FC<LoaderProps> = ({ size = 35, color = "#999999" }) => {
  return <DotLoader size={size} color={color} />;
};
