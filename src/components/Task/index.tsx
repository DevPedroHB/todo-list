import { Trash } from "phosphor-react";
import styles from "./styles.module.css";

export interface TaskProps {
  content: string;
  completed: boolean;
}

export function Task({ content, completed }: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" checked={completed} />
      <p>{content}</p>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}
