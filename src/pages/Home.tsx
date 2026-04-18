import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../services/firebase';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        history.replace("/login");
      }
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

        <h2>Home</h2>

        <IonButton expand="block" color="danger" onClick={logout}>
          Logout
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
