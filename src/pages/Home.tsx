import {
  IonContent,
  IonPage,
  IonButton
} from '@ionic/react';

import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Menú Principal</h2>

        <IonButton expand="block" onClick={() => history.push("/posts")}>
          Ver Posts
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/new")}>
          Crear Post
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;