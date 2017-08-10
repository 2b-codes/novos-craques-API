export default class QueryBase {
	constructor(model) {
		this.model = model;
	}

	create(info) {
		const entity = new this.model(info);
		return entity.save();
	}

	getAll(query = {}, filter = { _id: 0, __v: 0 }, options = { lean: true }) {
		return this.model.find(query, filter, options);
	}

	getOne(query = {}, filter = { _id: 0, __v: 0 }, options = { lean: true }) {
		return this.model.findOne(query, filter, options);
	}

	findAndUpdate(query, info, options = { new: true }) {
		return this.model.findOneAndUpdate(query, info, options);
	}

	delete(query) {
		return this.model.remove(query);
	}
}