import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/react';

import useMissions from "../hooks/useMissions";
import useCamera from "../hooks/useCamera";
import useGeolocation from "../hooks/useGeolocationMission";
import useVibration from "../hooks/useVibration";
import useNotifications from "../hooks/useNotifications";

const MissionsPage: React.FC<{ goBack: () => void }> = ({ goBack }) => {

  const { missions, completeMission } = useMissions();

  const { takePhoto } = useCamera();
  const { startTracking, getDistance } = useGeolocation();
  const { vibrate } = useVibration();
  const { sendNotification } = useNotifications();

  // 📸 MISIÓN 1
  const handlePhoto = async () => {
    await takePhoto();
    await completeMission(1);
    sendNotification("Misión completada", "Tomaste una foto");
  };

  // 🚶 MISIÓN 2
  const handleMove = async () => {
    await startTracking();

    setTimeout(async () => {
      const dist = await getDistance();

      if (dist > 30) {
        await completeMission(2);
        sendNotification("Misión completada", "Te moviste suficiente");
      }
    }, 5000);
  };

  // 🧍 MISIÓN 3
  const handleStay = async () => {
    setTimeout(async () => {
      await vibrate();
      await completeMission(3);
      sendNotification("Misión completada", "Te quedaste quieto");
    }, 10000);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Misiones</h2>

        {missions.map(m => (
          <div key={m.id}>
            <p>{m.title} - {m.completed ? "✔" : "❌"}</p>

            {!m.completed && m.id === 1 && (
              <IonButton onClick={handlePhoto}>Completar</IonButton>
            )}

            {!m.completed && m.id === 2 && (
              <IonButton onClick={handleMove}>Completar</IonButton>
            )}

            {!m.completed && m.id === 3 && (
              <IonButton onClick={handleStay}>Completar</IonButton>
            )}
          </div>
        ))}

        <IonButton onClick={goBack}>Volver</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default MissionsPage;