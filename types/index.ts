
export interface IRequestData {
  url: string
  method?: 'POST' | 'PUT' | 'DELETE' | 'GET'
  data?: any
  token?: string
  host?: string
  profileRole?: string
}

export interface IResponse {
  data: any
  err: any
}


export const CONTACTS = {
  email: 'info.mobilhelp@gmail.com',
  instagram: 'https://www.instagram.com/mobil_help.ru/',
  facebook: 'https://vk.com/mobilhelpapp',
  appStore: 'https://apps.apple.com/ua/app/mobil-help/id1590825579?l=ru'
}
