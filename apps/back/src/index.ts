import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { MORGAN_DEV_FORMAT, BACK_PORT } from '@monorepo/constants';
import { IUser } from '@monorepo/types';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan(MORGAN_DEV_FORMAT));

const user: IUser = {
  name: 'John Doe',
  age: 30,
  role: 'user'
};

app.listen(BACK_PORT, () => {
  console.log(`⚡️ Server listening on port ${BACK_PORT}`);
});
