import { IonPage, IonContent, IonButton } from "@ionic/react";
import useDevice from "../hooks/useDevice";

const DevicePage: React.FC = () => {

  const { info, getInfo } = useDevice();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Dispositivo</h2>

        <IonButton onClick={getInfo}>
          Obtener info
        </IonButton>

        {info && (
          <p>
            Modelo: {info.model} <br />
            Plataforma: {info.platform}
          </p>
        )}

      </IonContent>
    </IonPage>
  );
};

export default DevicePage;