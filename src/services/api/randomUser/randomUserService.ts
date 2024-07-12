import { RandomUserType } from './randomUserTypes';

import { api } from '~/api/apiConfig';

export async function randomUserService() {
  const response = await api.get<RandomUserType>('api');

  return response.data;
}
