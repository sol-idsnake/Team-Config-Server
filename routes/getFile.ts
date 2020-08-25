// const fs = require("fs");
// import express from "express";
// const router = express.Router();
// router.post("/dl", function (req: Request, res: Response) {
// 	const { data, file } = req.body;
// 	console.log(data, "data");
// 	console.log(file);
// 	// fs.writeFile(file, data);
// 	console.log("trgg");
// 	res.send("Hello World!");
// });
// module.exports = router;
import { Request, Response } from "express";
import fs from "fs";

/**
 * Config file Download.
 * @route GET /dl
 */
const index = async (req: Request, res: Response) => {
	const { data, file } = req.body;
	const temp = "./tmp";

	// // create tmp dir
	// if (!fs.existsSync(temp)) {
	// 	await fs.mkdirSync("tmp");
	// }

	// // create random tmp fold within ./tmp/
	// await fs.mkdtemp(`${temp}${sep}`, (err, directory) => {
	// 	if (err) throw err;
	// });

	// write file to disc
	const test = await fs.writeFile(file, data, err => {
		if (err) throw err;
	});

	console.log(test, "test");




	// res.download(configFile);
};

export default index;
