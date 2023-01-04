import { PlusCircle } from "phosphor-react";
import { FormEvent } from "react";
import styles from "./styles.module.css";

interface NewTaskProps {
  newTaskText: string;
  setNewTaskText: (newTaskText: string) => void;
  handleNewTask: (e: FormEvent) => void;
}

export function NewTask({
  newTaskText,
  setNewTaskText,
  handleNewTask,
}: NewTaskProps) {
  return (
    <form className={styles.form} onSubmit={handleNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        required
      />
      <button disabled={newTaskText.length === 0}>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
