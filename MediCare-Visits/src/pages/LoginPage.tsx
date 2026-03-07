import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonToast,
  IonLoading
} from '@ionic/react'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

interface Props {
  onLogin: () => void
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {

  const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [showToast, setShowToast] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {

    setLoading(true)

    setTimeout(() => {

      setLoading(false)

      if (email === "doctor@medicare.com" && password === "123456") {
        onLogin()
        history.push("/visitas") 
      } else {
        setShowToast(true)
      }

    }, 1500)

  }

  return (
    <IonPage>

      <IonContent className="ion-padding">

        <h2>MediCare+ Login</h2>

        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Contraseña</IonLabel>
          <IonInput
            type={showPassword ? "text" : "password"}
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          />
        </IonItem>

        <IonButton
          expand="block"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        </IonButton>

        <IonButton
          expand="block"
          onClick={handleLogin}
        >
          Iniciar sesión
        </IonButton>

        <IonToast
          isOpen={showToast}
          message="Credenciales incorrectas"
          duration={2000}
          onDidDismiss={() => setShowToast(false)}
          color="danger"
        />

        <IonLoading
          isOpen={loading}
          message="Verificando credenciales..."
        />

      </IonContent>

    </IonPage>
  )
}

export default LoginPage