import {
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonIcon
} from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <IonItem>
      <IonCheckbox
        slot="start"
        checked={task.completed}
        onIonChange={() => onToggle(task.id)}
      />

      <IonLabel
        style={{
          fontSize: '18px',
          textDecoration: task.completed ? 'line-through' : 'none'
        }}
      >
        {task.text}
      </IonLabel>

      <IonButton
        fill="clear"
        color="danger"
        slot="end"
        size="small"
        onClick={() => onDelete(task.id)}
      >
        <IonIcon icon={trashOutline} />
      </IonButton>
    </IonItem>
  );
};

export default TaskItem;