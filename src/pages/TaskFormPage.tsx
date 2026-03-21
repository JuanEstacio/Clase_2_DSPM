import {
  IonPage,
  IonContent,
  IonInput,
  IonButton
} from '@ionic/react'

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

const TaskFormPage: React.FC = () => {

  const { addTask } = useTasks();
  const history = useHistory();

  const [title, setTitle] = useState("");

  const handleSave = () => {
    addTask({ title });
    history.push("/tasks");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Nueva tarea</h2>

        <IonInput
          placeholder="Título"
          onIonChange={e => setTitle(e.detail.value!)}
        />

        <IonButton onClick={handleSave}>
          Guardar
        </IonButton>

      </IonContent>
    </IonPage>
  )
}

export default TaskFormPage;