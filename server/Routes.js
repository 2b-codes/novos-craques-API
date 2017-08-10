import ResourceCreator from "./ResourceCreator";
import {
	ExempleModel,
} from "../models";
// import { entities } from "../controllers";

export default class Routes {
	
	constructor(app, mongo){
		this.app = app;
		this.mongo = mongo
		this.rootUrl = "/api"
	}

	init() {

		const { mongo, app } = this;
		const resourceCreator = new ResourceCreator(this.app, this.rootUrl);

		// Models
		const ExempleModel = new ExempleModel(mongo.Exemple);

		//inicia a entidade passando o banco como parametro

		//collections
		resourceCreator.create(rota, entities.getControllers([ get put e os krl]))		;
		//resouces
		//actions
	}
}