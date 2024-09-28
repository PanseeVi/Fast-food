import express from 'express';
import { env } from './config/environment';
import { CLOSE_DB, CONNECT_DB } from './config/mongodb';
import { userRoute } from './routes/userRoute';
import { productRoute } from './routes/productRouter';
import { cartRoute } from './routes/cartRouter';
import exitHook from 'async-exit-hook';
import { corsOptions } from '~/config/cors';
import cors from 'cors';
import { authRoutes } from './routes/authRoutes';
const START_SERVER = () => {
  const app = express();
  app.use(express.json());
  // app.use(cors(corsOptions));
  app.use(cors());
  app.use('/user', userRoute);
  app.use('/auth', authRoutes);
  app.use('/product', productRoute);
  app.use('/cart', cartRoute);
  app.listen(env.APP_PORT, () => {
    console.log(`Server is running on port ${env.APP_PORT}`);
  });

  exitHook(() => {
    CLOSE_DB();
    console.log('Server is shutting down');
  });
};

CONNECT_DB()
  .then(() => console.log('Connected to MongoDB'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.log('Lỗi khi kết nối đến MongoDB', error);
    process.exit(0);
  });
