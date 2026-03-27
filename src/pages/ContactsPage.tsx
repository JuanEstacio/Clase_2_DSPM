import {
  IonPage, IonContent, IonInput,
  IonButton, IonList, IonItem
} from "@ionic/react";

import { useState } from "react";
import useContacts from "../hooks/useContacts";
import useNetwork from "../hooks/useNetwork";

const ContactsPage: React.FC = () => {

  const { contacts, addContact, deleteContact } = useContacts();
  const online = useNetwork();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Contacts</h2>

        {!online && <p style={{color:"red"}}>Sin conexión</p>}

        <IonInput placeholder="Nombre" onIonChange={e => setName(e.detail.value!)} />
        <IonInput placeholder="Teléfono" onIonChange={e => setPhone(e.detail.value!)} />

        <IonButton
          disabled={!online}
          onClick={() => addContact({ name, phone })}
        >
          Agregar
        </IonButton>

        <IonList>
          {contacts.map(c => (
            <IonItem key={c.id}>
              {c.name} - {c.phone}
              <IonButton
                color="danger"
                disabled={!online}
                onClick={() => deleteContact(c.id!)}
              >
                X
              </IonButton>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default ContactsPage;