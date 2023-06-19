import Link from "next/link";
import { prisma } from "../../db";
import { TodoItem } from "@/components/TodoItem";
interface Todo {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const toggleTodo = async (id: string, complete: boolean) => {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete: complete } });
};

const getTodos = () => {
  return prisma.todo.findMany();
};

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <div className="navbar bg-base-100 justify-between">
        <a className="btn btn-ghost normal-case text-xl">Todo</a>
        <Link href="/new">
          {" "}
          <button className="btn btn-success hover:bg-[#003320] hover:text-[#36d399] border-none">
            New
          </button>
        </Link>
      </div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        {todos.map((todo: Todo) => {
          return <TodoItem toggleTodo={toggleTodo} key={todo.id} {...todo} />;
        })}
      </ul>
    </>
  );
}
