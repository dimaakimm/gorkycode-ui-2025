import { ReactNode } from "react";
import { UploadProps } from "antd";

export interface DocUploadProps extends UploadProps {
  FileIcon: ReactNode;
  title: string;
  description?: string;
}
