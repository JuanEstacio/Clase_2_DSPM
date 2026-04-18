import { createContext, useContext, useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
}

interface TasksContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
}

const TasksContext = createContext<TasksContextType | null>(null);

export const TasksProvider: React.FC<any> = ({ children }) => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask = {
      id: Date.now(),
      title
    };
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => useContext(TasksContext);