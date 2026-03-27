import {
  IonPage, IonContent, IonInput,
  IonButton, IonList, IonItem
} from "@ionic/react";

import { useState } from "react";
import useTasksRealtime from "../hooks/useTasksRealtime";
import useNetwork from "../hooks/useNetwork";

const TasksPage: React.FC = () => {

  const { tasks, addTask, deleteTask } = useTasksRealtime();
  const online = useNetwork();

  const [title, setTitle] = useState("");

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Tasks</h2>

        {!online && <p style={{color:"red"}}>Sin conexión</p>}

        <IonInput placeholder="Tarea" onIonChange={e => setTitle(e.detail.value!)} />

        <IonButton
          disabled={!online}
          onClick={() => addTask({ title })}
        >
          Agregar
        </IonButton>

        <IonList>
          {tasks.map(t => (
            <IonItem key={t.id}>
              {t.title}
              <IonButton
                color="danger"
                disabled={!online}
                onClick={() => deleteTask(t.id!)}
              >
                X
              </IonButton>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default TasksPage;