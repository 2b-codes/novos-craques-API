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

export default class Videos extends Controller {

	constructor(videos) {
		super();
		this.videos = videos;

	}

	async get(req, res) {
		const { resolvePromise, videos, assert } = this;

		const promise = await resolvePromise(videos.getAll(null, { _id: 0 }));
		
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
		const { resolvePromise, videos, assert } = this;

		const promise = await resolvePromise(videos.create(body));
		
		if(!assert(promise.err, MONGO_ACCESS_ERROR, res)) return;
		
		const response = {
			success: true,
			status: OK_CREATED,
			data: promise.result
		}
		res.send(response);
	}
}