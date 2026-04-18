import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
}

const useTasks = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  const save = (data: Task[]) => {
    setTasks(data);
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  const addTask = (task: any) => {
    const newTask = { ...task, id: Date.now() };
    save([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    save(tasks.filter(t => t.id !== id));
  };

  return { tasks, addTask, deleteTask };
};

export default useTasks;