import { env } from '~/config/environment';
import ApiError from '~/utils/ApiError';
import { WHITE_LIST_DOMAIN } from '~/utils/constants';

export const corsOptions = {
  origin: function (origin, callBack) {
    if (!origin && env.BUILD_MODE === 'dev') {
      return callBack(null, true);
    }
    if (WHITE_LIST_DOMAIN.includes(origin)) {
      return callBack(null, true);
    }
    return callBack(new Error(500, `${origin} not allowed by Cors`));
  },
  optionsSuccessStatus: 200,
  Credentials: true,
};
