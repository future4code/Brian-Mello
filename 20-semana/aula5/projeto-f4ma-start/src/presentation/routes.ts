import express, { Request, Response } from "express";
import { CreateBandEndpoint } from "./endpoints/band/createBand";
import { GetBandByIdEndpoint } from "./endpoints/band/getBandById";
import { CreateShowEndpoint } from "./endpoints/show/createShow";
import { GetShowsByDayEndpoint } from "./endpoints/show/getShowsByDay";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/createBand", CreateBandEndpoint);
app.post("/createShow", CreateShowEndpoint);

app.get("/getBand", GetBandByIdEndpoint);
app.get("/getAllShowsByDay", GetShowsByDayEndpoint);

export default app;
