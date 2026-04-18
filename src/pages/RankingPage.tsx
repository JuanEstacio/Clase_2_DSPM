import {
  IonPage,
  IonContent
} from '@ionic/react';

import { useEffect, useState } from "react";
import { getRanking } from "../services/firestore";

const RankingPage: React.FC<{ goBack: () => void }> = ({ goBack }) => {

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getRanking();
    setUsers(data);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Ranking</h2>

        {users.map((u, i) => (
          <p key={i}>
            {i + 1}. {u.points} pts
          </p>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default RankingPage;