import compression from "compression"; // compresses requests
import cors from "cors";
import express from "express";
import logger from "morgan";
import path from "path";
// Controllers (route handlers)
import getFile from "./routes/getFile";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 4000);
app.use(logger("dev"));
app.use(cors());
app.use(compression());
// handles when JSON is sent via a POST request and puts data into request.body
app.use(express.json());
// parses incoming requests with urlencoded payload
app.use(express.urlencoded({ extended: false }));
// parses query string data in the URL and puts it in request.query
// app.use(express.urlencoded({ extended: false }));

app.use("/dl", getFile);

// app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

console.log(path.join(__dirname, ""), "__dirname");
/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
	console.log(
		"  App is running at http://localhost:%d in %s mode",
		app.get("port"),
		app.get("env")
	);
	console.log("  Press CTRL-C to stop\n");
});

export default server;
