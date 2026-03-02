import { defineQuery } from 'next-sanity';

import { client } from './client';

export { defineQuery };

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T> {
  return client.fetch<T>(query, params ?? {});
}
