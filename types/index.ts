
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
  email: 'info@tyreapp.com',
  instagram: '',
  facebook: ''
}
