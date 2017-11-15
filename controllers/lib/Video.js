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

export default class Video extends Controller {

	constructor(video) {
		super();
		this.video = video;

	}

	async get(req, res) {
		const { id } = req.params;
		const { resolvePromise, video, assert } = this;

		const promise = await resolvePromise(video.getOne({id}, { _id: 0 }));
		
		if(!assert(promise.err, MONGO_ACCESS_ERROR, res)) return;
		if(!assert(!promise.result, NOT_FOUND, res)) return;
		
		const response = {
			success: true,
			status: OK,
			data: promise.result
		}
		res.send(response);
	}

	async put(req, res) {
		const { params: { id }, body } = req;
		const { resolvePromise, video, assert } = this;

		const promise = await resolvePromise(video.findAndUpdate({ id }, body));
		
		if(!assert(promise.err, MONGO_UPDATE_ERROR, res)) return;
		if(!assert(!promise.result, NOT_FOUND, res)) return;
		
		const response = {
			success: true,
			status: OK,
			data: promise.result
		}
		res.send(response);
	}
}