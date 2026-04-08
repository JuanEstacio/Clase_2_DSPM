import { IonPage, IonContent, IonButton, IonImg } from "@ionic/react";
import useCamera from "../hooks/useCamera";

const CameraPage: React.FC = () => {

  const { photo, takePhoto } = useCamera();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Cámara</h2>

        <IonButton onClick={takePhoto}>
          Tomar foto
        </IonButton>

        {photo && <IonImg src={photo} />}

      </IonContent>
    </IonPage>
  );
};

export default CameraPage;