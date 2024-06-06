import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";

const Page: React.FC = () => {
  return (
    <article>
      <TodoList />

      <TodoForm />
    </article>
  );
};

export default Page;
