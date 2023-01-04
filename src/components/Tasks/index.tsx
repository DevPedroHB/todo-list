import { TaskProps } from "../../App";
import clipboardImg from "../../assets/clipboard.svg";
import { Task } from "../Task";
import styles from "./styles.module.css";

interface TasksProps {
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
}

export function Tasks({ tasks, setTasks }: TasksProps) {
  function handleCompleteTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return { ...task };
        }
      })
    );
  }

  function handleDelete(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <strong>
          Tarefas criadas
          <span>{tasks.length}</span>
        </strong>
        <strong>
          Concluídas
          {tasks.length === 0 ? (
            <span>0</span>
          ) : (
            <span>
              {tasks.filter((task) => task.completed).length} de {tasks.length}
            </span>
          )}
        </strong>
      </div>
      {tasks.length === 0 && (
        <div className={styles.empty}>
          <img src={clipboardImg} alt="Ícone clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            completed={task.completed}
            handleCompleteTask={handleCompleteTask}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
