import {
  IonButton
} from '@ionic/react';

import useMissions from "../hooks/useMissions";
import useCameraMission from "../hooks/useCameraMission";
import useGeolocationMission from "../hooks/useGeolocationMission";
import useStayMission from "../hooks/useStayMission";

const MissionsPage: React.FC<{ goBack: () => void }> = ({ goBack }) => {

  const { missions, completeMission } = useMissions();

  const { takePhoto } = useCameraMission();
  const { startTracking, checkDistance } = useGeolocationMission();
  const { startStay } = useStayMission();

  const handleMission = async (id: number) => {

    if (id === 1) {
      await takePhoto();
      completeMission(1);
    }

    if (id === 2) {
      await startTracking();

      setTimeout(async () => {
        const done = await checkDistance();
        if (done) completeMission(2);
      }, 5000);
    }

    if (id === 3) {
      const mission2 = missions.find(m => m.id === 2);
      if (!mission2?.completed) return;

      await startStay();
      completeMission(3);
    }
  };

  return (
    <>
      <h2>Misiones</h2>

      {missions.map(m => (
        <IonButton
          key={m.id}
          expand="block"
          disabled={m.completed}
          onClick={() => handleMission(m.id)}
        >
          {m.title} — {m.completed ? "✔" : "Pendiente"} ({m.points} pts)
        </IonButton>
      ))}

      <IonButton expand="block" onClick={goBack}>
        Volver
      </IonButton>
    </>
  );
};

export default MissionsPage;