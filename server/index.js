import express from "express";
import morgan from "morgan";
import Routes from "./Routes";
import { MongoDB } from "../db/index";

import bodyParser from "body-parser";

import STATUS from "../respStatus";

const {
	BANNED
} = STATUS;

const app = express();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "dev";
const mongoUrl = process.env.MONGO_URL || "";

app.set("port", port);
app.set("env", env);
app.set("mongoUrl", mongoUrl);

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use((req, res, next) => {
	// const allowedOrigins = [
	// 	"chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop",
	// 	"http://localhost:4000/"
	// ];
	
	const origin = req.headers.origin;
	
	// if(env == "dev") {
	// } else {
	// 	allowedOrigins.map(function(allowed) {
	// 		if(allowed == origin) 
	// 			next();
	// 	});
	// }
	res.header("Access-Control-Allow-Origin", origin);
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	next();

});


const db = new MongoDB(app);
db.init(app);

const routes = new Routes(app, db);
routes.init(app);

// process.on('unhandledRejection', (reason, p) => {
// 	console.log(reason);
// 	console.log(p);
// });

app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server Online - Port ${port}`);
})