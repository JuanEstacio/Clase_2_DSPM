import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  setupIonicReact
} from '@ionic/react';

import { useState, useEffect } from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

/* Ionic CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

import './theme/variables.css';

setupIonicReact();

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  // Cargar tareas al iniciar
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  // Guardar cada cambio
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <IonApp>
      <IonPage>

        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle className="ion-text-center">
              Task Manager
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">

          <IonCard>
            <IonCardContent>
              <TaskForm onAdd={addTask} />
            </IonCardContent>
          </IonCard>

          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />

        </IonContent>

      </IonPage>
    </IonApp>
  );
};

export default App;