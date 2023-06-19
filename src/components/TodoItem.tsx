interface TodoItemProps {
  id: string;
  title: string;
  complete: boolean;
}

export const TodoItem = ({ id, title, complete }: TodoItemProps) => {
  return (
    <li className="flex flex-row justify-start items-center">
      <input type="checkbox" className="checkbox checbox-xs peer" />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
};
