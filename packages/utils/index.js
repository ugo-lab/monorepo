import { BACK_DEV_URL, BACK_PROD_URL } from '@monorepo/constants';

export const getBackUrl = (env) =>
  env === 'development' ? BACK_DEV_URL : BACK_PROD_URL;
