// HBKabO0nBoWxy8Wc

import { MongoClient, ServerApiVersion } from 'mongodb';
import { env } from '~/config/environment';
let panseeDBInstance = null;
const mogoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export const CONNECT_DB = async () => {
  await mogoClientInstance.connect();
  panseeDBInstance = mogoClientInstance.db(env.DATABASE_NAME);
};

export const GET_DB = () => {
  if (!panseeDBInstance) throw new console.error('Must connect to database');
  return panseeDBInstance;
};

export const CLOSE_DB = async () => {
  await mogoClientInstance.close();
};
