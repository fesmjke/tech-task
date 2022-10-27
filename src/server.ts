import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const application = express();
const port = process.env.PORT ?? '3000';

application.get('/', (req : Request, res : Response) => {
	console.log(new Date().toLocaleDateString(), ' | ', req.baseUrl);
	res.send('Express working');
});

application.listen(port, () => {
	console.log(`[server]: Server is running at https://localhost:${port}`);
});
