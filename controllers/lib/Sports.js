import Controller from "../Controller";
import STATUS from "../../respStatus";

const {
	OK,
	OK_NOT_AUTHORIZED,
	OK_NOT_RESPONSE,
	OK_CREATED,
	NOT_FOUND,
	MONGO_WRITE_ERROR,
	MONGO_ACCESS_ERROR,
	MONGO_UPDATE_ERROR,
	MONGO_DELETE_ERROR,
	TIME_OUT
} = STATUS;

export default class Sports extends Controller {

	constructor(sports) {
		super();
		this.sports = sports;

	}

	async get(req, res) {
		const { resolvePromise, sports, assert } = this;

		const promise = await resolvePromise(sports.getAll(null, { _id: 0 }));
		
		if(!assert(promise.err, MONGO_ACCESS_ERROR, res)) return;
		
		const response = {
			success: true,
			status: OK,
			data: promise.result
		}
		res.send(response);
	}

	async post(req, res) {
		const { body } = req;
		const { resolvePromise, sports, assert } = this;

		const promise = await resolvePromise(sports.create(body));
		
		if(!assert(promise.err, MONGO_ACCESS_ERROR, res)) return;
		
		const response = {
			success: true,
			status: OK_CREATED,
			data: promise.result
		}
		res.send(response);
	}
}