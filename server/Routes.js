import ResourceCreator from "./ResourceCreator";
import {
	FavoriteModel,
	SportModel,
	TesteModel,
	UserModel,
	VideoModel
} from "../connects";
import { 
	Favorite,
	Favorites,
	Sport,
	Sports,
	Teste, 
	Testes,
	User,
	Users,
	Video,
	Videos,
} from "../controllers";

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
		const favoriteModel = new FavoriteModel(mongo.favorite);
		const sportModel 	= new SportModel(mongo.sport);
		const testeModel 	= new TesteModel(mongo.teste);
		const userModel 	= new UserModel(mongo.user);
		const videoModel 	= new VideoModel(mongo.video);
		

		//controllers
		const favorite	= new Favorite(favoriteModel);
		const favorites	= new Favorites(favoriteModel);
		const sport		= new Sport(sportModel);
		const sports	= new Sports(sportModel);
		const teste		= new Teste(testeModel);
		const testes 	= new Testes(testeModel);
		const user 		= new User(userModel);
		const users 	= new Users(userModel);
		const video 	= new Video(videoModel);
		const videos 	= new Videos(videoModel);
		
		//rotes
		const roteUsers 	= "/users";
		const roteFavorites = "/user/:user_id/favorites";
		const roteVideos 	= "/user/:user_id/videos";

		//selectorController
		const getControllerFavorites	= favorites.getControllers(["post", "get"]);
		const getControllerUsers		= users.getControllers(["post", "get"]);
		const getControllerVideos		= videos.getControllers(["post", "get"]);


		//collections
		resourceCreator.create(roteFavorites, getControllerFavorites);
		resourceCreator.create(roteUsers, getControllerUsers);
		resourceCreator.create(roteVideos, getControllerVideos);
		// resourceCreator.create("/sports", sports.getControllers(["post", "get"])); <-- Planejar

		//resouces
		resourceCreator.create("/user/:user_id", testes.getControllers(["get", "put"]));
		resourceCreator.create("/teste/:id", teste.getControllers(["get", "put" ]));
		
		//actions
	}
}