import express, { Request, Response } from "express";
import { SignUpEndpoint } from "./endpoints/user/signUp";
import { LoginEndpoint } from "./endpoints/user/login";
import { CreateVideoEndpoint } from "./endpoints/video/createVideo";
import { FeedOfVideosEndpoint } from "./endpoints/video/feedOfVideos";
import { GetAllUsersEndpoint } from "./endpoints/user/getAllUsers";
import { DeleteVideoEndpoint } from "./endpoints/video/deleteVideo";
import { UpdateVideoEndpoint } from "./endpoints/video/updateVideo";
import { GetVideoDetailEndpoint } from "./endpoints/video/getVideoDetail";
import { GetVideoByUserEndpoint } from "./endpoints/video/getVideoByUser";
import { UpdatePasswordEndpoint } from "./endpoints/user/updatePassword";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

// user
app.post("/signup", SignUpEndpoint);
app.get("/login", LoginEndpoint);
app.get("/users", GetAllUsersEndpoint);
app.post("/updatePassword", UpdatePasswordEndpoint);

// video
app.post("/createVideo", CreateVideoEndpoint);
app.get("/feed", FeedOfVideosEndpoint)
app.delete("/deleteVideo", DeleteVideoEndpoint);
app.post("/updateVideo", UpdateVideoEndpoint);
app.get("/getVideoDetail", GetVideoDetailEndpoint);
app.get("/getVideoByUser", GetVideoByUserEndpoint);

app.get('/', (req: Request, res: Response) => {
    const resposta = {
      endpoints: {
        '/': 'Retorna lista com todos os endpoints',
        '/signup': 'Criação dos usuários',
        '/login': 'Login do usuário',
        '/users': 'Retorna todos usuários. Apenas administradores podem usar esse endpoint',
        '/updatePassword': 'atualiza a senha de um usuário',
        '/createVideo': 'Cria um video',
        '/feed': 'Mostra todos videos',
        '/deleteVideo': 'Deleta um vídeo ao passar um id no body',
        '/updateVideo': 'Atualiza um video ao passar o id e os dados no body',
        '/getVideoByUser/:id': 'pega todos videos de um usuário específico'
      }
    };
    res.send(resposta)
});

export default app;
