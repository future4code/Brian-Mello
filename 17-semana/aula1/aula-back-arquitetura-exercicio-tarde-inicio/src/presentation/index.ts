import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";
import { getUserByEmail } from "./endpoints/getUserByEmail";
import { getAllUsers } from "./endpoints/getAllUsers";
import { editUser } from "./endpoints/editUser"

const app = express();
app.use(express.json());

app.post("/signup", signupEndpoint);

app.get("/user/all", getAllUsers);

app.get("/user?email=", getUserByEmail);

app.put("user/edit", editUser)

export default app;
