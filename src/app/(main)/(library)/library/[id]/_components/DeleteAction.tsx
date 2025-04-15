"use client";

import React from "react";

import { useMutation } from "@tanstack/react-query";

import { Spinner } from "@/components";
import { Button, Tooltip } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { DeleteMock } from "@/server/actions";

function DeleteAction({ libraryId }: { libraryId: number }) {
  const { mutate, isPending } = useMutation({
    mutationFn: DeleteMock,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });

  return (
    <Tooltip content="Delete">
      <Button variant="ghost" onClick={() => mutate(libraryId)}>
        {isPending ? (
          <Spinner data-variant="inner" />
        ) : (
          <Icon width={18} height={18}>
            <PixelIcon.Delete />
          </Icon>
        )}
      </Button>
    </Tooltip>
  );
}

export default DeleteAction;
