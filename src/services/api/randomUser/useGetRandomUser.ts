import { useEffect, useState } from 'react';

import { randomUserService } from './randomUserService';
import { Result } from './randomUserTypes';

export function useGetRandomUser() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Result>({} as Result);
  const [error, setError] = useState<any | null>(null);

  async function getRandomUser() {
    try {
      setLoading(true);

      const response = await randomUserService();

      setData(response.results[0]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRandomUser();
  }, []);

  return {
    isLoading: loading,
    error,
    data,
  };
}
