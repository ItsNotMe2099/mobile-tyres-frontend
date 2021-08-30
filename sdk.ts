import { GraphQLClient } from 'graphql-request'
import { getSdkWithHooks } from './types/graphql'
import crossFetch, * as CrossFetch from 'cross-fetch'
import {RequestDocument, Variables} from 'graphql-request/dist/types'
import {GraphQLError} from 'graphql'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
const COOKIE_TOKEN_KEY = "credentials";

const getAuthorizedSdk = (ctx = null) => {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  const cookies = parseCookies(ctx)
  const token = cookies[COOKIE_TOKEN_KEY];
  if(token){
    headers.Authorization = `Bearer ${token}`
  }
  //if (jwt) {
//    headers.Authorization = `Bearer ${jwt}`
 // }
  console.log("Ddsd", process.env.NEXT_PUBLIC_API_URL);
  const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_API_URL}?languageCode=ru`, {
    fetch: async (url, options) => {
      const cookies = parseCookies()
      const token = cookies[COOKIE_TOKEN_KEY];

      const res = await crossFetch(url, {...options,
        headers: {
        ...options.headers,
        ...(token ? {['Authorization']: `Bearer ${token}`} : {})
      }});
      if(res.headers.get('vendure-auth-token')){
        setCookie(null, COOKIE_TOKEN_KEY, res.headers.get('vendure-auth-token'), {
          maxAge: 365 * 24 * 60 * 60,
          path: '/'
        });
      }
      return res;
    },
    headers,
  });
  return getSdkWithHooks(
    client as GraphQLClient
  )
}

export default getAuthorizedSdk