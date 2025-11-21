"use client";

import { FC, PropsWithChildren } from "react";

import { SPageContent } from "./publicLayout.styles";

export const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SPageContent>{children}</SPageContent>
    </>
  );
};
