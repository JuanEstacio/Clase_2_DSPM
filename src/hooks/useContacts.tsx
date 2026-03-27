import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

interface Contact {
  id?: string;
  name: string;
  phone: string;
}

const useContacts = () => {

  const [contacts, setContacts] = useState<Contact[]>([]);

  const getContacts = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Contact[];

    setContacts(data);
  };

  const addContact = async (contact: Contact) => {
    await addDoc(collection(db, "contacts"), contact);
    getContacts();
  };

  const deleteContact = async (id: string) => {
    await deleteDoc(doc(db, "contacts", id));
    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, []);

  return { contacts, addContact, deleteContact };
};

export default useContacts;