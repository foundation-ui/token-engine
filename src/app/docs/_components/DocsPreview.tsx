"use client";

import React from "react";
import styled from "styled-components";

import DocsCodePreview from "./DocsCodePreview";

import { Tabs } from "@foundation-ui/components";
import { TextMuted } from "@/components";

const PreviewBox = styled.div`
  border-radius: var(--measurement-medium-30);
  background-color: var(--contrast-color);

  min-height: var(--breakpoint-mobile);
`;

function DocsPreview({
  code,
  language,
  component,
}: {
  code: string;
  language?: string;
  component: React.ReactNode;
}) {
  return (
    <Tabs.Root>
      <Tabs className="flex align-center g-medium-30 m-b-medium-60">
        <Tabs.Trigger value="demo">Demo</Tabs.Trigger>
        <TextMuted className="opacity-default-10">|</TextMuted>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
      </Tabs>

      <PreviewBox>
        <Tabs.Content value="demo">{component}</Tabs.Content>
        <Tabs.Content value="code">
          <DocsCodePreview code={code} language={language} />
        </Tabs.Content>
      </PreviewBox>
    </Tabs.Root>
  );
}

export default DocsPreview;
