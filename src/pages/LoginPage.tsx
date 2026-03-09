import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email === "user@mail.com" && password === "123") {
      onLogin();
      history.push("/list");
    } else {
      alert("Invalid credentials");
    }

  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Login Demo</h2>

        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default LoginPage;