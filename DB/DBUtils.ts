import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("daily_exercises.db");

export const initDB = () => {
  return new Promise(( resolve, reject ) => {

    db.transaction((data) => {
        data.executeSql(
            `CREATE TABLE IF NOT EXISTS daily_exercises () `
        )
    })

  });
};
