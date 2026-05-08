import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel
} from "@ionic/react";

import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createPost, updatePost, getPosts } from "../services/api";

const PostFormPage: React.FC = () => {

  const history = useHistory();
  const { id }: any = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const isEdit = !!id;

  const loadPost = async () => {
    const data = await getPosts();
    const post = data.find((p: any) => p.id == id);

    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  };

  useEffect(() => {
    if (isEdit) loadPost();
  }, []);

  const handleSave = async () => {
    if (!title || !body) return;

    if (isEdit) {
      await updatePost(Number(id), { title, body });
    } else {
      await createPost({ title, body });
    }

    history.replace("/");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">

        <h2>{isEdit ? "Editar" : "Nuevo Post"}</h2>

        <IonItem>
          <IonLabel position="stacked">Título</IonLabel>
          <IonInput
            value={title}
            onIonChange={e => setTitle(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Contenido</IonLabel>
          <IonInput
            value={body}
            onIonChange={e => setBody(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" onClick={handleSave}>
          Guardar
        </IonButton>

        <IonButton expand="block" fill="outline" onClick={() => history.goBack()}>
          Cancelar
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default PostFormPage;