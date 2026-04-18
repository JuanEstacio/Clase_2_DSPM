import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonToast,
  IonLoading
} from "@ionic/react";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { auth } from "../services/firebase";

const LoginPage: React.FC = () => {

  const { login, loading, error } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) history.replace("/home");
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const success = await login(email, password);

    if (success) {
      history.replace("/home");
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Login</h2>

        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>

        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>

        <IonButton fill="clear" onClick={() => history.push("/register")}>
          Ir a registro
        </IonButton>

        <IonToast isOpen={!!error} message={error || ""} duration={2000} color="danger" />
        <IonLoading isOpen={loading} message="Cargando..." />

      </IonContent>
    </IonPage>
  );
};

export default LoginPage;