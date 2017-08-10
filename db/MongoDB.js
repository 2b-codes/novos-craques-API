import mongoose from "mongoose";
import { Exemple } from "./schemas/exempleSchema";

export default class MongoDB {

	contructor(app) {
		this.app = app;
	}

	init() {
		const env = this.app.get("env");
		const Schema = mongoose.Schema;
		const db = mongoose.createConnection(this.app.get("mongoUrl"));

		console.log("MONGO: Connected to" + env);

		this.Exemple = db.model("exemples", exemples(Schema));
	}
}