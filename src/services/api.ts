import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsProps } from '../pages/Home'

export const api = createApi({
    reducerPath: 'restauranteApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood/' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<RestaurantsProps[], void>({
            query: () => 'restaurantes'
        })
    })
})

export const { useGetRestaurantsQuery } = api