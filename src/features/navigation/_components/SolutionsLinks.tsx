"use client";

import React from "react";
import styled from "styled-components";

import { DropdownMenu } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

const SilentItem = styled(DropdownMenu.Item)`
  &:hover,
  &:active {
    background: transparent !important;
  }
`;

function SolutionsLinks() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger variant="ghost">
          <span className="fs-medium-10">Solutions</span>
          <Icon>
            <Icon.DoubleChevron />
          </Icon>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content sizing="large">
          <SilentItem className="grid" disabled>
            Tokens Engine
            <span className="fs-medium-10 opacity-default-30">
              JSON Based Design Tokens Engine
            </span>
          </SilentItem>
          <SilentItem className="grid" disabled>
            Components
            <span className="fs-medium-10 opacity-default-30">
              Production Ready React Components
            </span>
          </SilentItem>
          <SilentItem className="grid" disabled>
            Behavior Analytics
            <span className="fs-medium-10 opacity-default-30">
              Programmatic usage of Behavior Analytics
            </span>
          </SilentItem>

          <SilentItem className="grid" disabled>
            CLI
            <span className="fs-medium-10 opacity-default-30">
              Start React, NextJS and Electron Apps
            </span>
          </SilentItem>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}

export default SolutionsLinks;
