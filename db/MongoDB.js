import mongoose from "mongoose";
import { teste } from "./schemas/testeSchema";

export default class MongoDB {

	contructor(app) {
		this.app = app;
	}

	init(app) {
		const env = app.get("env");
		const Schema = mongoose.Schema;
		const db = mongoose.createConnection(app.get("mongoUrl"));

		console.log("MONGO: Connected to" + env);

		this.teste = db.model("testes", teste(Schema));
	}
}