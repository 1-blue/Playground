"use client";

import { v4 as uuidv4 } from "uuid";
import { Button, TextInput } from "flowbite-react";

import { trpc } from "#fe/utils/trpc";

const TodoForm = () => {
  const createMutation = trpc.todos.create.useMutation();
  const utils = trpc.useUtils();

  const createTodoAction: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) return;

    const formData = new FormData(e.target);
    const title = formData.get("title");

    if (typeof title !== "string") return;

    const id = uuidv4();

    await createMutation.mutateAsync({ id, title, type: "TODO" });

    utils.todos.getAll.setData(undefined, (prev) => [
      ...(prev ?? []),
      { id, title, type: "TODO" },
    ]);
  };

  return (
    <form
      className="mt-8 w-full flex justify-center items-center gap-2"
      onSubmit={createTodoAction}
    >
      <TextInput
        id="title"
        name="title"
        type="text"
        placeholder="간지나게 숨쉬기 ..."
        required
      />
      <Button type="submit">추가하기</Button>
    </form>
  );
};

export default TodoForm;
