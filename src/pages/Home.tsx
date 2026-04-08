import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useHistory } from "react-router-dom";
import './Home.css';

const Home: React.FC = () => {

  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Sensores</h2>

        <IonButton expand="block" onClick={() => history.push("/geo")}>
          Geolocalización
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/camera")}>
          Cámara
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/device")}>
          Dispositivo
        </IonButton>

        <IonButton expand="block" onClick={() => history.push("/haptics")}>
          Vibración
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
