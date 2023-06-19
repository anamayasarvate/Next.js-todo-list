"use client";

interface TodoItemProps {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
}

export const TodoItem = ({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemProps) => {
  return (
    <li className="flex flex-row justify-start items-center">
      <input
        onChange={(e) => toggleTodo(id, e.target.checked)}
        type="checkbox"
        defaultChecked={complete}
        className="checkbox checbox-xs peer"
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
};
