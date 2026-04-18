import {
  IonPage,
  IonContent
} from '@ionic/react';

import useMissions from "../hooks/useMissions";

const ResultsPage: React.FC<{ goBack: () => void }> = ({ goBack }) => {

  const { points, progress, missions } = useMissions();

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Resultados</h2>

        <p>Puntos: {points}</p>
        <p>Progreso: {(progress * 100).toFixed(0)}%</p>
        <p>Completadas: {missions.filter(m => m.completed).length}</p>

      </IonContent>
    </IonPage>
  );
};

export default ResultsPage;