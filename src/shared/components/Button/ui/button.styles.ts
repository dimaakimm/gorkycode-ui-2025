import { Button } from "antd";
import styled from "styled-components";

import {
  getButtonColorStyles,
  getButtonHoverColorStyles,
} from "../lib/getButtonColorStyles";
import { SButtonProps } from "../model/button.types";

export const SButton = styled(Button).attrs<SButtonProps>({})`
  &.ant-btn-variant-outlined {
    ${({ theme }) => theme.font.p2}
    ${({ $color }) => getButtonColorStyles($color)};
    padding: 12px 32px;
    min-height: max-content;
    min-width: max-content;
    color: unset;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray.d2};
  }
  &.ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover {
    ${({ $color }) => getButtonHoverColorStyles($color)};
  }
  &.ant-btn [class^="ant-btn"] {
    height: 32px;
    display: flex;
    align-items: center;
  }
`;
