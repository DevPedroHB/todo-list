import { Trash } from "phosphor-react";
import styles from "./styles.module.css";

interface TaskProps {
  id: string;
  content: string;
  completed: boolean;
  handleCompleteTask: (id: string) => void;
  handleDelete: (id: string) => void;
}

export function Task({
  id,
  content,
  completed,
  handleCompleteTask,
  handleDelete,
}: TaskProps) {
  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCompleteTask(id)}
      />
      <p>{content}</p>
      <button onClick={() => handleDelete(id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
