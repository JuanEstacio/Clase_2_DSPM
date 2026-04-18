import {
  IonPage,
  IonContent,
  IonButton
} from "@ionic/react";

import { useParams, useHistory } from "react-router-dom";

const TaskDetailPage: React.FC = () => {

  const { id }: any = useParams();
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Detalle tarea {id}</h2>

        <IonButton color="danger" onClick={() => history.push("/tasks")}>
          Volver
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default TaskDetailPage;