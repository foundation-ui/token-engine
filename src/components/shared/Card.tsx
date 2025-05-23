"use client";

import styled from "styled-components";

export const CardBody = styled.article`
  text-decoration: none;

  border: var(--measurement-small-30) solid var(--font-color-alpha-10);
  border-radius: var(--measurement-medium-30);

  background: var(--body-color);
  background-image: linear-gradient(
    45deg,
    var(--body-color) 0%,
    var(--contrast-color) 100%
  );

  &[data-mode="link"] {
    box-shadow: var(--measurement-small-30) var(--measurement-small-30)
      var(--measurement-small-10) var(--alpha-mono-darkest-10);

    will-change: box-shadow;
    transition: ease-in-out 0.2s;

    &:hover {
      box-shadow: none;
    }
  }
`;
