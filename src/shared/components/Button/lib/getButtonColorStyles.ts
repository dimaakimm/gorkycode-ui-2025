import { css } from "styled-components";

import { ButtonColorType } from "../model/button.types";

export const getButtonColorStyles = ($color: ButtonColorType) => {
  switch ($color) {
    case "blue":
      return css`
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white} !important;
      `;
    case "black":
      return css`
        background-color: ${({ theme }) => theme.colors.gray.g9};
        color: ${({ theme }) => theme.colors.white};
      `;
    case "gray":
      return css`
        background-color: ${({ theme }) => theme.colors.gray.g80};
        color: ${({ theme }) => theme.colors.white} !important;
      `;
    case "white":
      return css`
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
      `;
    case "transparentWhite":
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.white};
      `;
    case "lightGray":
      return css`
        background-color: ${({ theme }) => theme.colors.gray.f4};
        color: ${({ theme }) => theme.colors.black};
      `;
  }
};

export const getButtonHoverColorStyles = ($color: ButtonColorType) => {
  switch ($color) {
    case "gray":
      return css`
        background-color: ${({ theme }) => theme.colors.gray.g9};
      `;
    case "blue":
      return css`
        background-color: #042334;
      `;
    case "lightGray":
      return css`
        background-color: ${({ theme }) => theme.colors.gray.d9};
      `;
    case "white":
      return css`
        background-color: ${({ theme }) => theme.colors.gray.f4};
      `;
  }
};
