import { FormEvent, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import "./global.css";

export interface TaskProps {
  id: string;
  content: string;
  completed: boolean;
}

export function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleNewTask(e: FormEvent) {
    e.preventDefault();

    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), content: newTaskText, completed: false },
    ]);
    setNewTaskText("");
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NewTask
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
          handleNewTask={handleNewTask}
        />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  );
}
