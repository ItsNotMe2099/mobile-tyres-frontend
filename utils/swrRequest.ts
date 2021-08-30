import Cookies from 'js-cookie'

import { IRequestData, IResponse } from 'types'
import nextCookie from 'next-cookies'
function swrRequest(requestData: IRequestData, ctx: any = null): Promise<any> {
  const { url, method, data, host, profileRole } = requestData
  const defaultHost = `${process.env.NEXT_PUBLIC_API_URL || 'https://bet-tv.dev.glob-com.ru'}`
  let token = requestData.token
  if (!token) {
    token = ctx ? nextCookie(ctx).token : Cookies.get('token')
  }
  return fetch(`${host || defaultHost}${url}`, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      'profile-role': profileRole,
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => {
    const contentType = res.headers.get('content-type')
    const isJson = contentType && contentType.indexOf('application/json') !== -1

    if (res.status !== 200 && res.status !== 201) {
      console.log('Response status:', res.status)
      return null
    }

    return isJson ? res.json() : res.text()
  })
}

export default swrRequest
