export default class ResourceCreator {
	
	constructor(app, rootUrl) {
		this.app = app;
		this.rootUrl = rootUrl;
	}
	create(endPoint, resource) {
		const {app, rootUrl} = this;
		for(var key in resource){
			switch(key) {
				case "get"		:app.get(rootUrl + endPoint, resource.get); break;
				case "put"		:app.put(rootUrl + endPoint, resource.put); break;
				case "post"		:app.post(rootUrl + endPoint, resource.post); break;
				case "delete"	:app.delete(rootUrl + endPoint, resource.delete); break;
			}
		}
	}
}