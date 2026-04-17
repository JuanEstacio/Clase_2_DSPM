import { IonPage, IonContent } from "@ionic/react";
import { getTracking } from "../services/trackingService";

const HistoryPage: React.FC = () => {

  const history = getTracking();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Historial</h2>

        {history.map((h: any, i: number) => (
          <div key={i}>
            <p>{h.date}</p>
          </div>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default HistoryPage;