import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsProps } from '../pages/Home'

type Product = {
    id: number;
    price: number;
};

type PurchasePayload = {
    products: Product[];
    delivery: {
        receiver: string;
        address: {
            description: string;
            city: string;
            zipCode: string;
            number: number;
            complement: string;
        };
    };
    payment: {
        card: {
            name: string;
            number: string;
            code: number;
            expires: {
                month: number;
                year: number;
            };
        };
    };
};

type PurchaseResponse = {
    orderId: string;
};

export const api = createApi({
    reducerPath: 'restauranteApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood/' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<RestaurantsProps[], void>({
            query: () => 'restaurantes'
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query: (body) => ({
                url: "/checkout",
                method: "POST",
                body,
            }),
        }),
    }),

})

export const { useGetRestaurantsQuery, usePurchaseMutation } = api