import Dexie, { Table } from "dexie";
import { Settings } from "./Settings";
class SettingsDB extends Dexie {
  settings!: Table<Settings>;
  constructor() {
    super("settingsDB")
    this.version(1).stores({
      settings: '++id'
    })
  }
}
export const db = new SettingsDB();
