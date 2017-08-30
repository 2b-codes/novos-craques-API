export default class Controller {
	
	getControllers(methods) {
		const controllers = {};

		for(let i in methods) {
			const method = methods[i];
			controllers[method] = this[method].bind(this);
		}
		return controllers;
	}

	get(req, res) { res.send("NOT IMPLEMENTED"); }
	post(req, res) { res.send("NOT IMPLEMENTED"); }
	put(req, res) { res.send("NOT IMPLEMENTED"); }
	delete(req, res) { res.send("NOT IMPLEMENTED"); }
	getAll(req, res) { res.send("NOT IMPLEMENTED"); }
	
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
		if(!err) return true;
		const response = { 
			success: false,
			status: { code: status.code, msg: status.msg }
		};
		console.log(status);
		res.send(response);
	}
}