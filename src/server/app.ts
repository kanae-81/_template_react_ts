import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(path.join('./', 'dist')));
app.use(express.json());

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`http://localhost:${port} で起動しています。`);
});
