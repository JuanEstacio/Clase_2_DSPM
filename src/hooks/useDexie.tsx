import { useEffect, useState } from "react";
import db from "../dexie/db";

interface Fruit {
  id?: number;
  name: string;
}

const useDexie = () => {

  const [fruits, setFruits] = useState<Fruit[]>([]);

  const loadFruits = async () => {
    const all = await db.fruits.toArray();
    setFruits(all);
  };

  const addFruit = async (name: string) => {
    await db.fruits.add({ name });
    loadFruits();
  };

  const deleteFruit = async (id: number) => {
    await db.fruits.delete(id);
    loadFruits();
  };

  useEffect(() => {
    loadFruits();
  }, []);

  return { fruits, addFruit, deleteFruit };
};

export default useDexie;