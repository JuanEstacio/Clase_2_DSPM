import { IonPage, IonContent, IonButton } from "@ionic/react";
import useGeolocation from "../hooks/useGeolocation";

const GeolocationPage: React.FC = () => {

  const { position, getLocation } = useGeolocation();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Geolocalización</h2>

        <IonButton onClick={getLocation}>
          Obtener ubicación
        </IonButton>

        {position && (
          <p>
            Lat: {position.coords.latitude} <br />
            Lng: {position.coords.longitude}
          </p>
        )}

      </IonContent>
    </IonPage>
  );
};

export default GeolocationPage;