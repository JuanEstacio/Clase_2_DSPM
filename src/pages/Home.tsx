import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/react';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../services/firebase';

import MissionsPage from './MissionsPage';
import ResultsPage from './ResultsPage';
import RankingPage from './RankingPage';

const Home: React.FC = () => {

  const history = useHistory();

  const [view, setView] = useState<"menu" | "missions" | "results" | "ranking">("menu");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) history.replace("/login");
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await auth.signOut();
    history.replace("/login");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        {view === "menu" && (
          <>
            <h2>Home</h2>

            <IonButton expand="block" onClick={() => setView("missions")}>
              Misiones
            </IonButton>

            <IonButton expand="block" onClick={() => setView("results")}>
              Resultados
            </IonButton>

            <IonButton expand="block" onClick={() => setView("ranking")}>
              Ranking
            </IonButton>

            <IonButton expand="block" color="danger" onClick={logout}>
              Logout
            </IonButton>
          </>
        )}

        {view === "missions" && (
          <MissionsPage goBack={() => setView("menu")} />
        )}

        {view === "results" && (
          <ResultsPage goBack={() => setView("menu")} />
        )}

        {view === "ranking" && (
          <RankingPage goBack={() => setView("menu")} />
        )}

      </IonContent>
    </IonPage>
  );
};

export default Home;