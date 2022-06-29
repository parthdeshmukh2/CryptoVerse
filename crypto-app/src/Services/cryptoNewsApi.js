import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cyrptoNewsHeaders = {
   
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '9ab2dfaf82msh2e03c0ea0779b6ep12d92djsn0db103bee968',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url)=> ({url, headers:cyrptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptoNews : builder.query({
            query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;