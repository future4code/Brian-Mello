const knex = require("knex");
const v4 = require("uuid")

const connection = knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB
  }
});

exports.handler = async (event) => {
    const id = v4();
    const personagensTableName = "personagens"
    const result = await connection.raw(`
        INSERT INTO ${personagensTableName}(id, drawingName, name, photo)
        VALUES(${id}, ${event.drawingName}, ${event.name}, ${event.photo})
    `)

    if (!event.name){
        return {
            statusCode: 400,
            body: JSON.stringify("Name not found")
        }
    }

    if (!event.drawingName){
        return {
            statusCode: 400,
            body: JSON.stringify("drawingName not found")
        }
    }

    if (!event.photo){
        return {
            statusCode: 400,
            body: JSON.stringify("photo not found")
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result[0][0])
    }
}

// test: 
// {
//   "name": "pokemon",
//   "drawingName": "Hitmonlee",
//   "photo": "https://static.pokemonpets.com/images/monsters-images-800-800/106-Hitmonlee.png"
// }