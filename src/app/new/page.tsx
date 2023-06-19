import Link from "next/link";
import { prisma } from "../../../db";
import { redirect } from "next/navigation";

export default function Page() {
  const createTodo = async (data: FormData) => {
    "use server";

    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Title is invalid");
    }

    await prisma.todo.create({ data: { title, complete: false } });

    redirect("/");
  };
  return (
    <>
      <div className="navbar bg-base-100 justify-between">
        <a className="btn btn-ghost normal-case text-xl">New</a>
      </div>
      <form action={createTodo} className="flex flex-col gap-4 w-80">
        <input
          name="title"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <div className="self-end flex flex-row gap-2">
          <Link href="..">
            <button className="btn btn-outline btn-error w-24">Cancel</button>
          </Link>
          <button type="submit" className="btn btn-outline btn-success w-24">
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}
