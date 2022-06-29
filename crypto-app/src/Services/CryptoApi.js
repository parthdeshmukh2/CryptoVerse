import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders ={
    'X-RapidAPI-Key': '9ab2dfaf82msh2e03c0ea0779b6ep12d92djsn0db103bee968',
   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url)=> ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query : ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery,
  
} = cryptoApi;