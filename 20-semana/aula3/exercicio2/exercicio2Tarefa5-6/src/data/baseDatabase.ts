import knex from "knex";

export abstract class BaseDatabase {
  protected connection = knex({
    client: process.env.CLIENT as string,
    connection: {
      host: process.env.HOST,
      port: 3306,
      database: process.env.DB,
      user: process.env.USER,
      password: process.env.PASSWORD
    }
  });
}