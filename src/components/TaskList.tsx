import { IonList } from '@ionic/react';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onToggle, onDelete }) => {
  return (
    <IonList>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </IonList>
  );
};

export default TaskList;