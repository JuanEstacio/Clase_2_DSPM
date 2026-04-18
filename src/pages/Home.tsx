import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/react';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../services/firebase';

import MissionsPage from './MissionsPage';
import ResultsPage from './ResultsPage';

const Home: React.FC = () => {

  const history = useHistory();
  const [view, setView] = useState<"menu" | "missions" | "results">("menu");

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

        {/* MENU */}
        {view === "menu" && (
          <>
            <h2>Home</h2>

            <IonButton expand="block" onClick={() => setView("missions")}>
              Ver misiones
            </IonButton>

            <IonButton expand="block" onClick={() => setView("results")}>
              Ver resultados
            </IonButton>

            <IonButton expand="block" color="danger" onClick={logout}>
              Logout
            </IonButton>
          </>
        )}

        {/* MISIONES */}
        {view === "missions" && (
          <MissionsPage goBack={() => setView("menu")} />
        )}

        {/* RESULTADOS */}
        {view === "results" && (
          <ResultsPage goBack={() => setView("menu")} />
        )}

      </IonContent>
    </IonPage>
  );
};

export default Home;