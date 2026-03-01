import { useState } from 'react';
import {
  IonInput,
  IonButton,
  IonItem,
  IonIcon
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';

interface Props {
  onAdd: (text: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <>
      <IonItem className="ion-margin-bottom">
        <IonInput
          placeholder="Escribe una nueva tarea..."
          value={text}
          onIonChange={e => setText(e.detail.value!)}
          style={{ fontSize: '18px' }}
        />
      </IonItem>

      <IonButton
        expand="block"
        size="default"
        onClick={handleAdd}
      >
        <IonIcon icon={addOutline} slot="start" />
        Agregar tarea
      </IonButton>
    </>
  );
};

export default TaskForm;