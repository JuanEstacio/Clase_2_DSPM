import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from "react-router-dom";
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Maps App</h2>

        <IonButton expand="block" onClick={() => history.push("/map")}>
          Ir al mapa
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/history")}>
          Ver historial
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
