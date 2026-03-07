import {
  IonPage,
  IonContent,
  IonAvatar,
  IonImg,
  IonButton
} from '@ionic/react'

interface Props {
  onLogout: () => void
}

const PerfilMedicoPage: React.FC<Props> = ({ onLogout }) => {

  const doctor = {
    nombre: "Juan Perez",
    foto: ""
  }

  const initials = doctor.nombre
    .split(" ")
    .map(n => n[0])
    .join("")

  return (
    <IonPage>

      <IonContent className="ion-padding">

        <h2>Perfil del Médico</h2>

        <IonAvatar style={{ width: "120px", height: "120px" }}>

          {doctor.foto
            ? <IonImg src={doctor.foto} />
            : <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: "32px"
              }}>
                {initials}
              </div>
          }

        </IonAvatar>

        <p>{doctor.nombre}</p>

        <IonButton color="danger" onClick={onLogout}>
          Cerrar sesión
        </IonButton>

      </IonContent>

    </IonPage>
  )
}

export default PerfilMedicoPage