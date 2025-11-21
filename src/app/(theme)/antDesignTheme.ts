import { ThemeConfig } from "antd/es/config-provider/context";
import { DefaultTheme } from "styled-components";

export const getAntdTheme = (
  styledComponentsTheme: DefaultTheme,
): ThemeConfig => ({
  token: {
    fontFamily: `var(--font-sansation)`,
    fontSize: 16,
    borderRadius: 12,
    lineHeight: 1,
  },
  components: {
    Form: {
      itemMarginBottom: 16,
      verticalLabelPadding: "0 0 8px",
      labelFontSize: 14,
    },
    Button: {
      borderRadius: 100,
      colorPrimaryHover: styledComponentsTheme.colors.gray.d7,
    },
    Select: {
      colorPrimary: styledComponentsTheme.colors.gray.d7,
      colorPrimaryHover: styledComponentsTheme.colors.gray.d7,
      colorPrimaryBorder: styledComponentsTheme.colors.gray.d7,
      optionSelectedBg: `${styledComponentsTheme.colors.gray.d7}`,
      multipleItemBg: `${styledComponentsTheme.colors.gray.d7}`,
    },
    Slider: {
      colorPrimary: styledComponentsTheme.colors.gray.d7,
      colorPrimaryBorder: styledComponentsTheme.colors.gray.d7,
      trackBg: styledComponentsTheme.colors.gray.d7,
      trackHoverBg: styledComponentsTheme.colors.gray.d7,
      handleColor: styledComponentsTheme.colors.gray.d7,
      handleActiveColor: styledComponentsTheme.colors.gray.d7,
      dotBorderColor: `${styledComponentsTheme.colors.gray.d7}`,
      dotActiveBorderColor: styledComponentsTheme.colors.gray.d7,
      railBg: "#f0f0f0",
      railHoverBg: "#e1e1e1",
      handleLineWidth: 2,
      handleSize: 16,
      handleSizeHover: 18,
      controlSize: 16,
      colorTextDisabled: "#00000040",
      colorBgContainerDisabled: "#00000040",
    },
    Tabs: {
      colorPrimary: styledComponentsTheme.colors.gray.d7,
      colorPrimaryHover: styledComponentsTheme.colors.gray.d7,
      colorPrimaryActive: styledComponentsTheme.colors.gray.d7,
      itemSelectedColor: styledComponentsTheme.colors.gray.d7,
      itemHoverColor: styledComponentsTheme.colors.gray.d7,
      itemActiveColor: styledComponentsTheme.colors.gray.d7,
      inkBarColor: styledComponentsTheme.colors.gray.d7,
    },
  },
});
