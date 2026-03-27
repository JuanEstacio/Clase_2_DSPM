import Dexie, { Table } from "dexie";

export interface Fruit {
  id?: number;
  name: string;
}

class AppDB extends Dexie {
  fruits!: Table<Fruit, number>;

  constructor() {
    super("MediCareDB");

    this.version(1).stores({
      fruits: "++id, name"
    });
  }
}

const db = new AppDB();

export default db;