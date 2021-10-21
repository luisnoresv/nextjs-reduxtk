import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DOG_API_HEADER } from '@lib/utils/appConstants';

export const dogsApi = createApi({
	reducerPath: 'dogApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.DOG_API_BASE_URL,
		prepareHeaders: (headers) => {
			headers.set(DOG_API_HEADER, process.env.DOG_API_KEY);

			return headers;
		},
	}),
	endpoints: (builder) => {
		return {
			fetchBreads: builder.query({
				query: (limit = 10) => {
					return `/breeds?limit=${limit}`;
				},
			}),
		};
	},
});

export const { useFetchBreadsQuery } = dogsApi;
