import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/react';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../services/firebase';

import TasksPage from './TasksPage';
import TaskFormPage from './TaskFormPage';

const Home: React.FC = () => {

  const history = useHistory();

  const [view, setView] = useState<"menu" | "tasks" | "new">("menu");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        history.replace("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await auth.signOut();
    history.replace("/login");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        {/* MENU */}
        {view === "menu" && (
          <>
            <h2>Home</h2>

            <IonButton expand="block" onClick={() => setView("tasks")}>
              Ver tareas
            </IonButton>

            <IonButton expand="block" onClick={() => setView("new")}>
              Nueva tarea
            </IonButton>

            <IonButton expand="block" color="danger" onClick={logout}>
              Logout
            </IonButton>
          </>
        )}

        {/* LISTA */}
        {view === "tasks" && (
          <TasksPage goBack={() => setView("menu")} />
        )}

        {/* FORM */}
        {view === "new" && (
          <TaskFormPage goBack={() => setView("tasks")} />
        )}

      </IonContent>
    </IonPage>
  );
};

export default Home;