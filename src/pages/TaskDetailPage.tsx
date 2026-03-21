import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/react'

import { useParams, useHistory } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

const TaskDetailPage: React.FC = () => {

  const { id }: any = useParams();
  const { tasks, deleteTask } = useTasks();
  const history = useHistory();

  const task = tasks.find((t: any) => t.id == id);

  if (!task) return <IonPage><IonContent>No encontrada</IonContent></IonPage>;

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>{task.title}</h2>

        <IonButton color="danger" onClick={() => {
          deleteTask(task.id);
          history.push("/tasks");
        }}>
          Eliminar
        </IonButton>

      </IonContent>
    </IonPage>
  )
}

export default TaskDetailPage;