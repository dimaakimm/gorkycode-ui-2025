import { ReactNode } from "react";

export interface IError {
  title: string;
  description: string;
  link?: string;
}

export interface ErrorBlockProps {
  title: string;
  errors: IError[];
  icon: ReactNode;
  color: string;
}
