import { createContext, useContext, useState } from "react";

const TasksContext = createContext<any>(null);

export const TasksProvider = ({ children }: any) => {

  const [tasks, setTasks] = useState<any[]>([]);

  const addTask = (task: any) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  };

  const updateTask = (task: any) => {
    setTasks(prev =>
      prev.map(t => t.id === task.id ? task : t)
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <TasksContext.Provider value={{
      tasks,
      addTask,
      updateTask,
      deleteTask
    }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);