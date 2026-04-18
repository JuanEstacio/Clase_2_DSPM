import {
  IonButton,
  IonProgressBar
} from '@ionic/react';

import useMissions from "../hooks/useMissions";

const ResultsPage: React.FC<{ goBack: () => void }> = ({ goBack }) => {

  const { missions, points, progress } = useMissions();

  return (
    <>
      <h2>Resultados</h2>

      <p>Puntos totales: {points}</p>

      <p>
        Misiones completadas: {
          missions.filter(m => m.completed).length
        } / {missions.length}
      </p>

      <IonProgressBar value={progress}></IonProgressBar>

      <p>{Math.round(progress * 100)}% completado</p>

      <IonButton expand="block" onClick={goBack}>
        Volver
      </IonButton>
    </>
  );
};

export default ResultsPage;