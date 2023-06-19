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
      <ul className="menu bg-base-200 w-32 rounded-box">
        {todos.map((todo: Todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </>
  );
}
