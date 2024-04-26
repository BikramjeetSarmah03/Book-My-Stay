import express from 'express';
import cookieParser from 'cookie-parser';
import router from './routes';
import { errorMiddleware } from './middlewares/error';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.use(errorMiddleware as any);

export default app;
