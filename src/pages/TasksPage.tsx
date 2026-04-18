import {
  IonPage,
  IonContent,
  IonButton,
  IonList,
  IonItem
} from '@ionic/react';

import useTasks from "../hooks/useTasks";

interface Props {
  goBack: () => void;
}

const TasksPage: React.FC<Props> = ({ goBack }) => {

  const { tasks, deleteTask } = useTasks();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Tasks</h2>

        <IonButton expand="block" onClick={goBack}>
          Volver
        </IonButton>

        <IonList>
          {tasks.length === 0 && <p>No hay tareas</p>}

          {tasks.map((t: any) => (
            <IonItem key={t.id}>
              {t.title}

              <IonButton
                slot="end"
                color="danger"
                onClick={() => deleteTask(t.id)}
              >
                Eliminar
              </IonButton>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default TasksPage;