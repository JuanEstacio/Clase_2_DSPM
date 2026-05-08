import {
  IonPage,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner
} from "@ionic/react";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPosts, deletePost } from "../services/api";

const PostsPage: React.FC = () => {

  const history = useHistory();

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    setLoading(true);
    const data = await getPosts();
    setPosts(data.slice(0, 10)); // solo 10 para no saturar
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    loadPosts();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>Posts</h2>

        <IonButton expand="block" onClick={() => history.push("/new")}>
          Crear nuevo
        </IonButton>

        {loading && <IonSpinner />}

        <IonList>
          {posts.map((post) => (
            <IonItem key={post.id}>
              <IonLabel>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </IonLabel>

              <IonButton
                onClick={() => history.push(`/edit/${post.id}`)}
              >
                Editar
              </IonButton>

              <IonButton
                color="danger"
                onClick={() => handleDelete(post.id)}
              >
                Eliminar
              </IonButton>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default PostsPage;