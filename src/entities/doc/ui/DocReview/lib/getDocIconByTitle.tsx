import { ReactNode } from "react";

import { DOCFile, PdfFile } from "@/shared/assets";

export const getDocIconByTitle = (title: string): ReactNode => {
  const lowerTitle = title.toLowerCase();
  let icon;
  if (lowerTitle.endsWith(".pdf")) {
    icon = <PdfFile />;
  }
  if (lowerTitle.endsWith(".doc") || lowerTitle.endsWith(".docx")) {
    icon = <DOCFile />;
  }

  return icon;
};
