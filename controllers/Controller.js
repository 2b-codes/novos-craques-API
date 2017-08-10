export default class Controller {
	
	getControllers(methods) {
		const controllers = {};

		for(let i in methods) {
			const metod = methods[i];
			controllers[method] = this[method].bind(this);
		}
		return controllers;
	}

	async resolvePromise(promise) {
		let result;
		let err;
		try {
			result = await promise;
		} catch(e) {
			err = e;
		}

		return { err, result };
	}

	assert(err, status, res) {
		if(!hasError(err)) return true;
		const response = { 
			success: false,
			status: createStatus(status, err)
		};
		console.log(status);
		res.send(response);
	}
	
	get(req, res) { res.send("NOT IMPLEMENTED"); }
	post(req, res) { res.send("NOT IMPLEMENTED"); }
	put(req, res) { res.send("NOT IMPLEMENTED"); }
	delete(req, res) { res.send("NOT IMPLEMENTED"); }

}