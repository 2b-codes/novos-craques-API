import mongoose from "mongoose";
import { teste } from "./schemas/testeSchema";
import { user } from "./schemas/user";
import { video } from "./schemas/video";
import { sport } from "./schemas/sport";
import { favorite } from "./schemas/favorite";

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
		this.user = db.model("users", user(Schema));
		this.video = db.model("videos", video(Schema));
		this.sport = db.model("sports", sport(Schema));
		this.favorite = db.model("favorites", favorite(Schema));
	}
}