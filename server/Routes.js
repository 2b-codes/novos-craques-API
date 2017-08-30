import ResourceCreator from "./ResourceCreator";
import {
	TesteModel,
} from "../connects";
import { Teste, Testes } from "../controllers";

export default class Routes {
	
	constructor(app, mongo){
		this.app = app;
		this.mongo = mongo
		this.rootUrl = "/api"
	}

	init() {

		const { mongo, app, rootUrl } = this;
		const resourceCreator = new ResourceCreator(app, rootUrl);

		// Models
		const testeModel = new TesteModel(mongo.teste)

		//controllers
		const teste = new Teste(testeModel);
		const testes = new Testes(testeModel);

		//inicia a entidade passando o banco como parametro

		//collections
		resourceCreator.create("/teste", testes.getControllers(["post", "get"]));
		resourceCreator.create("/teste/:id", teste.getControllers(["get", "put" ]));
		//resouces
		//actions
	}
}