import { useState } from "react";
import clipboardImg from "../../assets/clipboard.svg";
import { Task, TaskProps } from "../Task";
import styles from "./styles.module.css";

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      content:
        "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat.",
      completed: false,
    },
    {
      content:
        "Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta.",
      completed: false,
    },
    {
      content:
        "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      completed: false,
    },
    {
      content:
        "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      completed: true,
    },
    {
      content:
        "Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      completed: true,
    },
  ]);

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
          <Task content={task.content} completed={task.completed} />
        ))}
      </div>
    </div>
  );
}
