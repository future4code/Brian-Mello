import knex from "knex";

export abstract class BaseDatabase {
  private connectionData = {
    host: process.env.HOST,
    port: 3306,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD
  };

  protected connection = knex({
    client: process.env.CLIENT as string,
    connection: this.connectionData
  });
}
