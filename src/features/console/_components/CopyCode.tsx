"use client";

import React from "react";

import { Icon, PixelIcon } from "@foundation-ui/icons";
import { Tooltip, Button } from "@foundation-ui/components";

function CopyCode({
  value,
  delay = 1000,
}: {
  value: string | null;
  delay?: number;
}) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    if (!value) return;

    await navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), delay);
    });

    clearTimeout(delay);
  };

  return (
    <Tooltip content={copied ? "Copied!" : "Copy"}>
      <Button
        variant="ghost"
        onClick={copyToClipboard}
        disabled={typeof value === typeof null}
      >
        <Icon>
          <PixelIcon.Clipboard />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default CopyCode;
