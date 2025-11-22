import { ReactNode } from "react";
import { UploadProps } from "antd";

import { DocType } from "@/entities/doc/model/docsForm.types";

export interface DocUploadProps extends UploadProps {
  FileIcon: ReactNode;
  title: string;
  description?: string;
  docType?: DocType;
  downloaded?: boolean;
  enableFetch?: boolean;
}
