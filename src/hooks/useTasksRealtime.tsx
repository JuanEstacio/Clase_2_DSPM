import { useEffect, useState } from "react";
import { dbRealtime } from "../firebase/config";
import { ref, onValue, push, remove } from "firebase/database";

interface Task {
  id?: string;
  title: string;
}

const useTasksRealtime = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksRef = ref(dbRealtime, "tasks");

    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const list = data
        ? Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }))
        : [];

      setTasks(list);
    });

  }, []);

  const addTask = async (task: Task) => {
    const tasksRef = ref(dbRealtime, "tasks");
    await push(tasksRef, task);
  };

  const deleteTask = async (id: string) => {
    await remove(ref(dbRealtime, `tasks/${id}`));
  };

  return { tasks, addTask, deleteTask };
};

export default useTasksRealtime;