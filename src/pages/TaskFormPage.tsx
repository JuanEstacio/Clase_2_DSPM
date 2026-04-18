import {
  IonPage,
  IonContent,
  IonInput,
  IonButton
} from '@ionic/react';

import { useState } from "react";
import useTasks from "../hooks/useTasks";

interface Props {
  goBack: () => void;
}

const TaskFormPage: React.FC<Props> = ({ goBack }) => {

  const { addTask } = useTasks();
  const [title, setTitle] = useState("");

  const handleSave = () => {
    if (!title) return;

    addTask({ title });
    setTitle("");
    goBack(); // vuelve a la lista
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Nueva tarea</h2>

        <IonInput
          placeholder="Título"
          value={title}
          onIonChange={e => setTitle(e.detail.value!)}
        />

        <IonButton expand="block" onClick={handleSave}>
          Guardar
        </IonButton>

        <IonButton expand="block" fill="clear" onClick={goBack}>
          Volver
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default TaskFormPage;