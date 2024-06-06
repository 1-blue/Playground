"use client";

import { Button, Spinner, Table } from "flowbite-react";

import { trpc } from "#fe/utils/trpc";

const TodoList = () => {
  const { data, isLoading } = trpc.todos.getAll.useQuery();
  const utils = trpc.useUtils();

  const updateMutation = trpc.todos.updateOne.useMutation();
  const deleteMutation = trpc.todos.deleteOne.useMutation();

  const updateTodoAction = async ({
    id,
    title,
  }: {
    id: string;
    title: string;
  }) => {
    await updateMutation.mutateAsync({ id, title: title + "-수정" });

    utils.todos.getAll.setData(undefined, (prev) =>
      prev?.map((todo) =>
        todo.id === id ? { ...todo, title: title + "-수정" } : todo
      )
    );
  };
  const deleteTodoAction = async (id: string) => {
    await deleteMutation.mutateAsync({ id });

    utils.todos.getAll.setData(undefined, (prev) =>
      prev?.filter((todo) => todo.id !== id)
    );
  };

  if (isLoading) {
    return (
      <div className="text-center w-full flex justify-center items-center h-96">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>할 일</Table.HeadCell>
          <Table.HeadCell>수정</Table.HeadCell>
          <Table.HeadCell>삭제</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {data?.map((todo) => (
            <Table.Row
              key={todo.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 w-full *:text-center *:py-2"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {todo.title}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Button
                  type="button"
                  color="blue"
                  onClick={() =>
                    updateTodoAction({ id: todo.id, title: todo.title })
                  }
                >
                  수정
                </Button>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Button
                  type="button"
                  color="red"
                  onClick={() => deleteTodoAction(todo.id)}
                >
                  삭제
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TodoList;
