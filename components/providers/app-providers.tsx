"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ColorModeProvider, js_design_tokens } from "@foundation-ui/tokens";
import {
  generateAlpha,
  generateCSSVariables,
  generateDimensionClasses,
  generateFontSizesClasses,
  generateLayoutClasses,
  generateOpacityClasses,
  generateSizeClasses,
} from "@foundation-ui/core";

import { createGlobalStyle } from "styled-components";
import { ResetStyles, TypographyRoot } from "@foundation-ui/styles";

const { design_tokens } = js_design_tokens;

const cssLayoutClasses = generateLayoutClasses();
const cssWidthHeightClasses = generateDimensionClasses();
const cssSizeClasses = generateSizeClasses(design_tokens.measurement);
const cssFSClasses = generateFontSizesClasses(design_tokens.fontsize);
const cssOpacityClasses = generateOpacityClasses(design_tokens.opacity);

const cssVariables = generateCSSVariables({
  name: js_design_tokens.name,
  design_tokens: {
    color: [
      ...design_tokens.color,
      {
        name: "mono-dark",
        base: { hex: "#1C1818" },
        alpha: generateAlpha("#1C1818"),
        tint: [],
        shade: [],
      },
      {
        name: "mono-darker",
        base: { hex: "#191515" },
        alpha: generateAlpha("#191515"),
        tint: [],
        shade: [],
      },
      {
        name: "mono-white",
        base: { hex: "#EDEDE8" },
        alpha: generateAlpha("#EDEDE8"),
        tint: [],
        shade: [],
      },
    ],
    measurement: [...design_tokens.measurement],
    fontsize: [...design_tokens.fontsize],
    opacity: [...design_tokens.opacity],
    depth: [...design_tokens.depth],
  },
});

const CSSRoot = createGlobalStyle`
	:root {
		${cssVariables.color}
		${cssVariables.alpha}
		${cssVariables.tint}
		${cssVariables.shade}
		${cssVariables.fontsize}
		${cssVariables.measurement}
		${cssVariables.depth}
		${cssVariables.opacity}

		${cssSizeClasses}
		${cssFSClasses}
		${cssOpacityClasses}
		${cssLayoutClasses}
    ${cssWidthHeightClasses}

    --breakpoint-mobile: 375px;
		--breakpoint-mobile-large: 425px;
		--breakpoint-tablet-small: 672px;
		--breakpoint-tablet: 768px;
		--breakpoint-tablet-landscape: 1024px;
		--breakpoint-desktop-small: 1240px;
		--breakpoint-desktop: 1440px;
		--breakpoint-deskto-large: 1589px;
	}
`;

export function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider
        config={{
          contrast: {
            light: "var(--color-mono-light)",
            dark: "var(--color-mono-dark)",
          },
        }}
      >
        <ResetStyles />
        <TypographyRoot />
        <CSSRoot />

        {children}
      </ColorModeProvider>
    </QueryClientProvider>
  );
}
