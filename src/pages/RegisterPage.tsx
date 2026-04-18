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

import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RegisterPage: React.FC = () => {

  const { register, loading, error } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const success = await register(email, password);

    if (success) {
      history.replace("/home");
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Registro</h2>

        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>

        <IonButton expand="block" onClick={handleRegister}>
          Registrarse
        </IonButton>

        <IonToast isOpen={!!error} message={error || ""} duration={2000} color="danger" />
        <IonLoading isOpen={loading} message="Creando cuenta..." />

      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;