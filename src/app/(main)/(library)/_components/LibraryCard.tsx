"use client";

import React from "react";
import styled from "styled-components";

import { TextMuted } from "@/components/shared/TextMuted";
import { Divider } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";
import CardActions from "./CardActions";

const CardBody = styled.article`
  border: var(--measurement-small-30) solid var(--font-color-alpha-10);
  border-radius: var(--measurement-medium-30);

  box-shadow: var(--measurement-small-30) var(--measurement-small-30)
    var(--measurement-small-10) var(--alpha-mono-darkest-10);

  background: var(--body-color);
  background-image: linear-gradient(
    45deg,
    var(--body-color) 0%,
    var(--contrast-color) 100%
  );

  will-change: box-shadow;
  transition: ease-in-out 0.2s;

  &:hover {
    box-shadow: none;
  }
`;

type LibraryCardProps = {
  restricted: boolean;

  title: string;
  description: string;

  lastUpdateAt: string;

  lastUpdateId: string;
  libraryId: string;
};

function LibraryCard({
  title,
  restricted,
  description,
  lastUpdateAt,
  lastUpdateId,
  libraryId,
}: LibraryCardProps) {
  return (
    <CardBody className="">
      <hgroup className="p-b-medium-30 p-t-medium-60 p-x-medium-60 grid g-medium-10 ">
        <div className="flex align-center g-medium-10">
          <h6 className="fs-medium-10">{title}</h6>
          <Icon width={12} height={12} fillOpacity={0.3}>
            {restricted ? <Icon.Key /> : <Icon.Globe />}
          </Icon>
        </div>
        <p className="opacity-default-30 fs-medium-10"> {description}</p>
      </hgroup>

      <Divider />
      <footer className="flex justify-between align-center p-b-medium-60 p-t-medium-30 p-x-medium-60 fs-medium-10">
        <div>
          <span>{lastUpdateId}</span>
          <TextMuted className=" opacity-default-10">|</TextMuted>
          <span className="opacity-default-60">{lastUpdateAt}</span>&nbsp;
        </div>

        <CardActions libraryId={libraryId} />
      </footer>
    </CardBody>
  );
}

export default LibraryCard;
