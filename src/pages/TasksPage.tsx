import {
  IonPage,
  IonContent,
  IonButton,
  IonList,
  IonItem
} from '@ionic/react'

import { useHistory } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import useAuth from "../hooks/useAuth";

const TasksPage: React.FC = () => {

  const { tasks, deleteTask } = useTasks();
  const { logout } = useAuth();
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Tasks</h2>

        <IonButton onClick={() => history.push("/task/new")}>
          Nueva tarea
        </IonButton>

        <IonButton color="danger" onClick={logout}>
          Logout
        </IonButton>

        <IonList>
          {tasks.map((t: any) => (
            <IonItem key={t.id} button onClick={() => history.push(`/task/${t.id}`)}>
              {t.title}
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  )
}

export default TasksPage;