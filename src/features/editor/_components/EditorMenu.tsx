"use client";

import React from "react";

import FunctionSelector from "./FunctionSelector";
import FormatCode from "./FormatCode";
import ResetCode from "./ResetCode";
import CopyCode from "./CopyCode";
import RunCode from "./RunCode";

import { TextMuted } from "@/components/shared/TextMuted";
import { Dialog } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

import { engine_template } from "@foundation-ui/tokens";

type EditorMenuProps = {
  value: string;
  defaultValue?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (value: string) => void;
};

function EditorMenu({
  value,
  defaultValue,
  setValue,
  setError,
  onChange,
}: EditorMenuProps) {
  const resetEditor = () => {
    setValue(defaultValue ?? JSON.stringify(engine_template, null, 4));
    setError(null);
  };

  return (
    <nav className="flex align-start justify-between m-b-medium-60">
      <div className="flex g-medium-10 align-center">
        <FunctionSelector />

        <TextMuted className="opacity-default-10 p-x-medium-30">|</TextMuted>
        <ResetCode
          defaultValue={defaultValue}
          setValue={setValue}
          setError={setError}
        />
        <TextMuted className="opacity-default-10 p-x-medium-30">|</TextMuted>
        <div className="flex g-medium-60 align-center">
          <FormatCode
            value={value}
            setValue={setValue}
            setError={setError}
            onChange={onChange}
          />
          <CopyCode value={value} />
        </div>
        <TextMuted className="opacity-default-10 p-x-medium-30">|</TextMuted>
        <RunCode />
      </div>

      <Dialog.Control sizing="small" variant="ghost" onClick={resetEditor}>
        <Icon>
          <Icon.Close />
        </Icon>
      </Dialog.Control>
    </nav>
  );
}

export default EditorMenu;
