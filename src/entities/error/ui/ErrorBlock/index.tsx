import React, { FC } from "react";

import { LinkSvg } from "@/shared/assets";

import {
  SError,
  SErrorBlock,
  SErrorsSection,
  SErrorTitleSection,
  STitle,
} from "./errorBlock.styles";
import { ErrorBlockProps } from "../../model/errorBlock.types";

export const ErrorBlock: FC<ErrorBlockProps> = ({
  icon,
  errors,
  title,
  color,
}) => {
  return (
    <SErrorBlock style={{ border: `1px solid ${color}` }}>
      <STitle
        style={{
          backgroundColor: `${color}1A`,
        }}
      >
        {title}
      </STitle>
      <SErrorsSection style={{ borderTop: `1px solid ${color}` }}>
        {errors.map((err) => (
          <SError key={err.title}>
            <div style={{ color: color }}>{icon}</div>
            <div>
              <SErrorTitleSection>
                <div style={{ color: color }}>{err.title}</div>
                <div>
                  <LinkSvg />
                </div>
              </SErrorTitleSection>
              <div>{err.description}</div>
            </div>
          </SError>
        ))}
      </SErrorsSection>
    </SErrorBlock>
  );
};
