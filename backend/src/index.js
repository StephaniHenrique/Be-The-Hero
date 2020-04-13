/**
 * comentandooo
 * rota / recurso
 * app.get - acessivel através do metodo (http)
 * GET: buscar/listar uma informação no back
 * POST: criar uma informação no back
 * PUT: alterar uma informação no back
 * DELETE: deletar uma informação no back
 */

 /**
  * tipos de parametros:
  * Query: parametros nomeados enviados na rota após "?" (filtros, paginação - no url)
  * ex: hhtp://localhost:3333/users?page=2&nome=Diogo.
  * Route params: parametros utilizados para identificar recursos - listagem do banco de dados - busca de dados de um unico user
  * ex: ...user/1 (/users:id)
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * SQL: Mysql, sqlITE, oRACLE...
   * NoSQL: MongoDB, CouchDB....
   * SQLite - usaremos - bom - não precisa ne instalar nada, pois é um arquivo
   */

   /**
    * Driver: SELECT * FROM user
    * Query Builders: Utilizando java script (table('users').select('*').where())
    */

const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);