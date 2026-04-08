import { IonPage, IonContent, IonButton } from "@ionic/react";
import useHaptics from "../hooks/useHaptics";

const HapticsPage: React.FC = () => {

  const { vibrate } = useHaptics();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Vibración</h2>

        <IonButton onClick={vibrate}>
          Vibrar
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default HapticsPage;