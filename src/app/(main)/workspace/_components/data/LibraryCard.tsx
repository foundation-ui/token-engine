"use client";

import React from "react";

import Link from "next/link";

import { Divider, Tooltip } from "@foundation-ui/components";
import { CardBody } from "@/components";

import { formatDistanceToNow } from "date-fns";
import type { libraries_table as librariesSchema } from "@/server/db/schema";
import { Icon, PixelIcon } from "@foundation-ui/icons";

function LibraryCard({
  id,
  name,
  description,
  updatedAt,
}: typeof librariesSchema.$inferSelect) {
  return (
    <CardBody
      as={Link}
      href={`workspace/library/${String(id)}`}
      className="p-medium-60 grid g-medium-30"
      data-mode="link"
    >
      <hgroup>
        <h6 className="fs-medium-20">{name}</h6>
        <p className="opacity-default-30 fs-medium-10">
          {description === "" ? "No description" : description}
        </p>
      </hgroup>
      <Divider />
      <footer className="fs-medium-10 flex align-center justify-between g-medium-30">
        <span className="opacity-default-60">
          Updated&nbsp;
          {updatedAt &&
            formatDistanceToNow(new Date(Number(updatedAt)), {
              addSuffix: true,
              includeSeconds: true,
            })}
        </span>

        <Tooltip content="Go to Details">
          <Icon>
            <PixelIcon.Open />
          </Icon>
        </Tooltip>
      </footer>
    </CardBody>
  );
}

export default LibraryCard;
