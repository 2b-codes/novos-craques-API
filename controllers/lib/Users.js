import Controller from "../Controller";
import STATUS from "../../respStatus";
import { generatorId, hashPassword } from "../../helper";

const {
	OK,
	DUPLICATE_KEY,
	OK_CREATED,
	DUPLICATE_EMAIL,
	MONGO_ACCESS_ERROR,
	DUPLICATE_USERNAME
} = STATUS;

export default class Users extends Controller {

	constructor(users) {
		super();
		this.users = users;

	}

	async get(req, res) {
		const { resolvePromise, users, assert } = this;

		const promise = await resolvePromise(users.getAll(null, { _id: 0 }));
		
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
		const { resolvePromise, users, assert } = this;
		body.birthday = new Date();
		body["user_id"] = generatorId();
		body["password"] = hashPassword(body["password"]);

		const validateId = await resolvePromise(users.getOne({user_id: body.user_id}));
		if(!assert(validateId.result, DUPLICATE_KEY, res)) return;
		
		const validateEmail = await resolvePromise(users.getOne({email: body.email}));
		if(!assert(validateEmail.result, DUPLICATE_EMAIL, res)) return;
		
		const validateUsername = await resolvePromise(users.getOne({username: body.username}));
		if(!assert(validateUsername.result, DUPLICATE_USERNAME, res)) return;

		const promise = await resolvePromise(users.create(body));
		console.log(promise);
		if(!assert(promise.err, MONGO_ACCESS_ERROR, res)) return;
		
		const response = {
			success: true,
			status: OK_CREATED,
			data: promise.result
		}
		res.send(response);
	}
}