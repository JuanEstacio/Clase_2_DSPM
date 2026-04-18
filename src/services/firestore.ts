import { db, auth } from "./firebase";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";

export const saveUserData = async (data: any) => {

  const user = auth.currentUser;
  if (!user) return;

  await setDoc(doc(db, "users", user.uid), data);
};

export const getUserData = async () => {

  const user = auth.currentUser;
  if (!user) return null;

  const snap = await getDoc(doc(db, "users", user.uid));

  return snap.exists() ? snap.data() : null;
};

export const getRanking = async () => {

  const snapshot = await getDocs(collection(db, "users"));

  const users: any[] = [];

  snapshot.forEach(doc => users.push(doc.data()));

  return users.sort((a, b) => b.points - a.points).slice(0, 5);
};