
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
  phone: '+7 (916) 317 10 38',
  email: 'info@tyreapp.com',
  whatsapp: '+79163171038',
  instagram: 'https://www.instagram.com/yuliya_terekhina/',
  facebook: 'https://www.facebook.com/Yuliya-Terekhina-STORE-102227252003226'
}

export const LINKS = {
  about: '/about',
  sales: '/sales',
  payment: '/payment',
  shipment: '/shipment',
  questions: '/questions',
  reviews: '/reviews',
  poshiv: '/individualnyj-poshi',
  vozvrat: '/vozvrat',
  dogovor: '/dogovor-publichnoj-oferty'
}
