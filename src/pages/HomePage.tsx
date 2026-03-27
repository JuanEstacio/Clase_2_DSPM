import { IonPage, IonContent, IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const HomePage: React.FC = () => {

  const history = useHistory();
  const { logout } = useAuth();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Home</h2>

        <IonButton expand="block" onClick={() => history.push("/contacts")}>
          Contacts (Firebase)
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/tasks")}>
          Tasks (Realtime)
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/fruits")}>
          Fruits (Offline Dexie)
        </IonButton>

        <IonButton color="danger" expand="block" onClick={logout}>
          Logout
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;