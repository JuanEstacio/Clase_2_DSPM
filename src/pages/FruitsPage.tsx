import {
  IonPage, IonContent, IonInput,
  IonButton, IonList, IonItem
} from "@ionic/react";

import { useState } from "react";
import useDexie from "../hooks/useDexie";

const FruitsPage: React.FC = () => {

  const { fruits, addFruit, deleteFruit } = useDexie();

  const [name, setName] = useState("");

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Fruits (Offline)</h2>

        <IonInput placeholder="Fruta" onIonChange={e => setName(e.detail.value!)} />

        <IonButton onClick={() => addFruit(name)}>
          Agregar
        </IonButton>

        <IonList>
          {fruits.map(f => (
            <IonItem key={f.id}>
              {f.name}
              <IonButton
                color="danger"
                onClick={() => deleteFruit(f.id!)}
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

export default FruitsPage;