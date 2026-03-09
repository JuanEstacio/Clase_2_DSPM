import { IonPage, IonContent, IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";

interface Props {
  onLogout: () => void;
}

const ListPage: React.FC<Props> = ({ onLogout }) => {

  const history = useHistory();

  const logout = () => {
    onLogout();
    history.push("/login");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>List Page</h2>
        <p>You are logged in.</p>

        <IonButton color="danger" onClick={logout}>
          Logout
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default ListPage;