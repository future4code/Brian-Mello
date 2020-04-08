"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const op = '';
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'brian',
        password: '8suA4i!a5!Wlj8dKaIT%',
        database: 'bouman-brian'
    }
});
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
            '/createUser': 'criação dos usuários',
            '/updateUser/:id': 'atualização do apelido do usuário',
            '/deleteUser/:id': 'deletando o usuário escolhido',
            '/getUser/:ID': 'pega os dados de um usuário pelo Id dele',
            '/createPost': 'cria uma tarefa',
            '/updateTask/:ID': 'atualização da descrição da tarefa e a data limite',
            '/getAllUsers/': 'pega todos os usuários por ordem crescente ou decrescente ou por data de nascimento. /getAllUsers/order=ASC, /getAllUsers/order=DESC,/getAllUsers/age=data',
            '/addResponsibleUser/:ID': 'adiciona um responsável por uma tarefa'
        }
    };
    // Exemplo de retorno de um JSON
    res.send(resposta);
});
// 1 - Criando novo usuário
app.post('/createUser', (req, res) => {
    const createUserQuery = connection.insert(req.body).into('users');
    createUserQuery.then(() => {
        res.send(`Usuário '${req.body.name}' criado`);
    }).catch((err) => {
        res.send(`Erro: ${err}`);
    });
});
// 2 - função para alterar o nickname do usuário
app.put('/updateUser/:ID', (req, res) => {
    const nickNamePath = req.body.nickName;
    const updateUserQuery = connection('users')
        .where("ID", "=", req.params.id)
        .update({
        nickName: nickNamePath
    });
    updateUserQuery.then(() => {
        res.send('Usuário atualizado');
    }).catch((err) => {
        res.send(err);
    });
});
// 3 - deletando usuário
app.delete('/deleteUser/:ID', (req, res) => {
    const deleteUserQuery = connection('users').where("ID", "=", req.params.id).del();
    deleteUserQuery.then(() => {
        res.send('Usuário deletado');
    }).catch((err) => {
        res.send(err);
    });
});
// 4 - pegando usuário pelo nome
app.get('/getUser/:ID', (req, res) => {
    const getUserName = req.params.ID;
    const getUserQuery = connection('users').select('name', 'nickName', 'email', 'birth_date').where("ID", "=", getUserName);
    getUserQuery.then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});
// 5 - função para pegar todos usuários
app.get('/getAllUsers/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = req.query.order;
    const age = req.query.age;
    let query = connection.select("*").from('users');
    if (order) {
        query = query.orderBy("name", order);
    }
    if (age) {
        query = query.where({ "birth_date": age });
    }
    try {
        const result = yield query;
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
}));
// 6 - criar tarefa
app.post('/createPost', (req, res) => {
    const createPostQuery = connection.insert(req.body).into('tasks');
    createPostQuery.then(() => {
        res.send(`Tarefa '${req.body.description}' criada`);
    }).catch((err) => {
        res.send(`Erro: ${err}`);
    });
});
// 7 - atualiza a descrição e a data limite da tarefa
app.put('/updateTask/:ID', (req, res) => {
    const descriptionPath = req.body.description;
    const limitDatePath = req.body.limit_date;
    const taskIdPath = req.params.ID;
    const updateTaskQuery = connection('tasks')
        .where("ID", "=", taskIdPath)
        .update({
        description: descriptionPath,
        limit_date: limitDatePath
    });
    updateTaskQuery.then(() => {
        res.send('Tarefa atualizada');
    }).catch((err) => {
        res.send(err);
    });
});
// 8 - Atribuir um responsável pela tarefa
app.put('/addResponsibleUser/:ID', (req, res) => {
    const user_responsiblePath = req.body.user_responsible_ID;
    const taskIdPath = req.params.ID;
    const addUserResponsibleQuery = connection.raw(`UPDATE tasks SET user_responsible_ID = ${user_responsiblePath} WHERE ID=${taskIdPath}`);
    addUserResponsibleQuery.then(() => {
        res.send('Resposável cadastrado');
    }).catch((err) => {
        res.send(err);
    });
});
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
