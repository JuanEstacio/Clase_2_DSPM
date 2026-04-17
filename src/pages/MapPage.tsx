import { IonPage, IonContent, IonButton } from "@ionic/react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import useGeolocation from "../hooks/useGeolocation";
import useNetwork from "../hooks/useNetwork";

import "leaflet/dist/leaflet.css";

const MapPage: React.FC = () => {

  const { position, startTracking, stopTracking } = useGeolocation();
  const { online } = useNetwork();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Mapa</h2>

        {!online && <p>❌ Sin conexión</p>}

        <IonButton onClick={startTracking}>
          Iniciar tracking
        </IonButton>

        <IonButton color="danger" onClick={stopTracking}>
          Detener
        </IonButton>

        {position && (
          <MapContainer
            center={[position.lat, position.lng]}
            zoom={15}
            style={{ height: "400px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position.lat, position.lng]} />
          </MapContainer>
        )}

      </IonContent>
    </IonPage>
  );
};

export default MapPage;