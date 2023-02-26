import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("daily_exercises.db");

export const initDB = () => {
  return new Promise(( resolve, reject ) => {

    db.transaction((data) => {
        data.executeSql(
            `CREATE TABLE IF NOT EXISTS daily_exercises (

                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                times INTEGER NOT NULL,
                completed BOOLEAN DEFAULT false,
            )` , [],
            (data, res) => resolve(res),
            (data, err) => reject(err),
        )
    })

  });
};

export const getTableInfo = () => {
  return new Promise(( resolve, reject ) => {

    db.transaction((data) => {
        data.executeSql(
            `pragma table_info('Daily_Exercises)` , [],
            (data, res) => resolve(res),
            (data, err) => reject(err),
        )
    })

  });
};
