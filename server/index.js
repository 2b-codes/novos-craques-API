import express from "express";
import morgan from "morgan";
import Routes from "./Routes";
import { MongoDB } from "../db/index";

const app = express();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "dev";
const mongoUrl = process.env.MONGO_URL || "localhost:27017";

app.set("port", port);
app.set("env", env);
app.set("mongoUrl", mongoUrl);

const db = new MongoDB(app);
db.init();

const routes = new Routes(app, db);
routes.init();


app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server Online - Port ${port}`);
})