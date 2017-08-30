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

export default class Testes extends Controller {

	constructor(testes) {
		super();
		this.testes = testes;

	}

	async get(req, res) {
		const { resolvePromise, testes, assert } = this;

		const promise = await resolvePromise(testes.getAll(null, { _id: 0 }));
		
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
		const { resolvePromise, testes, assert } = this;

		const promise = await resolvePromise(testes.create(body));
		
		if(!assert(promise.err, MONGO_ACCESS_ERROR, res)) return;
		
		const response = {
			success: true,
			status: OK_CREATED,
			data: promise.result
		}
		res.send(response);
	}
}