import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { useSWRInfinite, ConfigInterface as SWRConfigInterface, keyInterface as SWRKeyInterface, SWRInfiniteConfigInterface } from 'swr';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ActiveOrderResult = Order | NoActiveOrderError;

export type AddPaymentToOrderResult = Order | OrderPaymentStateError | IneligiblePaymentMethodError | PaymentFailedError | PaymentDeclinedError | OrderStateTransitionError | NoActiveOrderError;

export type Address = Node & {
  __typename?: 'Address';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country: Country;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<AddressCustomFields>;
};

export type AddressCustomFields = {
  __typename?: 'AddressCustomFields';
  boxberryPointCode?: Maybe<Scalars['String']>;
  cdekPointCode?: Maybe<Scalars['String']>;
  cdekCityCode?: Maybe<Scalars['String']>;
  cdekSmsNotification?: Maybe<Scalars['Boolean']>;
  suggestion?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['String']>;
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String'];
  type: AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
};

export enum AdjustmentType {
  Promotion = 'PROMOTION',
  DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION'
}

/** Retured when attemting to set the Customer for an Order when already logged in. */
export type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type ApplyCouponCodeResult = Order | CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError;

export type Asset = Node & {
  __typename?: 'Asset';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  type: AssetType;
  fileSize: Scalars['Int'];
  mimeType: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  source: Scalars['String'];
  preview: Scalars['String'];
  focalPoint?: Maybe<Coordinate>;
  tags: Array<Tag>;
  customFields?: Maybe<AssetCustomFields>;
};

export type AssetCustomFields = {
  __typename?: 'AssetCustomFields';
  facetValues?: Maybe<Array<FacetValue>>;
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export enum AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Binary = 'BINARY'
}

export type AuthPhoneConfirmDto = {
  phone: Scalars['String'];
  code: Scalars['String'];
};

export type AuthenticationInput = {
  native?: Maybe<NativeAuthInput>;
  smsc?: Maybe<AuthPhoneConfirmDto>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  strategy: Scalars['String'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
};

export type BooleanOperators = {
  eq?: Maybe<Scalars['Boolean']>;
};

export type BoxberryCity = {
  __typename?: 'BoxberryCity';
  Name: Scalars['String'];
  Code: Scalars['String'];
  CountryCode: Scalars['String'];
  Prefix: Scalars['String'];
  ReceptionLaP: Scalars['Int'];
  DeliveryLaP: Scalars['Int'];
  Reception: Scalars['Int'];
  ForeignReceptionReturns: Scalars['Int'];
  Terminal: Scalars['Int'];
  Kladr: Scalars['String'];
  Region: Scalars['String'];
  UniqName: Scalars['String'];
  District: Scalars['String'];
  CourierReception: Scalars['Int'];
};

export type BoxberryPoint = {
  __typename?: 'BoxberryPoint';
  Code: Scalars['String'];
  Name: Scalars['String'];
  Address: Scalars['String'];
  Phone: Scalars['String'];
  WorkShedule: Scalars['String'];
  TripDescription: Scalars['String'];
  DeliveryPeriod: Scalars['String'];
  CityCode: Scalars['String'];
  CityName: Scalars['String'];
  TariffZone: Scalars['String'];
  Settlement: Scalars['String'];
  Area: Scalars['String'];
  Country: Scalars['String'];
  GPS: Scalars['String'];
  AddressReduce: Scalars['String'];
  OnlyPrepaidOrders: Scalars['String'];
  Acquiring: Scalars['String'];
  DigitalSignature: Scalars['String'];
  CountryCode: Scalars['String'];
  NalKD: Scalars['String'];
  Metro: Scalars['String'];
  TypeOfOffice: Scalars['String'];
  VolumeLimit: Scalars['String'];
  LoadLimit: Scalars['String'];
};

export type BoxberryPointDescription = {
  __typename?: 'BoxberryPointDescription';
  Name?: Maybe<Scalars['String']>;
  Organization?: Maybe<Scalars['String']>;
  ZipCode?: Maybe<Scalars['Int']>;
  Country?: Maybe<Scalars['String']>;
  Area?: Maybe<Scalars['String']>;
  CityCode?: Maybe<Scalars['String']>;
  CityName?: Maybe<Scalars['String']>;
  Settlement?: Maybe<Scalars['String']>;
  Metro?: Maybe<Scalars['String']>;
  Street?: Maybe<Scalars['String']>;
  House?: Maybe<Scalars['String']>;
  Structure?: Maybe<Scalars['String']>;
  Housing?: Maybe<Scalars['String']>;
  Apartment?: Maybe<Scalars['String']>;
  Address?: Maybe<Scalars['String']>;
  AddressReduce?: Maybe<Scalars['String']>;
  GPS?: Maybe<Scalars['String']>;
  TripDescription?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  ForeignOnlineStoresOnly?: Maybe<Scalars['String']>;
  PrepaidOrdersOnly?: Maybe<Scalars['String']>;
  Acquiring?: Maybe<Scalars['String']>;
  DigitalSignature?: Maybe<Scalars['String']>;
  TypeOfOffice?: Maybe<Scalars['Int']>;
  CourierDelivery?: Maybe<Scalars['String']>;
  Reception?: Maybe<Scalars['String']>;
  ReceptionLaP?: Maybe<Scalars['String']>;
  DeliveryLaP?: Maybe<Scalars['String']>;
  LoadLimit?: Maybe<Scalars['Float']>;
  VolumeLimit?: Maybe<Scalars['Float']>;
  EnablePartialDelivery?: Maybe<Scalars['String']>;
  EnableFitting?: Maybe<Scalars['String']>;
  fittingType?: Maybe<Scalars['Int']>;
  WorkShedule?: Maybe<Scalars['String']>;
  WorkMoBegin?: Maybe<Scalars['String']>;
  WorkMoEnd?: Maybe<Scalars['String']>;
  WorkTuBegin?: Maybe<Scalars['String']>;
  WorkTuEnd?: Maybe<Scalars['String']>;
  WorkWeBegin?: Maybe<Scalars['String']>;
  WorkWeEnd?: Maybe<Scalars['String']>;
  WorkThBegin?: Maybe<Scalars['String']>;
  WorkThEnd?: Maybe<Scalars['String']>;
  WorkFrBegin?: Maybe<Scalars['String']>;
  WorkFrEnd?: Maybe<Scalars['String']>;
  WorkSaBegin?: Maybe<Scalars['String']>;
  WorkSaEnd?: Maybe<Scalars['String']>;
  WorkSuBegin?: Maybe<Scalars['String']>;
  WorkSuEnd?: Maybe<Scalars['String']>;
  LunchMoBegin?: Maybe<Scalars['String']>;
  LunchMoEnd?: Maybe<Scalars['String']>;
  LunchTuBegin?: Maybe<Scalars['String']>;
  LunchTuEnd?: Maybe<Scalars['String']>;
  LunchWeBegin?: Maybe<Scalars['String']>;
  LunchWeEnd?: Maybe<Scalars['String']>;
  LunchThBegin?: Maybe<Scalars['String']>;
  LunchThEnd?: Maybe<Scalars['String']>;
  LunchFrBegin?: Maybe<Scalars['String']>;
  LunchFrEnd?: Maybe<Scalars['String']>;
  LunchSaBegin?: Maybe<Scalars['String']>;
  LunchSaEnd?: Maybe<Scalars['String']>;
  LunchSuBegin?: Maybe<Scalars['String']>;
  LunchSuEnd?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  TerminalCode?: Maybe<Scalars['String']>;
  TerminalName?: Maybe<Scalars['String']>;
  TerminalOrganization?: Maybe<Scalars['String']>;
  TerminalCityCode?: Maybe<Scalars['String']>;
  TerminalCityName?: Maybe<Scalars['String']>;
  TerminalAddress?: Maybe<Scalars['String']>;
  TerminalPhone?: Maybe<Scalars['String']>;
  CountryCode?: Maybe<Scalars['String']>;
  TransType?: Maybe<Scalars['Int']>;
  InterRefunds?: Maybe<Scalars['Int']>;
  ExpressReception?: Maybe<Scalars['Int']>;
  Terminal?: Maybe<Scalars['Int']>;
  IssuanceBoxberry?: Maybe<Scalars['Int']>;
  schedule?: Maybe<Scalars['String']>;
};

export type BoxberryStatus = {
  __typename?: 'BoxberryStatus';
  Date?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Comment?: Maybe<Scalars['String']>;
};

export type Cashback = Node & {
  __typename?: 'Cashback';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  cashbackCode?: Maybe<Scalars['String']>;
  cashbackPercentageValue: Scalars['Int'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  conditions: Array<ConfigurableOperation>;
};

export type CashbackList = PaginatedList & {
  __typename?: 'CashbackList';
  items: Array<Cashback>;
  totalItems: Scalars['Int'];
};

export type CdekCalculatorResponse = {
  __typename?: 'CdekCalculatorResponse';
  delivery_sum: Scalars['Float'];
  period_min?: Maybe<Scalars['Int']>;
  period_max?: Maybe<Scalars['Int']>;
  weight_calc?: Maybe<Scalars['Int']>;
  services?: Maybe<Array<CdekService>>;
  total_sum?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<CdekError>>;
};

export type CdekCity = {
  __typename?: 'CdekCity';
  code: Scalars['String'];
  city: Scalars['String'];
  fias_guid?: Maybe<Scalars['String']>;
  kladr_code?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_code?: Maybe<Scalars['Int']>;
  fias_region_guid?: Maybe<Scalars['String']>;
  kladr_region_code?: Maybe<Scalars['String']>;
  sub_region?: Maybe<Scalars['String']>;
  postal_codes?: Maybe<Array<Scalars['String']>>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  time_zone?: Maybe<Scalars['String']>;
  payment_limit?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<CdekError>>;
};

export type CdekDimension = {
  __typename?: 'CdekDimension';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
};

export type CdekError = {
  __typename?: 'CdekError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type CdekImage = {
  __typename?: 'CdekImage';
  url?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type CdekLocation = {
  __typename?: 'CdekLocation';
  country_code?: Maybe<Scalars['String']>;
  region_code?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
  city_code?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
  address_full?: Maybe<Scalars['String']>;
};

export type CdekPhone = {
  __typename?: 'CdekPhone';
  number?: Maybe<Scalars['String']>;
  additional?: Maybe<Scalars['String']>;
};

export type CdekPoint = {
  __typename?: 'CdekPoint';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<CdekLocation>;
  address_comment?: Maybe<Scalars['String']>;
  nearest_station?: Maybe<Scalars['String']>;
  nearest_metro_station?: Maybe<Scalars['String']>;
  work_time?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<CdekPhone>>;
  email?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  owner_code?: Maybe<Scalars['String']>;
  take_only?: Maybe<Scalars['Boolean']>;
  is_handout?: Maybe<Scalars['Boolean']>;
  is_reception?: Maybe<Scalars['Boolean']>;
  is_dressing_room?: Maybe<Scalars['Boolean']>;
  have_cashless?: Maybe<Scalars['Boolean']>;
  have_cash?: Maybe<Scalars['Boolean']>;
  allowed_cod?: Maybe<Scalars['Boolean']>;
  site?: Maybe<Scalars['String']>;
  office_image_list?: Maybe<Array<CdekImage>>;
  work_time_list?: Maybe<Array<CdekWorkTime>>;
  work_time_exceptions?: Maybe<Array<CdekWorkTimeException>>;
  weight_min?: Maybe<Scalars['Float']>;
  weight_max?: Maybe<Scalars['Float']>;
  fulfillment?: Maybe<Scalars['Boolean']>;
  dimensions?: Maybe<Array<CdekDimension>>;
  errors?: Maybe<Array<CdekError>>;
};

export type CdekService = {
  __typename?: 'CdekService';
  code: Scalars['String'];
  sum: Scalars['Float'];
};

export type CdekWorkTime = {
  __typename?: 'CdekWorkTime';
  day?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['String']>;
};

export type CdekWorkTimeException = {
  __typename?: 'CdekWorkTimeException';
  date?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  is_working?: Maybe<Scalars['Boolean']>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  token: Scalars['String'];
  defaultTaxZone?: Maybe<Zone>;
  defaultShippingZone?: Maybe<Zone>;
  defaultLanguageCode: LanguageCode;
  currencyCode: CurrencyCode;
  pricesIncludeTax: Scalars['Boolean'];
  customFields?: Maybe<Scalars['JSON']>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  slug: Scalars['String'];
  breadcrumbs: Array<CollectionBreadcrumb>;
  position: Scalars['Int'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  parent?: Maybe<Collection>;
  children?: Maybe<Array<Collection>>;
  filters: Array<ConfigurableOperation>;
  translations: Array<CollectionTranslation>;
  productVariants: ProductVariantList;
  customFields?: Maybe<CollectionCustomFields>;
};


export type CollectionProductVariantsArgs = {
  options?: Maybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CollectionCustomFields = {
  __typename?: 'CollectionCustomFields';
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoKeywords?: Maybe<Scalars['String']>;
};

export type CollectionFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  slug?: Maybe<StringOperators>;
  position?: Maybe<NumberOperators>;
  description?: Maybe<StringOperators>;
  seoDescription?: Maybe<StringOperators>;
  seoTitle?: Maybe<StringOperators>;
  seoKeywords?: Maybe<StringOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<CollectionSortParameter>;
  filter?: Maybe<CollectionFilterParameter>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int'];
};

export type CollectionSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  seoDescription?: Maybe<SortOrder>;
  seoTitle?: Maybe<SortOrder>;
  seoKeywords?: Maybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  required: Scalars['Boolean'];
  defaultValue?: Maybe<Scalars['JSON']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ui?: Maybe<Scalars['JSON']>;
};

export type ConfigArgInput = {
  name: Scalars['String'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  code: Scalars['String'];
  args: Array<ConfigArg>;
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  code: Scalars['String'];
  args: Array<ConfigArgDefinition>;
  description: Scalars['String'];
};

export type ConfigurableOperationInput = {
  code: Scalars['String'];
  arguments: Array<ConfigArgInput>;
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Country = Node & {
  __typename?: 'Country';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  translations: Array<CountryTranslation>;
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export type CountryTranslation = {
  __typename?: 'CountryTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  couponCode: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  couponCode: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  couponCode: Scalars['String'];
  limit: Scalars['Int'];
};

export type CreateAddressCustomFieldsInput = {
  boxberryPointCode?: Maybe<Scalars['String']>;
  cdekPointCode?: Maybe<Scalars['String']>;
  cdekCityCode?: Maybe<Scalars['String']>;
  cdekSmsNotification?: Maybe<Scalars['Boolean']>;
  suggestion?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['String']>;
};

export type CreateAddressInput = {
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<CreateAddressCustomFieldsInput>;
};

export type CreateAssetCustomFieldsInput = {
  facetValuesIds?: Maybe<Array<Scalars['ID']>>;
};

export type CreateAssetInput = {
  file: Scalars['Upload'];
  tags?: Maybe<Array<Scalars['String']>>;
  customFields?: Maybe<CreateAssetCustomFieldsInput>;
};

export type CreateAssetResult = Asset | MimeTypeError;

export type CreateCustomerCustomFieldsInput = {
  newEmail?: Maybe<Scalars['String']>;
  emailVerificationToken?: Maybe<Scalars['String']>;
  bonus?: Maybe<Scalars['Int']>;
};

export type CreateCustomerInput = {
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  customFields?: Maybe<CreateCustomerCustomFieldsInput>;
};

export type CreateSubscriptionInput = {
  emailAddress: Scalars['String'];
  customerId?: Maybe<Scalars['ID']>;
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byn = 'BYN',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** Swiss franc */
  Chf = 'CHF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Renminbi (Chinese) yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verde escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mru = 'MRU',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona/kronor */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Stn = 'STN',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikistani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan paʻanga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** Uruguayan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Ves = 'VES',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** CFP franc (franc Pacifique) */
  Xpf = 'XPF',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean dollar */
  Zwl = 'ZWL'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  id: Scalars['ID'];
  identifier: Scalars['String'];
  channels: Array<CurrentUserChannel>;
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  id: Scalars['ID'];
  token: Scalars['String'];
  code: Scalars['String'];
  permissions: Array<Permission>;
};

export type CustomField = {
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
};

export type CustomFieldConfig = StringCustomFieldConfig | LocaleStringCustomFieldConfig | IntCustomFieldConfig | FloatCustomFieldConfig | BooleanCustomFieldConfig | DateTimeCustomFieldConfig | RelationCustomFieldConfig | TextCustomFieldConfig;

export type Customer = Node & {
  __typename?: 'Customer';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  addresses?: Maybe<Array<Address>>;
  orders: OrderList;
  user?: Maybe<User>;
  wishList: ProductList;
  customFields?: Maybe<CustomerCustomFields>;
};


export type CustomerOrdersArgs = {
  options?: Maybe<OrderListOptions>;
};


export type CustomerWishListArgs = {
  options?: Maybe<ProductListOptions>;
};

export type CustomerCustomFields = {
  __typename?: 'CustomerCustomFields';
  newEmail?: Maybe<Scalars['String']>;
  emailVerificationToken?: Maybe<Scalars['String']>;
  bonus?: Maybe<Scalars['Int']>;
};

export type CustomerFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  title?: Maybe<StringOperators>;
  firstName?: Maybe<StringOperators>;
  lastName?: Maybe<StringOperators>;
  phoneNumber?: Maybe<StringOperators>;
  emailAddress?: Maybe<StringOperators>;
  newEmail?: Maybe<StringOperators>;
  emailVerificationToken?: Maybe<StringOperators>;
  bonus?: Maybe<NumberOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  customers: CustomerList;
};


export type CustomerGroupCustomersArgs = {
  options?: Maybe<CustomerListOptions>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type CustomerListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<CustomerSortParameter>;
  filter?: Maybe<CustomerFilterParameter>;
};

export type CustomerSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
  emailAddress?: Maybe<SortOrder>;
  newEmail?: Maybe<SortOrder>;
  emailVerificationToken?: Maybe<SortOrder>;
  bonus?: Maybe<SortOrder>;
};

export type DateOperators = {
  eq?: Maybe<Scalars['DateTime']>;
  before?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateRange>;
};

export type DateRange = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};


/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['Int']>;
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  result: DeletionResult;
  message?: Maybe<Scalars['String']>;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  Deleted = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NotDeleted = 'NOT_DELETED'
}

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String'];
  type: AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
  amountWithTax: Scalars['Int'];
};

/** Retured when attemting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export enum ErrorCode {
  UnknownError = 'UNKNOWN_ERROR',
  NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
  InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
  OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
  EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  OrderLimitError = 'ORDER_LIMIT_ERROR',
  NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
  InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
  OrderModificationError = 'ORDER_MODIFICATION_ERROR',
  IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  OrderPaymentStateError = 'ORDER_PAYMENT_STATE_ERROR',
  IneligiblePaymentMethodError = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  PaymentFailedError = 'PAYMENT_FAILED_ERROR',
  PaymentDeclinedError = 'PAYMENT_DECLINED_ERROR',
  CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
  CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
  CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
  AlreadyLoggedInError = 'ALREADY_LOGGED_IN_ERROR',
  MissingPasswordError = 'MISSING_PASSWORD_ERROR',
  PasswordAlreadySetError = 'PASSWORD_ALREADY_SET_ERROR',
  VerificationTokenInvalidError = 'VERIFICATION_TOKEN_INVALID_ERROR',
  VerificationTokenExpiredError = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  IdentifierChangeTokenInvalidError = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  IdentifierChangeTokenExpiredError = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  PasswordResetTokenInvalidError = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PasswordResetTokenExpiredError = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  NotVerifiedError = 'NOT_VERIFIED_ERROR',
  NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR',
  MimeTypeError = 'MIME_TYPE_ERROR'
}

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  code: Scalars['String'];
  values: Array<FacetValue>;
  translations: Array<FacetTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  facet: Facet;
  name: Scalars['String'];
  code: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  customFields?: Maybe<FacetValueCustomFields>;
};

export type FacetValueCustomFields = {
  __typename?: 'FacetValueCustomFields';
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoKeywords?: Maybe<Scalars['String']>;
  textTitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
  and?: Maybe<Scalars['ID']>;
  or?: Maybe<Array<Scalars['ID']>>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  facetValue: FacetValue;
  count: Scalars['Int'];
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  step?: Maybe<Scalars['Float']>;
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  orderItems: Array<OrderItem>;
  state: Scalars['String'];
  method: Scalars['String'];
  trackingCode?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export enum GlobalFlag {
  True = 'TRUE',
  False = 'FALSE',
  Inherit = 'INHERIT'
}

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: HistoryEntryType;
  data: Scalars['JSON'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  type?: Maybe<StringOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<HistoryEntrySortParameter>;
  filter?: Maybe<HistoryEntryFilterParameter>;
};

export type HistoryEntrySortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum HistoryEntryType {
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerNote = 'CUSTOMER_NOTE',
  OrderStateTransition = 'ORDER_STATE_TRANSITION',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderFulfillment = 'ORDER_FULFILLMENT',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
  OrderNote = 'ORDER_NOTE',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
  OrderModified = 'ORDER_MODIFIED'
}

/**
 * Retured if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Retured if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible. */
export type IneligiblePaymentMethodError = ErrorResult & {
  __typename?: 'IneligiblePaymentMethodError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  eligibilityCheckerMessage?: Maybe<Scalars['String']>;
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  quantityAvailable: Scalars['Int'];
  order: Order;
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  authenticationError: Scalars['String'];
};


/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  Af = 'af',
  /** Akan */
  Ak = 'ak',
  /** Albanian */
  Sq = 'sq',
  /** Amharic */
  Am = 'am',
  /** Arabic */
  Ar = 'ar',
  /** Armenian */
  Hy = 'hy',
  /** Assamese */
  As = 'as',
  /** Azerbaijani */
  Az = 'az',
  /** Bambara */
  Bm = 'bm',
  /** Bangla */
  Bn = 'bn',
  /** Basque */
  Eu = 'eu',
  /** Belarusian */
  Be = 'be',
  /** Bosnian */
  Bs = 'bs',
  /** Breton */
  Br = 'br',
  /** Bulgarian */
  Bg = 'bg',
  /** Burmese */
  My = 'my',
  /** Catalan */
  Ca = 'ca',
  /** Chechen */
  Ce = 'ce',
  /** Chinese */
  Zh = 'zh',
  /** Simplified Chinese */
  ZhHans = 'zh_Hans',
  /** Traditional Chinese */
  ZhHant = 'zh_Hant',
  /** Church Slavic */
  Cu = 'cu',
  /** Cornish */
  Kw = 'kw',
  /** Corsican */
  Co = 'co',
  /** Croatian */
  Hr = 'hr',
  /** Czech */
  Cs = 'cs',
  /** Danish */
  Da = 'da',
  /** Dutch */
  Nl = 'nl',
  /** Flemish */
  NlBe = 'nl_BE',
  /** Dzongkha */
  Dz = 'dz',
  /** English */
  En = 'en',
  /** Australian English */
  EnAu = 'en_AU',
  /** Canadian English */
  EnCa = 'en_CA',
  /** British English */
  EnGb = 'en_GB',
  /** American English */
  EnUs = 'en_US',
  /** Esperanto */
  Eo = 'eo',
  /** Estonian */
  Et = 'et',
  /** Ewe */
  Ee = 'ee',
  /** Faroese */
  Fo = 'fo',
  /** Finnish */
  Fi = 'fi',
  /** French */
  Fr = 'fr',
  /** Canadian French */
  FrCa = 'fr_CA',
  /** Swiss French */
  FrCh = 'fr_CH',
  /** Fulah */
  Ff = 'ff',
  /** Galician */
  Gl = 'gl',
  /** Ganda */
  Lg = 'lg',
  /** Georgian */
  Ka = 'ka',
  /** German */
  De = 'de',
  /** Austrian German */
  DeAt = 'de_AT',
  /** Swiss High German */
  DeCh = 'de_CH',
  /** Greek */
  El = 'el',
  /** Gujarati */
  Gu = 'gu',
  /** Haitian Creole */
  Ht = 'ht',
  /** Hausa */
  Ha = 'ha',
  /** Hebrew */
  He = 'he',
  /** Hindi */
  Hi = 'hi',
  /** Hungarian */
  Hu = 'hu',
  /** Icelandic */
  Is = 'is',
  /** Igbo */
  Ig = 'ig',
  /** Indonesian */
  Id = 'id',
  /** Interlingua */
  Ia = 'ia',
  /** Irish */
  Ga = 'ga',
  /** Italian */
  It = 'it',
  /** Japanese */
  Ja = 'ja',
  /** Javanese */
  Jv = 'jv',
  /** Kalaallisut */
  Kl = 'kl',
  /** Kannada */
  Kn = 'kn',
  /** Kashmiri */
  Ks = 'ks',
  /** Kazakh */
  Kk = 'kk',
  /** Khmer */
  Km = 'km',
  /** Kikuyu */
  Ki = 'ki',
  /** Kinyarwanda */
  Rw = 'rw',
  /** Korean */
  Ko = 'ko',
  /** Kurdish */
  Ku = 'ku',
  /** Kyrgyz */
  Ky = 'ky',
  /** Lao */
  Lo = 'lo',
  /** Latin */
  La = 'la',
  /** Latvian */
  Lv = 'lv',
  /** Lingala */
  Ln = 'ln',
  /** Lithuanian */
  Lt = 'lt',
  /** Luba-Katanga */
  Lu = 'lu',
  /** Luxembourgish */
  Lb = 'lb',
  /** Macedonian */
  Mk = 'mk',
  /** Malagasy */
  Mg = 'mg',
  /** Malay */
  Ms = 'ms',
  /** Malayalam */
  Ml = 'ml',
  /** Maltese */
  Mt = 'mt',
  /** Manx */
  Gv = 'gv',
  /** Maori */
  Mi = 'mi',
  /** Marathi */
  Mr = 'mr',
  /** Mongolian */
  Mn = 'mn',
  /** Nepali */
  Ne = 'ne',
  /** North Ndebele */
  Nd = 'nd',
  /** Northern Sami */
  Se = 'se',
  /** Norwegian Bokmål */
  Nb = 'nb',
  /** Norwegian Nynorsk */
  Nn = 'nn',
  /** Nyanja */
  Ny = 'ny',
  /** Odia */
  Or = 'or',
  /** Oromo */
  Om = 'om',
  /** Ossetic */
  Os = 'os',
  /** Pashto */
  Ps = 'ps',
  /** Persian */
  Fa = 'fa',
  /** Dari */
  FaAf = 'fa_AF',
  /** Polish */
  Pl = 'pl',
  /** Portuguese */
  Pt = 'pt',
  /** Brazilian Portuguese */
  PtBr = 'pt_BR',
  /** European Portuguese */
  PtPt = 'pt_PT',
  /** Punjabi */
  Pa = 'pa',
  /** Quechua */
  Qu = 'qu',
  /** Romanian */
  Ro = 'ro',
  /** Moldavian */
  RoMd = 'ro_MD',
  /** Romansh */
  Rm = 'rm',
  /** Rundi */
  Rn = 'rn',
  /** Russian */
  Ru = 'ru',
  /** Samoan */
  Sm = 'sm',
  /** Sango */
  Sg = 'sg',
  /** Sanskrit */
  Sa = 'sa',
  /** Scottish Gaelic */
  Gd = 'gd',
  /** Serbian */
  Sr = 'sr',
  /** Shona */
  Sn = 'sn',
  /** Sichuan Yi */
  Ii = 'ii',
  /** Sindhi */
  Sd = 'sd',
  /** Sinhala */
  Si = 'si',
  /** Slovak */
  Sk = 'sk',
  /** Slovenian */
  Sl = 'sl',
  /** Somali */
  So = 'so',
  /** Southern Sotho */
  St = 'st',
  /** Spanish */
  Es = 'es',
  /** European Spanish */
  EsEs = 'es_ES',
  /** Mexican Spanish */
  EsMx = 'es_MX',
  /** Sundanese */
  Su = 'su',
  /** Swahili */
  Sw = 'sw',
  /** Congo Swahili */
  SwCd = 'sw_CD',
  /** Swedish */
  Sv = 'sv',
  /** Tajik */
  Tg = 'tg',
  /** Tamil */
  Ta = 'ta',
  /** Tatar */
  Tt = 'tt',
  /** Telugu */
  Te = 'te',
  /** Thai */
  Th = 'th',
  /** Tibetan */
  Bo = 'bo',
  /** Tigrinya */
  Ti = 'ti',
  /** Tongan */
  To = 'to',
  /** Turkish */
  Tr = 'tr',
  /** Turkmen */
  Tk = 'tk',
  /** Ukrainian */
  Uk = 'uk',
  /** Urdu */
  Ur = 'ur',
  /** Uyghur */
  Ug = 'ug',
  /** Uzbek */
  Uz = 'uz',
  /** Vietnamese */
  Vi = 'vi',
  /** Volapük */
  Vo = 'vo',
  /** Welsh */
  Cy = 'cy',
  /** Western Frisian */
  Fy = 'fy',
  /** Wolof */
  Wo = 'wo',
  /** Xhosa */
  Xh = 'xh',
  /** Yiddish */
  Yi = 'yi',
  /** Yoruba */
  Yo = 'yo',
  /** Zulu */
  Zu = 'zu'
}

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  length?: Maybe<Scalars['Int']>;
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String'];
};

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

export type MimeTypeError = ErrorResult & {
  __typename?: 'MimeTypeError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  fileName: Scalars['String'];
  mimeType: Scalars['String'];
};

/** Retured when attemting to register or verify a customer account without a password, when one is required. */
export type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available. */
  addItemToOrder: UpdateOrderItemsResult;
  /** Remove an OrderLine from the Order */
  removeOrderLine: RemoveOrderItemsResult;
  /** Remove all OrderLine from the Order */
  removeAllOrderLines: RemoveOrderItemsResult;
  /** Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the active Order */
  applyCouponCode: ApplyCouponCodeResult;
  /** Removes the given coupon code from the active Order */
  removeCouponCode?: Maybe<Order>;
  /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  /** Sets the shipping address for this order */
  setOrderShippingAddress: ActiveOrderResult;
  /** Sets the billing address for this order */
  setOrderBillingAddress: ActiveOrderResult;
  /** Allows any custom fields to be set for the active order */
  setOrderCustomFields: ActiveOrderResult;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query */
  setOrderShippingMethod: SetOrderShippingMethodResult;
  /** Add a Payment to the Order */
  addPaymentToOrder: AddPaymentToOrderResult;
  /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
  setCustomerForOrder: SetCustomerForOrderResult;
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  /** End the current authenticated session */
  logout: Success;
  /**
   * Register a Customer account with the given credentials. There are three possible registration flows:
   *
   * _If `authOptions.requireVerification` is set to `true`:_
   *
   * 1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
   *    verified and authenticated in one step.
   * 2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosed password of the Customer. The Customer is then
   *    verified and authenticated in one step.
   *
   * _If `authOptions.requireVerification` is set to `false`:_
   *
   * 3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
   */
  registerCustomerAccount: RegisterCustomerAccountResult;
  /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /** Delete an existing Address */
  deleteCustomerAddress: Success;
  /**
   * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.
   *
   * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the a password _must_ be
   * provided here.
   */
  verifyCustomerAccount: VerifyCustomerAccountResult;
  /** Update the password of the active Customer */
  updateCustomerPassword: UpdateCustomerPasswordResult;
  /**
   * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
   * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
   * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
   * that verification token to the Customer, which is then used to verify the change of email address.
   */
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  /**
   * Confirm the update of the emailAddress with the provided token, which has been generated by the
   * `requestUpdateCustomerEmailAddress` mutation.
   */
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  /** Resets a Customer's password based on the provided token */
  resetPassword: ResetPasswordResult;
  register?: Maybe<RegisterResult>;
  updateEmailAddress: RequestUpdateCustomerEmailAddressResult;
  verifyEmailAddress: UpdateCustomerEmailAddressResult;
  addProductsToCustomerWishList: Success;
  removeProductsFromCustomerWishList: Success;
  /** Create a new Asset */
  createAssets: Array<CreateAssetResult>;
  submitProductReview: ProductReview;
  createSubscription: Subscription;
};


export type MutationAddItemToOrderArgs = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
  customFields?: Maybe<OrderLineCustomFieldsInput>;
};


export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID'];
};


export type MutationAdjustOrderLineArgs = {
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
  customFields?: Maybe<OrderLineCustomFieldsInput>;
};


export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String'];
};


export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String'];
};


export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Scalars['ID'];
};


export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};


export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: Maybe<Scalars['Boolean']>;
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: Maybe<Scalars['Boolean']>;
};


export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};


export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};


export type MutationVerifyCustomerAccountArgs = {
  token: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};


export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
  password: Scalars['String'];
  newEmailAddress: Scalars['String'];
};


export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  phone: Scalars['String'];
};


export type MutationUpdateEmailAddressArgs = {
  newEmailAddress: Scalars['String'];
};


export type MutationVerifyEmailAddressArgs = {
  token: Scalars['String'];
};


export type MutationAddProductsToCustomerWishListArgs = {
  productsIds: Array<Scalars['ID']>;
};


export type MutationRemoveProductsFromCustomerWishListArgs = {
  productsIds: Array<Scalars['ID']>;
};


export type MutationCreateAssetsArgs = {
  input: Array<CreateAssetInput>;
};


export type MutationSubmitProductReviewArgs = {
  input: SubmitProductReviewInput;
};


export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};

export type NativeAuthInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

/** Retured when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError | NativeAuthStrategyError;

/** Retured when attemting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

/**
 * Returned if `authOptions.requireVerification` is set to `true` (which is the default)
 * and an unverified user attempts to authenticate.
 */
export type NotVerifiedError = ErrorResult & {
  __typename?: 'NotVerifiedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type NumberOperators = {
  eq?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  between?: Maybe<NumberRange>;
};

export type NumberRange = {
  start: Scalars['Float'];
  end: Scalars['Float'];
};

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  /** A unique code for the Order */
  code: Scalars['String'];
  state: Scalars['String'];
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean'];
  customer?: Maybe<Customer>;
  shippingAddress?: Maybe<OrderAddress>;
  billingAddress?: Maybe<OrderAddress>;
  lines: Array<OrderLine>;
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  discounts: Array<Discount>;
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  payments?: Maybe<Array<Payment>>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  totalQuantity: Scalars['Int'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the OrderItems.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Int'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Int'];
  currencyCode: CurrencyCode;
  shippingLines: Array<ShippingLine>;
  shipping: Scalars['Int'];
  shippingWithTax: Scalars['Int'];
  /** Equal to subTotal plus shipping */
  total: Scalars['Int'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Int'];
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  history: HistoryEntryList;
  bonus?: Maybe<Scalars['Int']>;
  customFields?: Maybe<OrderCustomFields>;
};


export type OrderHistoryArgs = {
  options?: Maybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  customFields?: Maybe<AddressCustomFields>;
};

export type OrderCustomFields = {
  __typename?: 'OrderCustomFields';
  comment?: Maybe<Scalars['String']>;
  useBonuses?: Maybe<Scalars['Int']>;
  bonusesUsed?: Maybe<Scalars['Int']>;
};

export type OrderFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  orderPlacedAt?: Maybe<DateOperators>;
  code?: Maybe<StringOperators>;
  state?: Maybe<StringOperators>;
  active?: Maybe<BooleanOperators>;
  totalQuantity?: Maybe<NumberOperators>;
  subTotal?: Maybe<NumberOperators>;
  subTotalWithTax?: Maybe<NumberOperators>;
  currencyCode?: Maybe<StringOperators>;
  shipping?: Maybe<NumberOperators>;
  shippingWithTax?: Maybe<NumberOperators>;
  total?: Maybe<NumberOperators>;
  totalWithTax?: Maybe<NumberOperators>;
  bonus?: Maybe<NumberOperators>;
  comment?: Maybe<StringOperators>;
  useBonuses?: Maybe<NumberOperators>;
  bonusesUsed?: Maybe<NumberOperators>;
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  cancelled: Scalars['Boolean'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Int'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Int'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Int'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Int'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportially-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Int'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Int'];
  unitTax: Scalars['Int'];
  taxRate: Scalars['Float'];
  adjustments: Array<Adjustment>;
  taxLines: Array<TaxLine>;
  fulfillment?: Maybe<Fulfillment>;
  refundId?: Maybe<Scalars['ID']>;
};

/** Retured when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  maxItems: Scalars['Int'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  featuredAsset?: Maybe<Asset>;
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Int'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Int'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Int'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Int'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Int'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Int'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportially-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Int'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  items: Array<OrderItem>;
  taxRate: Scalars['Float'];
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Int'];
  /** The total price of the line including tax bit excluding discounts. */
  linePriceWithTax: Scalars['Int'];
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Int'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Int'];
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportially-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Int'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Int'];
  /** The total tax on this line */
  lineTax: Scalars['Int'];
  discounts: Array<Discount>;
  taxLines: Array<TaxLine>;
  order: Order;
  customFields?: Maybe<OrderLineCustomFields>;
};

export type OrderLineCustomFields = {
  __typename?: 'OrderLineCustomFields';
  customSizeHeight?: Maybe<Scalars['Int']>;
  customSizeBust?: Maybe<Scalars['Int']>;
  customSizeWaist?: Maybe<Scalars['Int']>;
  customSizeHip?: Maybe<Scalars['Int']>;
};

export type OrderLineCustomFieldsInput = {
  customSizeHeight?: Maybe<Scalars['Int']>;
  customSizeBust?: Maybe<Scalars['Int']>;
  customSizeWaist?: Maybe<Scalars['Int']>;
  customSizeHip?: Maybe<Scalars['Int']>;
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export type OrderListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<OrderSortParameter>;
  filter?: Maybe<OrderFilterParameter>;
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  orderPlacedAt?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  totalQuantity?: Maybe<SortOrder>;
  subTotal?: Maybe<SortOrder>;
  subTotalWithTax?: Maybe<SortOrder>;
  shipping?: Maybe<SortOrder>;
  shippingWithTax?: Maybe<SortOrder>;
  total?: Maybe<SortOrder>;
  totalWithTax?: Maybe<SortOrder>;
  bonus?: Maybe<SortOrder>;
  comment?: Maybe<SortOrder>;
  useBonuses?: Maybe<SortOrder>;
  bonusesUsed?: Maybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  transitionError: Scalars['String'];
  fromState: Scalars['String'];
  toState: Scalars['String'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  /** A description of this tax */
  description: Scalars['String'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float'];
  /** The total net price or OrderItems to which this taxRate applies */
  taxBase: Scalars['Int'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Int'];
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

/** Retured when attemting to verify a customer account with a password, when a password has already been set. */
export type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Retured if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Retured if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  method: Scalars['String'];
  amount: Scalars['Int'];
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  refunds: Array<Refund>;
  metadata?: Maybe<Scalars['JSON']>;
};

/** Returned when a Payment is declined by the payment provider. */
export type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

/** Returned when a Payment fails due to an error. */
export type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
  /** This field should correspond to the `code` property of a PaymentMethodHandler. */
  method: Scalars['String'];
  /**
   * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
   * as the "metadata" argument. For example, it could contain an ID for the payment and other
   * data generated by the payment provider.
   */
  metadata: Scalars['JSON'];
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  isEligible: Scalars['Boolean'];
  eligibilityMessage?: Maybe<Scalars['String']>;
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * @docsCategory common
 */
export enum Permission {
  /** Authenticated means simply that the user is logged in */
  Authenticated = 'Authenticated',
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = 'SuperAdmin',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation */
  Public = 'Public',
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = 'CreateCatalog',
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = 'ReadCatalog',
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = 'UpdateCatalog',
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = 'DeleteCatalog',
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = 'CreateSettings',
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = 'ReadSettings',
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = 'UpdateSettings',
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = 'DeleteSettings',
  /** Grants permission to create Administrator */
  CreateAdministrator = 'CreateAdministrator',
  /** Grants permission to read Administrator */
  ReadAdministrator = 'ReadAdministrator',
  /** Grants permission to update Administrator */
  UpdateAdministrator = 'UpdateAdministrator',
  /** Grants permission to delete Administrator */
  DeleteAdministrator = 'DeleteAdministrator',
  /** Grants permission to create Asset */
  CreateAsset = 'CreateAsset',
  /** Grants permission to read Asset */
  ReadAsset = 'ReadAsset',
  /** Grants permission to update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Grants permission to delete Asset */
  DeleteAsset = 'DeleteAsset',
  /** Grants permission to create Channel */
  CreateChannel = 'CreateChannel',
  /** Grants permission to read Channel */
  ReadChannel = 'ReadChannel',
  /** Grants permission to update Channel */
  UpdateChannel = 'UpdateChannel',
  /** Grants permission to delete Channel */
  DeleteChannel = 'DeleteChannel',
  /** Grants permission to create Collection */
  CreateCollection = 'CreateCollection',
  /** Grants permission to read Collection */
  ReadCollection = 'ReadCollection',
  /** Grants permission to update Collection */
  UpdateCollection = 'UpdateCollection',
  /** Grants permission to delete Collection */
  DeleteCollection = 'DeleteCollection',
  /** Grants permission to create Country */
  CreateCountry = 'CreateCountry',
  /** Grants permission to read Country */
  ReadCountry = 'ReadCountry',
  /** Grants permission to update Country */
  UpdateCountry = 'UpdateCountry',
  /** Grants permission to delete Country */
  DeleteCountry = 'DeleteCountry',
  /** Grants permission to create Customer */
  CreateCustomer = 'CreateCustomer',
  /** Grants permission to read Customer */
  ReadCustomer = 'ReadCustomer',
  /** Grants permission to update Customer */
  UpdateCustomer = 'UpdateCustomer',
  /** Grants permission to delete Customer */
  DeleteCustomer = 'DeleteCustomer',
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = 'CreateCustomerGroup',
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = 'ReadCustomerGroup',
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  /** Grants permission to create Facet */
  CreateFacet = 'CreateFacet',
  /** Grants permission to read Facet */
  ReadFacet = 'ReadFacet',
  /** Grants permission to update Facet */
  UpdateFacet = 'UpdateFacet',
  /** Grants permission to delete Facet */
  DeleteFacet = 'DeleteFacet',
  /** Grants permission to create Order */
  CreateOrder = 'CreateOrder',
  /** Grants permission to read Order */
  ReadOrder = 'ReadOrder',
  /** Grants permission to update Order */
  UpdateOrder = 'UpdateOrder',
  /** Grants permission to delete Order */
  DeleteOrder = 'DeleteOrder',
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = 'CreatePaymentMethod',
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = 'ReadPaymentMethod',
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = 'DeletePaymentMethod',
  /** Grants permission to create Product */
  CreateProduct = 'CreateProduct',
  /** Grants permission to read Product */
  ReadProduct = 'ReadProduct',
  /** Grants permission to update Product */
  UpdateProduct = 'UpdateProduct',
  /** Grants permission to delete Product */
  DeleteProduct = 'DeleteProduct',
  /** Grants permission to create Promotion */
  CreatePromotion = 'CreatePromotion',
  /** Grants permission to read Promotion */
  ReadPromotion = 'ReadPromotion',
  /** Grants permission to update Promotion */
  UpdatePromotion = 'UpdatePromotion',
  /** Grants permission to delete Promotion */
  DeletePromotion = 'DeletePromotion',
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = 'CreateShippingMethod',
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = 'ReadShippingMethod',
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = 'UpdateShippingMethod',
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = 'DeleteShippingMethod',
  /** Grants permission to create Tag */
  CreateTag = 'CreateTag',
  /** Grants permission to read Tag */
  ReadTag = 'ReadTag',
  /** Grants permission to update Tag */
  UpdateTag = 'UpdateTag',
  /** Grants permission to delete Tag */
  DeleteTag = 'DeleteTag',
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = 'CreateTaxCategory',
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = 'ReadTaxCategory',
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = 'UpdateTaxCategory',
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = 'DeleteTaxCategory',
  /** Grants permission to create TaxRate */
  CreateTaxRate = 'CreateTaxRate',
  /** Grants permission to read TaxRate */
  ReadTaxRate = 'ReadTaxRate',
  /** Grants permission to update TaxRate */
  UpdateTaxRate = 'UpdateTaxRate',
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = 'DeleteTaxRate',
  /** Grants permission to create System */
  CreateSystem = 'CreateSystem',
  /** Grants permission to read System */
  ReadSystem = 'ReadSystem',
  /** Grants permission to update System */
  UpdateSystem = 'UpdateSystem',
  /** Grants permission to delete System */
  DeleteSystem = 'DeleteSystem',
  /** Grants permission to create Zone */
  CreateZone = 'CreateZone',
  /** Grants permission to read Zone */
  ReadZone = 'ReadZone',
  /** Grants permission to update Zone */
  UpdateZone = 'UpdateZone',
  /** Grants permission to delete Zone */
  DeleteZone = 'DeleteZone'
}

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  variants: Array<ProductVariant>;
  optionGroups: Array<ProductOptionGroup>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductTranslation>;
  collections: Array<Collection>;
  relatedProducts: ProductList;
  inWishList: Scalars['Boolean'];
  reviews: ProductReviewList;
  customFields?: Maybe<ProductCustomFields>;
};


export type ProductRelatedProductsArgs = {
  options?: Maybe<ProductListOptions>;
};


export type ProductReviewsArgs = {
  options?: Maybe<ProductReviewListOptions>;
};

export type ProductCustomFields = {
  __typename?: 'ProductCustomFields';
  weight?: Maybe<Scalars['Int']>;
  oldPrice?: Maybe<Scalars['Int']>;
  isHit?: Maybe<Scalars['Boolean']>;
  sizes?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  care?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoKeywords?: Maybe<Scalars['String']>;
  optionGroups?: Maybe<Array<ProductOptionGroup>>;
  reviewRating?: Maybe<Scalars['Float']>;
  reviewCount?: Maybe<Scalars['Float']>;
};

export type ProductFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  slug?: Maybe<StringOperators>;
  description?: Maybe<StringOperators>;
  inWishList?: Maybe<BooleanOperators>;
  weight?: Maybe<NumberOperators>;
  oldPrice?: Maybe<NumberOperators>;
  isHit?: Maybe<BooleanOperators>;
  sizes?: Maybe<StringOperators>;
  materials?: Maybe<StringOperators>;
  care?: Maybe<StringOperators>;
  seoDescription?: Maybe<StringOperators>;
  seoTitle?: Maybe<StringOperators>;
  seoKeywords?: Maybe<StringOperators>;
  reviewRating?: Maybe<NumberOperators>;
  reviewCount?: Maybe<NumberOperators>;
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int'];
};

export type ProductListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductSortParameter>;
  filter?: Maybe<ProductFilterParameter>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  groupId: Scalars['ID'];
  group: ProductOptionGroup;
  translations: Array<ProductOptionTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductReview = Node & {
  __typename?: 'ProductReview';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  product?: Maybe<Product>;
  summary: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  author?: Maybe<Customer>;
  authorName: Scalars['String'];
  authorEmail: Scalars['String'];
  state: Scalars['String'];
  reviewType: Scalars['String'];
  response?: Maybe<Scalars['String']>;
  responseCreatedAt?: Maybe<Scalars['DateTime']>;
  assets: Array<Asset>;
  featuredAsset?: Maybe<Asset>;
};

export type ProductReviewFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  summary?: Maybe<StringOperators>;
  body?: Maybe<StringOperators>;
  rating?: Maybe<NumberOperators>;
  authorName?: Maybe<StringOperators>;
  authorEmail?: Maybe<StringOperators>;
  state?: Maybe<StringOperators>;
  reviewType?: Maybe<StringOperators>;
  response?: Maybe<StringOperators>;
  responseCreatedAt?: Maybe<DateOperators>;
};

export type ProductReviewList = PaginatedList & {
  __typename?: 'ProductReviewList';
  items: Array<ProductReview>;
  totalItems: Scalars['Int'];
};

export type ProductReviewListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductReviewSortParameter>;
  filter?: Maybe<ProductReviewFilterParameter>;
};

export type ProductReviewSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  summary?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  authorName?: Maybe<SortOrder>;
  authorEmail?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  reviewType?: Maybe<SortOrder>;
  response?: Maybe<SortOrder>;
  responseCreatedAt?: Maybe<SortOrder>;
};

export type ProductSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
  oldPrice?: Maybe<SortOrder>;
  isHit?: Maybe<SortOrder>;
  sizes?: Maybe<SortOrder>;
  materials?: Maybe<SortOrder>;
  care?: Maybe<SortOrder>;
  seoDescription?: Maybe<SortOrder>;
  seoTitle?: Maybe<SortOrder>;
  seoKeywords?: Maybe<SortOrder>;
  optionGroups?: Maybe<Array<SortOrder>>;
  reviewRating?: Maybe<SortOrder>;
  reviewCount?: Maybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  sku: Scalars['String'];
  name: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  price: Scalars['Int'];
  currencyCode: CurrencyCode;
  priceWithTax: Scalars['Int'];
  stockLevel: Scalars['String'];
  taxRateApplied: TaxRate;
  taxCategory: TaxCategory;
  options: Array<ProductOption>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductVariantTranslation>;
  productAssetsFilteredByFacets: Array<Asset>;
  customFields?: Maybe<ProductVariantCustomFields>;
};

export type ProductVariantCustomFields = {
  __typename?: 'ProductVariantCustomFields';
  weight?: Maybe<Scalars['Int']>;
  oldPrice?: Maybe<Scalars['Int']>;
  isHit?: Maybe<Scalars['Boolean']>;
};

export type ProductVariantFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  sku?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  price?: Maybe<NumberOperators>;
  currencyCode?: Maybe<StringOperators>;
  priceWithTax?: Maybe<NumberOperators>;
  stockLevel?: Maybe<StringOperators>;
  weight?: Maybe<NumberOperators>;
  oldPrice?: Maybe<NumberOperators>;
  isHit?: Maybe<BooleanOperators>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductVariantSortParameter>;
  filter?: Maybe<ProductVariantFilterParameter>;
};

export type ProductVariantSortParameter = {
  id?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  sku?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  priceWithTax?: Maybe<SortOrder>;
  stockLevel?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
  oldPrice?: Maybe<SortOrder>;
  isHit?: Maybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  startsAt?: Maybe<Scalars['DateTime']>;
  endsAt?: Maybe<Scalars['DateTime']>;
  couponCode?: Maybe<Scalars['String']>;
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  conditions: Array<ConfigurableOperation>;
  actions: Array<ConfigurableOperation>;
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** The active Channel */
  activeChannel: Channel;
  /** The active Customer */
  activeCustomer?: Maybe<Customer>;
  /**
   * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
   * state of `PaymentApproved` or `PaymentSettled`, then that Order is no longer considered "active" and this
   * query will once again return `null`.
   */
  activeOrder?: Maybe<Order>;
  /** An array of supported Countries */
  availableCountries: Array<Country>;
  /** A list of Collections available to the shop */
  collections: CollectionList;
  /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is speicified, an error will result. */
  collection?: Maybe<Collection>;
  /** Returns a list of eligible shipping methods based on the current active Order */
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  /** Returns a list of payment methods and their eligibility based on the current active Order */
  eligiblePaymentMethods: Array<PaymentMethodQuote>;
  /** Returns information about the current authenticated User */
  me?: Maybe<CurrentUser>;
  /** Returns the possible next states that the activeOrder can transition to */
  nextOrderStates: Array<Scalars['String']>;
  /**
   * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
   * currently-authenticated User may be queried.
   */
  order?: Maybe<Order>;
  /**
   * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
   * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
   * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
   * general anonymous access to Order data.
   */
  orderByCode?: Maybe<Order>;
  /** Get a Product either by id or slug. If neither 'id' nor 'slug' is speicified, an error will result. */
  product?: Maybe<Product>;
  /** Get a list of Products */
  products: ProductList;
  /** Search Products based on the criteria set by the `SearchInput` */
  search: SearchResponse;
  wishList: ProductList;
  boxberryListCities: Array<BoxberryCity>;
  boxberryListPoints: Array<BoxberryPoint>;
  boxberryListStatuses: Array<BoxberryStatus>;
  boxberryPointsDescription?: Maybe<BoxberryPointDescription>;
  cdekListPoints: Array<CdekPoint>;
  cdekListCities: Array<CdekCity>;
  facetByCode?: Maybe<Facet>;
  productReviews: ProductReviewList;
  productReview?: Maybe<ProductReview>;
  saleDescriptions: SaleDescriptionList;
  saleDescription?: Maybe<SaleDescription>;
  sliders: SliderList;
  slider?: Maybe<Slider>;
  textPageBySlugOrKey?: Maybe<TextPage>;
};


export type QueryCollectionsArgs = {
  options?: Maybe<CollectionListOptions>;
};


export type QueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderByCodeArgs = {
  code: Scalars['String'];
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  options?: Maybe<ProductListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QueryWishListArgs = {
  options?: Maybe<ProductListOptions>;
};


export type QueryBoxberryListCitiesArgs = {
  countryCode?: Maybe<Scalars['String']>;
};


export type QueryBoxberryListPointsArgs = {
  prepaid?: Maybe<Scalars['Boolean']>;
  CityCode?: Maybe<Scalars['String']>;
};


export type QueryBoxberryListStatusesArgs = {
  trackingCode?: Maybe<Scalars['String']>;
};


export type QueryBoxberryPointsDescriptionArgs = {
  code?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['Boolean']>;
};


export type QueryCdekListPointsArgs = {
  postal_code?: Maybe<Scalars['Int']>;
  city_code?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  region_code?: Maybe<Scalars['String']>;
  have_cashless?: Maybe<Scalars['Int']>;
  have_cash?: Maybe<Scalars['Int']>;
  allowed_cod?: Maybe<Scalars['Int']>;
  is_dressing_room?: Maybe<Scalars['Int']>;
  weight_max?: Maybe<Scalars['Int']>;
  weight_min?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  take_only?: Maybe<Scalars['Int']>;
  is_handout?: Maybe<Scalars['Int']>;
  is_reception?: Maybe<Scalars['Int']>;
};


export type QueryCdekListCitiesArgs = {
  country_codes?: Maybe<Array<Scalars['String']>>;
  region_code?: Maybe<Scalars['Int']>;
  kladr_region_code?: Maybe<Scalars['String']>;
  fias_region_guid?: Maybe<Scalars['String']>;
  kladr_code?: Maybe<Scalars['String']>;
  fias_guid?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  payment_limit?: Maybe<Scalars['Float']>;
};


export type QueryFacetByCodeArgs = {
  code: Scalars['String'];
};


export type QueryProductReviewsArgs = {
  options?: Maybe<ProductReviewListOptions>;
};


export type QueryProductReviewArgs = {
  id: Scalars['ID'];
};


export type QuerySaleDescriptionsArgs = {
  options?: Maybe<SaleDescriptionListOptions>;
};


export type QuerySaleDescriptionArgs = {
  id: Scalars['ID'];
};


export type QuerySlidersArgs = {
  options?: Maybe<SliderListOptions>;
};


export type QuerySliderArgs = {
  id: Scalars['ID'];
};


export type QueryTextPageBySlugOrKeyArgs = {
  slug?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type RefreshCustomerVerificationResult = Success | NativeAuthStrategyError;

export type Refund = Node & {
  __typename?: 'Refund';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  items: Scalars['Int'];
  shipping: Scalars['Int'];
  adjustment: Scalars['Int'];
  total: Scalars['Int'];
  method?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  paymentId: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
};

export type RegisterCustomerAccountResult = Success | MissingPasswordError | NativeAuthStrategyError;

export type RegisterCustomerCustomFieldsInput = {
  newEmail?: Maybe<Scalars['String']>;
  emailVerificationToken?: Maybe<Scalars['String']>;
  bonus?: Maybe<Scalars['Int']>;
};

export type RegisterCustomerInput = {
  emailAddress: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  customFields?: Maybe<RegisterCustomerCustomFieldsInput>;
};

export type RegisterResult = {
  __typename?: 'RegisterResult';
  code?: Maybe<Scalars['String']>;
  codeExpiredAt: Scalars['DateTime'];
  codeCanRetryIn: Scalars['Int'];
};

export type RelatedProduct = Node & {
  __typename?: 'RelatedProduct';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  product: Product;
  relatedProduct: Product;
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  entity: Scalars['String'];
  scalarFields: Array<Scalars['String']>;
};

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RequestPasswordResetResult = Success | NativeAuthStrategyError;

export type RequestUpdateCustomerEmailAddressResult = Success | InvalidCredentialsError | EmailAddressConflictError | NativeAuthStrategyError;

export type ResetPasswordResult = CurrentUser | PasswordResetTokenInvalidError | PasswordResetTokenExpiredError | NativeAuthStrategyError;

export type Role = Node & {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Permission>;
  channels: Array<Channel>;
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int'];
};

export type SaleDescription = Node & {
  __typename?: 'SaleDescription';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  summary: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  asset?: Maybe<Asset>;
  couponCode?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  discount?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
};

export type SaleDescriptionFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  summary?: Maybe<StringOperators>;
  body?: Maybe<StringOperators>;
  couponCode?: Maybe<StringOperators>;
  url?: Maybe<StringOperators>;
  slug?: Maybe<StringOperators>;
  discount?: Maybe<StringOperators>;
  enabled?: Maybe<BooleanOperators>;
};

export type SaleDescriptionList = PaginatedList & {
  __typename?: 'SaleDescriptionList';
  items: Array<SaleDescription>;
  totalItems: Scalars['Int'];
};

export type SaleDescriptionListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<SaleDescriptionSortParameter>;
  filter?: Maybe<SaleDescriptionFilterParameter>;
};

export type SaleDescriptionSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  summary?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  couponCode?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  discount?: Maybe<SortOrder>;
};

export type SearchInput = {
  term?: Maybe<Scalars['String']>;
  facetValueIds?: Maybe<Array<Scalars['ID']>>;
  facetValueOperator?: Maybe<LogicalOperator>;
  facetValueFilters?: Maybe<Array<FacetValueFilterInput>>;
  collectionId?: Maybe<Scalars['ID']>;
  collectionSlug?: Maybe<Scalars['String']>;
  groupByProduct?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SearchResultSortParameter>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  items: Array<SearchResult>;
  totalItems: Scalars['Int'];
  facetValues: Array<FacetValueResult>;
  collections: Array<CollectionResult>;
  products: Array<Product>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  sku: Scalars['String'];
  slug: Scalars['String'];
  productId: Scalars['ID'];
  productName: Scalars['String'];
  productAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
  facetIds: Array<Scalars['ID']>;
  facetValueIds: Array<Scalars['ID']>;
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']>;
  /** A relevence score for the result. Differs between database implementations */
  score: Scalars['Float'];
  product?: Maybe<Product>;
  productVariant?: Maybe<ProductVariant>;
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  id: Scalars['ID'];
  preview: Scalars['String'];
  focalPoint?: Maybe<Coordinate>;
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type SetCustomerForOrderResult = Order | AlreadyLoggedInError | EmailAddressConflictError | NoActiveOrderError;

export type SetOrderShippingMethodResult = Order | OrderModificationError | IneligibleShippingMethodError | NoActiveOrderError;

export type ShippingLine = {
  __typename?: 'ShippingLine';
  shippingMethod: ShippingMethod;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  discountedPrice: Scalars['Int'];
  discountedPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  fulfillmentHandlerCode: Scalars['String'];
  checker: ConfigurableOperation;
  calculator: ConfigurableOperation;
  translations: Array<ShippingMethodTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  id: Scalars['ID'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  code: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']>;
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  description: Scalars['String'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Int'];
};

export type Slider = Node & {
  __typename?: 'Slider';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  asset?: Maybe<Asset>;
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  sortOrder: Scalars['Int'];
  buttonName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  sliderPoints: Array<SliderPoint>;
};

export type SliderFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  name?: Maybe<StringOperators>;
  enabled?: Maybe<BooleanOperators>;
  sortOrder?: Maybe<NumberOperators>;
  buttonName?: Maybe<StringOperators>;
  url?: Maybe<StringOperators>;
};

export type SliderList = PaginatedList & {
  __typename?: 'SliderList';
  items: Array<Slider>;
  totalItems: Scalars['Int'];
};

export type SliderListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<SliderSortParameter>;
  filter?: Maybe<SliderFilterParameter>;
};

export type SliderPoint = Node & {
  __typename?: 'SliderPoint';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  product: Product;
  point: Coordinate;
  facetValues?: Maybe<Array<FacetValue>>;
  asset?: Maybe<Asset>;
};

export type SliderSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  sortOrder?: Maybe<SortOrder>;
  buttonName?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  length?: Maybe<Scalars['Int']>;
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  options?: Maybe<Array<StringFieldOption>>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  value: Scalars['String'];
  label?: Maybe<Array<LocalizedString>>;
};

export type StringOperators = {
  eq?: Maybe<Scalars['String']>;
  notEq?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  regex?: Maybe<Scalars['String']>;
};

export type SubmitProductReviewInput = {
  productId?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['ID']>;
  summary: Scalars['String'];
  body: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  authorName: Scalars['String'];
  authorEmail: Scalars['String'];
  reviewType: Scalars['String'];
  assetIds?: Maybe<Array<Scalars['ID']>>;
  featuredAssetId?: Maybe<Scalars['ID']>;
};

export type Subscription = Node & {
  __typename?: 'Subscription';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  emailAddress: Scalars['String'];
  customer?: Maybe<Customer>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean'];
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  taxLines: Array<TaxLine>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  taxRate: Scalars['Float'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int'];
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  isDefault: Scalars['Boolean'];
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  value: Scalars['Float'];
  category: TaxCategory;
  zone: Zone;
  customerGroup?: Maybe<CustomerGroup>;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  name: Scalars['String'];
  type: Scalars['String'];
  list: Scalars['Boolean'];
  label?: Maybe<Array<LocalizedString>>;
  description?: Maybe<Array<LocalizedString>>;
  readonly?: Maybe<Scalars['Boolean']>;
  internal?: Maybe<Scalars['Boolean']>;
};

export type TextPage = Node & {
  __typename?: 'TextPage';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  summary: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  key: Scalars['String'];
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoKeywords?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
};

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type UpdateAddressCustomFieldsInput = {
  boxberryPointCode?: Maybe<Scalars['String']>;
  cdekPointCode?: Maybe<Scalars['String']>;
  cdekCityCode?: Maybe<Scalars['String']>;
  cdekSmsNotification?: Maybe<Scalars['Boolean']>;
  suggestion?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['String']>;
};

export type UpdateAddressInput = {
  id: Scalars['ID'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<UpdateAddressCustomFieldsInput>;
};

export type UpdateCustomerCustomFieldsInput = {
  newEmail?: Maybe<Scalars['String']>;
  emailVerificationToken?: Maybe<Scalars['String']>;
  bonus?: Maybe<Scalars['Int']>;
};

export type UpdateCustomerEmailAddressResult = Success | IdentifierChangeTokenInvalidError | IdentifierChangeTokenExpiredError | NativeAuthStrategyError;

export type UpdateCustomerInput = {
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  customFields?: Maybe<UpdateCustomerCustomFieldsInput>;
};

export type UpdateCustomerPasswordResult = Success | InvalidCredentialsError | NativeAuthStrategyError;

export type UpdateOrderCustomFieldsInput = {
  comment?: Maybe<Scalars['String']>;
  useBonuses?: Maybe<Scalars['Int']>;
  bonusesUsed?: Maybe<Scalars['Int']>;
};

export type UpdateOrderInput = {
  customFields?: Maybe<UpdateOrderCustomFieldsInput>;
};

export type UpdateOrderItemsResult = Order | OrderModificationError | OrderLimitError | NegativeQuantityError | InsufficientStockError;


export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  verified: Scalars['Boolean'];
  roles: Array<Role>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  authenticationMethods: Array<AuthenticationMethod>;
  customFields?: Maybe<Scalars['JSON']>;
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Retured if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type VerifyCustomerAccountResult = CurrentUser | VerificationTokenInvalidError | VerificationTokenExpiredError | MissingPasswordError | PasswordAlreadySetError | NativeAuthStrategyError;

export type WishList = Node & {
  __typename?: 'WishList';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  customer: Customer;
  product: Product;
};

export type Zone = Node & {
  __typename?: 'Zone';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  members: Array<Country>;
};

export type RegisterMutationVariables = Exact<{
  phone: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'RegisterResult' }
    & Pick<RegisterResult, 'code' | 'codeCanRetryIn' | 'codeExpiredAt'>
  )> }
);

export type AuthenticateMutationVariables = Exact<{
  input: AuthenticationInput;
}>;


export type AuthenticateMutation = (
  { __typename?: 'Mutation' }
  & { authenticate: (
    { __typename?: 'CurrentUser' }
    & Pick<CurrentUser, 'id' | 'identifier'>
  ) | (
    { __typename?: 'InvalidCredentialsError' }
    & Pick<InvalidCredentialsError, 'errorCode' | 'message' | 'authenticationError'>
  ) | { __typename?: 'NotVerifiedError' } }
);

export type GetCollectionsQueryVariables = Exact<{
  options?: Maybe<CollectionListOptions>;
}>;


export type GetCollectionsQuery = (
  { __typename?: 'Query' }
  & { collections: (
    { __typename?: 'CollectionList' }
    & Pick<CollectionList, 'totalItems'>
    & { items: Array<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name' | 'slug' | 'position'>
      & { parent?: Maybe<(
        { __typename?: 'Collection' }
        & Pick<Collection, 'id'>
      )> }
    )> }
  ) }
);

export type GetCollectionQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type GetCollectionQuery = (
  { __typename?: 'Query' }
  & { collection?: Maybe<(
    { __typename?: 'Collection' }
    & { children?: Maybe<Array<(
      { __typename?: 'Collection' }
      & CollectionFieldsFragment
    )>> }
    & CollectionFieldsFragment
  )> }
);

export type CollectionFieldsFragment = (
  { __typename?: 'Collection' }
  & Pick<Collection, 'id' | 'name' | 'slug' | 'position' | 'description'>
  & { parent?: Maybe<(
    { __typename?: 'Collection' }
    & Pick<Collection, 'id'>
  )>, breadcrumbs: Array<(
    { __typename?: 'CollectionBreadcrumb' }
    & Pick<CollectionBreadcrumb, 'name' | 'slug'>
  )>, customFields?: Maybe<(
    { __typename?: 'CollectionCustomFields' }
    & Pick<CollectionCustomFields, 'seoTitle' | 'seoDescription' | 'seoKeywords'>
  )> }
);

export type UpdateCustomerMutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;


export type UpdateCustomerMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomer: (
    { __typename?: 'Customer' }
    & CustomerFieldsFragment
  ) }
);

export type UpdateEmailAddressMutationVariables = Exact<{
  newEmailAddress: Scalars['String'];
}>;


export type UpdateEmailAddressMutation = (
  { __typename?: 'Mutation' }
  & { updateEmailAddress: (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  ) | (
    { __typename?: 'InvalidCredentialsError' }
    & Pick<InvalidCredentialsError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'EmailAddressConflictError' }
    & Pick<EmailAddressConflictError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'NativeAuthStrategyError' }
    & Pick<NativeAuthStrategyError, 'errorCode' | 'message'>
  ) }
);

export type ActiveCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveCustomerQuery = (
  { __typename?: 'Query' }
  & { activeCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & CustomerFieldsFragment
  )> }
);

export type UpdateCustomerAddressMutationVariables = Exact<{
  input: UpdateAddressInput;
}>;


export type UpdateCustomerAddressMutation = (
  { __typename?: 'Mutation' }
  & { updateCustomerAddress: (
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  ) }
);

export type CreateCustomerAddressMutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type CreateCustomerAddressMutation = (
  { __typename?: 'Mutation' }
  & { createCustomerAddress: (
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  ) }
);

export type CustomerFieldsFragment = (
  { __typename?: 'Customer' }
  & Pick<Customer, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'firstName' | 'lastName' | 'phoneNumber' | 'emailAddress'>
  & { customFields?: Maybe<(
    { __typename?: 'CustomerCustomFields' }
    & Pick<CustomerCustomFields, 'bonus' | 'newEmail'>
  )>, addresses?: Maybe<Array<(
    { __typename?: 'Address' }
    & Pick<Address, 'id' | 'createdAt' | 'updatedAt' | 'fullName' | 'company' | 'streetLine1' | 'streetLine2' | 'city' | 'province' | 'postalCode' | 'phoneNumber' | 'defaultShippingAddress' | 'defaultBillingAddress'>
    & { country: (
      { __typename?: 'Country' }
      & Pick<Country, 'id' | 'code' | 'name' | 'createdAt' | 'updatedAt'>
    ), customFields?: Maybe<(
      { __typename?: 'AddressCustomFields' }
      & Pick<AddressCustomFields, 'boxberryPointCode' | 'cdekCityCode' | 'cdekPointCode'>
    )> }
  )>> }
);

export type ActiveOrderQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveOrderQuery = (
  { __typename?: 'Query' }
  & { activeOrder?: Maybe<(
    { __typename?: 'Order' }
    & OrderFieldsFragment
  )> }
);

export type OrdersQueryVariables = Exact<{
  options?: Maybe<OrderListOptions>;
}>;


export type OrdersQuery = (
  { __typename?: 'Query' }
  & { activeCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & { orders: (
      { __typename?: 'OrderList' }
      & Pick<OrderList, 'totalItems'>
      & { items: Array<(
        { __typename?: 'Order' }
        & { history: (
          { __typename?: 'HistoryEntryList' }
          & { items: Array<(
            { __typename?: 'HistoryEntry' }
            & Pick<HistoryEntry, 'createdAt' | 'type' | 'data'>
          )> }
        ) }
        & OrderFieldsFragment
      )> }
    ) }
  )> }
);

export type AddItemToOrderMutationVariables = Exact<{
  customFields?: Maybe<OrderLineCustomFieldsInput>;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
}>;


export type AddItemToOrderMutation = (
  { __typename?: 'Mutation' }
  & { addItemToOrder: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | (
    { __typename?: 'OrderModificationError' }
    & Pick<OrderModificationError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'OrderLimitError' }
    & Pick<OrderLimitError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'NegativeQuantityError' }
    & Pick<NegativeQuantityError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'InsufficientStockError' }
    & Pick<InsufficientStockError, 'errorCode' | 'message' | 'quantityAvailable'>
  ) }
);

export type RemoveOrderLineMutationVariables = Exact<{
  orderLineId: Scalars['ID'];
}>;


export type RemoveOrderLineMutation = (
  { __typename?: 'Mutation' }
  & { removeOrderLine: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | (
    { __typename?: 'OrderModificationError' }
    & Pick<OrderModificationError, 'errorCode' | 'message'>
  ) }
);

export type AdjustOrderLineMutationVariables = Exact<{
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
}>;


export type AdjustOrderLineMutation = (
  { __typename?: 'Mutation' }
  & { adjustOrderLine: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | (
    { __typename?: 'OrderModificationError' }
    & Pick<OrderModificationError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'OrderLimitError' }
    & Pick<OrderLimitError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'NegativeQuantityError' }
    & Pick<NegativeQuantityError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'InsufficientStockError' }
    & Pick<InsufficientStockError, 'errorCode' | 'message'>
  ) }
);

export type SetOrderShippingAddressMutationVariables = Exact<{
  input: CreateAddressInput;
}>;


export type SetOrderShippingAddressMutation = (
  { __typename?: 'Mutation' }
  & { setOrderShippingAddress: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | (
    { __typename?: 'NoActiveOrderError' }
    & Pick<NoActiveOrderError, 'errorCode' | 'message'>
  ) }
);

export type SetOrderCustomFieldsMutationVariables = Exact<{
  input: UpdateOrderInput;
}>;


export type SetOrderCustomFieldsMutation = (
  { __typename?: 'Mutation' }
  & { setOrderCustomFields: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | (
    { __typename?: 'NoActiveOrderError' }
    & Pick<NoActiveOrderError, 'errorCode' | 'message'>
  ) }
);

export type SetOrderShippingMethodMutationVariables = Exact<{
  shippingMethodId: Scalars['ID'];
}>;


export type SetOrderShippingMethodMutation = (
  { __typename?: 'Mutation' }
  & { setOrderShippingMethod: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | (
    { __typename?: 'OrderModificationError' }
    & Pick<OrderModificationError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'IneligibleShippingMethodError' }
    & Pick<IneligibleShippingMethodError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'NoActiveOrderError' }
    & Pick<NoActiveOrderError, 'errorCode' | 'message'>
  ) }
);

export type ApplyCouponCodeMutationVariables = Exact<{
  couponCode: Scalars['String'];
}>;


export type ApplyCouponCodeMutation = (
  { __typename?: 'Mutation' }
  & { applyCouponCode: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | (
    { __typename?: 'CouponCodeExpiredError' }
    & Pick<CouponCodeExpiredError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'CouponCodeInvalidError' }
    & Pick<CouponCodeInvalidError, 'errorCode' | 'message'>
  ) | (
    { __typename?: 'CouponCodeLimitError' }
    & Pick<CouponCodeLimitError, 'errorCode' | 'message'>
  ) }
);

export type RemoveCouponCodeMutationVariables = Exact<{
  couponCode: Scalars['String'];
}>;


export type RemoveCouponCodeMutation = (
  { __typename?: 'Mutation' }
  & { removeCouponCode?: Maybe<(
    { __typename?: 'Order' }
    & OrderFieldsFragment
  )> }
);

export type TransitionOrderToStateMutationVariables = Exact<{
  state: Scalars['String'];
}>;


export type TransitionOrderToStateMutation = (
  { __typename?: 'Mutation' }
  & { transitionOrderToState?: Maybe<(
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | { __typename?: 'OrderStateTransitionError' }> }
);

export type AddPaymentOrderMutationVariables = Exact<{
  input: PaymentInput;
}>;


export type AddPaymentOrderMutation = (
  { __typename?: 'Mutation' }
  & { addPaymentToOrder: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) | { __typename?: 'OrderPaymentStateError' } | { __typename?: 'IneligiblePaymentMethodError' } | { __typename?: 'PaymentFailedError' } | { __typename?: 'PaymentDeclinedError' } | { __typename?: 'OrderStateTransitionError' } | { __typename?: 'NoActiveOrderError' } }
);

export type OrderFieldsFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'createdAt' | 'updatedAt' | 'orderPlacedAt' | 'code' | 'state' | 'active' | 'couponCodes' | 'totalQuantity' | 'subTotal' | 'subTotalWithTax' | 'currencyCode' | 'shipping' | 'shippingWithTax' | 'total' | 'totalWithTax' | 'bonus'>
  & { lines: Array<(
    { __typename?: 'OrderLine' }
    & Pick<OrderLine, 'id' | 'linePrice' | 'quantity'>
    & { customFields?: Maybe<(
      { __typename?: 'OrderLineCustomFields' }
      & Pick<OrderLineCustomFields, 'customSizeBust' | 'customSizeHeight' | 'customSizeHip' | 'customSizeWaist'>
    )>, productVariant: (
      { __typename?: 'ProductVariant' }
      & Pick<ProductVariant, 'id' | 'sku' | 'name' | 'price' | 'stockLevel'>
      & { featuredAsset?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )>, product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'name'>
        & { customFields?: Maybe<(
          { __typename?: 'ProductCustomFields' }
          & Pick<ProductCustomFields, 'isHit' | 'oldPrice'>
        )>, featuredAsset?: Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'preview'>
          & { focalPoint?: Maybe<(
            { __typename?: 'Coordinate' }
            & Pick<Coordinate, 'x' | 'y'>
          )> }
        )>, assets: Array<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'preview'>
          & { focalPoint?: Maybe<(
            { __typename?: 'Coordinate' }
            & Pick<Coordinate, 'x' | 'y'>
          )>, tags: Array<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'value'>
          )>, customFields?: Maybe<(
            { __typename?: 'AssetCustomFields' }
            & { facetValues?: Maybe<Array<(
              { __typename?: 'FacetValue' }
              & Pick<FacetValue, 'id' | 'code'>
              & { facet: (
                { __typename?: 'Facet' }
                & Pick<Facet, 'id' | 'code' | 'name'>
              ) }
            )>> }
          )> }
        )>, relatedProducts: (
          { __typename?: 'ProductList' }
          & Pick<ProductList, 'totalItems'>
          & { items: Array<(
            { __typename?: 'Product' }
            & Pick<Product, 'id'>
          )> }
        ) }
      ), options: Array<(
        { __typename?: 'ProductOption' }
        & Pick<ProductOption, 'id' | 'code' | 'name'>
        & { group: (
          { __typename?: 'ProductOptionGroup' }
          & Pick<ProductOptionGroup, 'name' | 'code'>
        ) }
      )> }
    ) }
  )>, discounts: Array<(
    { __typename?: 'Discount' }
    & Pick<Discount, 'adjustmentSource' | 'type' | 'description' | 'amount' | 'amountWithTax'>
  )>, customFields?: Maybe<(
    { __typename?: 'OrderCustomFields' }
    & Pick<OrderCustomFields, 'comment' | 'useBonuses'>
  )>, payments?: Maybe<Array<(
    { __typename?: 'Payment' }
    & Pick<Payment, 'id' | 'createdAt' | 'updatedAt' | 'method' | 'amount' | 'state' | 'transactionId' | 'errorMessage' | 'metadata'>
  )>>, shippingLines: Array<(
    { __typename?: 'ShippingLine' }
    & { shippingMethod: (
      { __typename?: 'ShippingMethod' }
      & Pick<ShippingMethod, 'id' | 'code'>
    ) }
  )>, shippingAddress?: Maybe<(
    { __typename?: 'OrderAddress' }
    & Pick<OrderAddress, 'fullName' | 'company' | 'streetLine1' | 'streetLine2' | 'city' | 'province' | 'postalCode' | 'country' | 'countryCode' | 'phoneNumber'>
    & { customFields?: Maybe<(
      { __typename?: 'AddressCustomFields' }
      & Pick<AddressCustomFields, 'boxberryPointCode' | 'cdekPointCode' | 'cdekCityCode' | 'suggestion' | 'point'>
    )> }
  )> }
);

export type TextPageQueryVariables = Exact<{
  slug: Scalars['String'];
  key: Scalars['String'];
}>;


export type TextPageQuery = (
  { __typename?: 'Query' }
  & { textPageBySlugOrKey?: Maybe<(
    { __typename?: 'TextPage' }
    & Pick<TextPage, 'id' | 'summary' | 'body' | 'slug' | 'key' | 'seoTitle' | 'seoDescription' | 'seoKeywords'>
    & { collection?: Maybe<(
      { __typename?: 'Collection' }
      & Pick<Collection, 'id' | 'name'>
    )> }
  )> }
);

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductByIdQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> }
);

export type ProductBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ProductBySlugQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> }
);

export type ProductReleatedQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductReleatedQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
    & { relatedProducts: (
      { __typename?: 'ProductList' }
      & Pick<ProductList, 'totalItems'>
      & { items: Array<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'name' | 'slug' | 'description'>
        & { customFields?: Maybe<(
          { __typename?: 'ProductCustomFields' }
          & Pick<ProductCustomFields, 'isHit' | 'oldPrice'>
        )>, variants: Array<(
          { __typename?: 'ProductVariant' }
          & Pick<ProductVariant, 'id' | 'price'>
        )>, featuredAsset?: Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'preview'>
          & { focalPoint?: Maybe<(
            { __typename?: 'Coordinate' }
            & Pick<Coordinate, 'x' | 'y'>
          )> }
        )> }
      )> }
    ) }
  )> }
);

export type AddProductsToCustomerWishListMutationVariables = Exact<{
  productIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type AddProductsToCustomerWishListMutation = (
  { __typename?: 'Mutation' }
  & { addProductsToCustomerWishList: (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  ) }
);

export type RemoveProductsFromCustomerWishListMutationVariables = Exact<{
  productIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RemoveProductsFromCustomerWishListMutation = (
  { __typename?: 'Mutation' }
  & { removeProductsFromCustomerWishList: (
    { __typename?: 'Success' }
    & Pick<Success, 'success'>
  ) }
);

export type WishListQueryVariables = Exact<{ [key: string]: never; }>;


export type WishListQuery = (
  { __typename?: 'Query' }
  & { wishList: (
    { __typename?: 'ProductList' }
    & Pick<ProductList, 'totalItems'>
    & { items: Array<(
      { __typename?: 'Product' }
      & ProductFieldsFragment
    )> }
  ) }
);

export type ProductFieldsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'name' | 'slug' | 'description'>
  & { customFields?: Maybe<(
    { __typename?: 'ProductCustomFields' }
    & Pick<ProductCustomFields, 'isHit' | 'oldPrice' | 'seoTitle' | 'seoDescription' | 'seoKeywords' | 'sizes' | 'materials' | 'care' | 'reviewCount' | 'reviewRating'>
    & { optionGroups?: Maybe<Array<(
      { __typename?: 'ProductOptionGroup' }
      & Pick<ProductOptionGroup, 'id' | 'name' | 'code'>
      & { options: Array<(
        { __typename?: 'ProductOption' }
        & Pick<ProductOption, 'id' | 'name' | 'code'>
      )> }
    )>> }
  )>, featuredAsset?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'preview'>
    & { focalPoint?: Maybe<(
      { __typename?: 'Coordinate' }
      & Pick<Coordinate, 'x' | 'y'>
    )> }
  )>, assets: Array<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'preview'>
    & { customFields?: Maybe<(
      { __typename?: 'AssetCustomFields' }
      & { facetValues?: Maybe<Array<(
        { __typename?: 'FacetValue' }
        & Pick<FacetValue, 'id' | 'code'>
        & { facet: (
          { __typename?: 'Facet' }
          & Pick<Facet, 'id' | 'code' | 'name'>
        ) }
      )>> }
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'value'>
    )>, focalPoint?: Maybe<(
      { __typename?: 'Coordinate' }
      & Pick<Coordinate, 'x' | 'y'>
    )> }
  )>, relatedProducts: (
    { __typename?: 'ProductList' }
    & Pick<ProductList, 'totalItems'>
    & { items: Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'slug' | 'description'>
      & { customFields?: Maybe<(
        { __typename?: 'ProductCustomFields' }
        & Pick<ProductCustomFields, 'isHit' | 'oldPrice'>
      )>, featuredAsset?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )>, assets: Array<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )>, variants: Array<(
        { __typename?: 'ProductVariant' }
        & VariantFieldsFragment
      )> }
    )> }
  ), variants: Array<(
    { __typename?: 'ProductVariant' }
    & Pick<ProductVariant, 'id' | 'sku' | 'name' | 'price' | 'stockLevel'>
    & { options: Array<(
      { __typename?: 'ProductOption' }
      & Pick<ProductOption, 'id' | 'code' | 'name' | 'groupId'>
    )>, productAssetsFilteredByFacets: Array<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'name'>
    )> }
  )> }
);

export type VariantFieldsFragment = (
  { __typename?: 'ProductVariant' }
  & Pick<ProductVariant, 'id' | 'sku' | 'name' | 'price' | 'stockLevel'>
  & { options: Array<(
    { __typename?: 'ProductOption' }
    & Pick<ProductOption, 'id' | 'code' | 'name' | 'groupId'>
  )>, productAssetsFilteredByFacets: Array<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id' | 'name'>
  )> }
);

export type SubmitReviewMutationVariables = Exact<{
  input: SubmitProductReviewInput;
}>;


export type SubmitReviewMutation = (
  { __typename?: 'Mutation' }
  & { submitProductReview: (
    { __typename?: 'ProductReview' }
    & Pick<ProductReview, 'id'>
  ) }
);

export type ProductReviewsQueryVariables = Exact<{
  options?: Maybe<ProductReviewListOptions>;
}>;


export type ProductReviewsQuery = (
  { __typename?: 'Query' }
  & { productReviews: (
    { __typename?: 'ProductReviewList' }
    & Pick<ProductReviewList, 'totalItems'>
    & { items: Array<(
      { __typename?: 'ProductReview' }
      & Pick<ProductReview, 'id' | 'reviewType' | 'summary' | 'authorName' | 'rating' | 'body' | 'createdAt'>
      & { assets: Array<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )> }
    )> }
  ) }
);

export type SalesQueryVariables = Exact<{
  options?: Maybe<SaleDescriptionListOptions>;
}>;


export type SalesQuery = (
  { __typename?: 'Query' }
  & { saleDescriptions: (
    { __typename?: 'SaleDescriptionList' }
    & Pick<SaleDescriptionList, 'totalItems'>
    & { items: Array<(
      { __typename?: 'SaleDescription' }
      & Pick<SaleDescription, 'id' | 'createdAt' | 'updatedAt' | 'summary' | 'body' | 'discount' | 'couponCode' | 'url'>
      & { asset?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )> }
    )> }
  ) }
);

export type SearchQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchQuery = (
  { __typename?: 'Query' }
  & { search: (
    { __typename?: 'SearchResponse' }
    & Pick<SearchResponse, 'totalItems'>
    & { facetValues: Array<(
      { __typename?: 'FacetValueResult' }
      & { facetValue: (
        { __typename?: 'FacetValue' }
        & Pick<FacetValue, 'id' | 'code' | 'name'>
        & { facet: (
          { __typename?: 'Facet' }
          & Pick<Facet, 'id' | 'code' | 'name'>
        ), customFields?: Maybe<(
          { __typename?: 'FacetValueCustomFields' }
          & Pick<FacetValueCustomFields, 'seoTitle' | 'seoDescription' | 'seoKeywords'>
        )> }
      ) }
    )>, products: Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'inWishList' | 'slug'>
      & { customFields?: Maybe<(
        { __typename?: 'ProductCustomFields' }
        & Pick<ProductCustomFields, 'isHit' | 'oldPrice'>
      )>, assets: Array<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )>, featuredAsset?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )> }
    )>, items: Array<(
      { __typename?: 'SearchResult' }
      & Pick<SearchResult, 'productId'>
      & { price: (
        { __typename?: 'PriceRange' }
        & Pick<PriceRange, 'min' | 'max'>
      ) | (
        { __typename?: 'SinglePrice' }
        & Pick<SinglePrice, 'value'>
      ) }
    )> }
  ) }
);

export type SearchFacetValuesQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchFacetValuesQuery = (
  { __typename?: 'Query' }
  & { search: (
    { __typename?: 'SearchResponse' }
    & { facetValues: Array<(
      { __typename?: 'FacetValueResult' }
      & { facetValue: (
        { __typename?: 'FacetValue' }
        & Pick<FacetValue, 'id' | 'code' | 'name'>
        & { facet: (
          { __typename?: 'Facet' }
          & Pick<Facet, 'id' | 'code' | 'name'>
        ), customFields?: Maybe<(
          { __typename?: 'FacetValueCustomFields' }
          & Pick<FacetValueCustomFields, 'seoTitle' | 'seoDescription' | 'seoKeywords'>
        )> }
      ) }
    )> }
  ) }
);

export type FacetValueByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type FacetValueByCodeQuery = (
  { __typename?: 'Query' }
  & { facetByCode?: Maybe<(
    { __typename?: 'Facet' }
    & Pick<Facet, 'id' | 'name' | 'code'>
    & { values: Array<(
      { __typename?: 'FacetValue' }
      & Pick<FacetValue, 'id' | 'name' | 'code'>
      & { customFields?: Maybe<(
        { __typename?: 'FacetValueCustomFields' }
        & Pick<FacetValueCustomFields, 'seoTitle' | 'seoDescription' | 'seoKeywords'>
      )> }
    )> }
  )> }
);

export type GetShippingMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShippingMethodsQuery = (
  { __typename?: 'Query' }
  & { eligibleShippingMethods: Array<(
    { __typename?: 'ShippingMethodQuote' }
    & Pick<ShippingMethodQuote, 'id' | 'code' | 'name'>
  )> }
);

export type BoxberryListPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type BoxberryListPointsQuery = (
  { __typename?: 'Query' }
  & { boxberryListPoints: Array<(
    { __typename?: 'BoxberryPoint' }
    & Pick<BoxberryPoint, 'Code' | 'Name' | 'Address' | 'Phone' | 'WorkShedule' | 'TripDescription' | 'DeliveryPeriod' | 'CityCode' | 'CityName' | 'TariffZone' | 'Settlement' | 'Area' | 'Country' | 'GPS' | 'AddressReduce' | 'OnlyPrepaidOrders' | 'Acquiring' | 'DigitalSignature' | 'CountryCode' | 'NalKD' | 'Metro' | 'TypeOfOffice' | 'VolumeLimit' | 'LoadLimit'>
  )> }
);

export type CdekListPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type CdekListPointsQuery = (
  { __typename?: 'Query' }
  & { cdekListPoints: Array<(
    { __typename?: 'CdekPoint' }
    & Pick<CdekPoint, 'code' | 'name' | 'address_comment' | 'nearest_station' | 'nearest_metro_station' | 'work_time' | 'email' | 'note' | 'type' | 'owner_code' | 'take_only' | 'is_handout' | 'is_reception' | 'is_dressing_room' | 'have_cashless' | 'have_cash' | 'allowed_cod' | 'site' | 'weight_min' | 'weight_max' | 'fulfillment'>
    & { location?: Maybe<(
      { __typename?: 'CdekLocation' }
      & Pick<CdekLocation, 'country_code' | 'region_code' | 'region' | 'city_code' | 'city' | 'postal_code' | 'longitude' | 'latitude' | 'address' | 'address_full'>
    )>, phones?: Maybe<Array<(
      { __typename?: 'CdekPhone' }
      & Pick<CdekPhone, 'number' | 'additional'>
    )>>, office_image_list?: Maybe<Array<(
      { __typename?: 'CdekImage' }
      & Pick<CdekImage, 'url' | 'number'>
    )>>, work_time_list?: Maybe<Array<(
      { __typename?: 'CdekWorkTime' }
      & Pick<CdekWorkTime, 'day' | 'time'>
    )>>, work_time_exceptions?: Maybe<Array<(
      { __typename?: 'CdekWorkTimeException' }
      & Pick<CdekWorkTimeException, 'date' | 'time' | 'is_working'>
    )>>, dimensions?: Maybe<Array<(
      { __typename?: 'CdekDimension' }
      & Pick<CdekDimension, 'width' | 'height' | 'depth'>
    )>>, errors?: Maybe<Array<(
      { __typename?: 'CdekError' }
      & Pick<CdekError, 'code' | 'message'>
    )>> }
  )> }
);

export type CdekListCitiesQueryVariables = Exact<{
  country_codes: Array<Scalars['String']> | Scalars['String'];
  postal_code: Scalars['String'];
}>;


export type CdekListCitiesQuery = (
  { __typename?: 'Query' }
  & { cdekListCities: Array<(
    { __typename?: 'CdekCity' }
    & Pick<CdekCity, 'code'>
    & { errors?: Maybe<Array<(
      { __typename?: 'CdekError' }
      & Pick<CdekError, 'code' | 'message'>
    )>> }
  )> }
);

export type SlidesQueryVariables = Exact<{
  options?: Maybe<SliderListOptions>;
}>;


export type SlidesQuery = (
  { __typename?: 'Query' }
  & { sliders: (
    { __typename?: 'SliderList' }
    & Pick<SliderList, 'totalItems'>
    & { items: Array<(
      { __typename?: 'Slider' }
      & Pick<Slider, 'id' | 'createdAt' | 'updatedAt' | 'name' | 'enabled' | 'sortOrder' | 'buttonName' | 'url'>
      & { asset?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'preview'>
        & { focalPoint?: Maybe<(
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        )> }
      )>, sliderPoints: Array<(
        { __typename?: 'SliderPoint' }
        & Pick<SliderPoint, 'id'>
        & { product: (
          { __typename?: 'Product' }
          & Pick<Product, 'id' | 'name' | 'slug'>
          & { variants: Array<(
            { __typename?: 'ProductVariant' }
            & Pick<ProductVariant, 'price' | 'stockLevel'>
          )> }
        ), point: (
          { __typename?: 'Coordinate' }
          & Pick<Coordinate, 'x' | 'y'>
        ), asset?: Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'id' | 'preview'>
          & { focalPoint?: Maybe<(
            { __typename?: 'Coordinate' }
            & Pick<Coordinate, 'x' | 'y'>
          )> }
        )>, facetValues?: Maybe<Array<(
          { __typename?: 'FacetValue' }
          & Pick<FacetValue, 'id' | 'name' | 'code'>
          & { facet: (
            { __typename?: 'Facet' }
            & Pick<Facet, 'id' | 'name' | 'code'>
          ) }
        )>> }
      )> }
    )> }
  ) }
);

export type CreateSubscriptionMutationVariables = Exact<{
  input: CreateSubscriptionInput;
}>;


export type CreateSubscriptionMutation = (
  { __typename?: 'Mutation' }
  & { createSubscription: (
    { __typename?: 'Subscription' }
    & Pick<Subscription, 'id'>
  ) }
);

export const CollectionFieldsFragmentDoc = gql`
    fragment collectionFields on Collection {
  id
  name
  slug
  position
  description
  parent {
    id
  }
  breadcrumbs {
    name
    slug
  }
  customFields {
    seoTitle
    seoDescription
    seoKeywords
  }
}
    `;
export const CustomerFieldsFragmentDoc = gql`
    fragment customerFields on Customer {
  id
  createdAt
  updatedAt
  title
  firstName
  lastName
  phoneNumber
  emailAddress
  customFields {
    bonus
    newEmail
  }
  addresses {
    id
    createdAt
    updatedAt
    fullName
    company
    streetLine1
    streetLine2
    city
    province
    postalCode
    country {
      id
      code
      name
      createdAt
      updatedAt
    }
    phoneNumber
    defaultShippingAddress
    defaultBillingAddress
    customFields {
      boxberryPointCode
      cdekCityCode
      cdekPointCode
    }
  }
}
    `;
export const OrderFieldsFragmentDoc = gql`
    fragment orderFields on Order {
  id
  createdAt
  updatedAt
  orderPlacedAt
  code
  state
  active
  couponCodes
  lines {
    id
    customFields {
      customSizeBust
      customSizeHeight
      customSizeHip
      customSizeWaist
    }
    linePrice
    productVariant {
      id
      sku
      name
      price
      stockLevel
      featuredAsset {
        preview
        focalPoint {
          x
          y
        }
      }
      product {
        id
        name
        customFields {
          isHit
          oldPrice
        }
        featuredAsset {
          preview
          focalPoint {
            x
            y
          }
        }
        assets {
          preview
          focalPoint {
            x
            y
          }
          tags {
            value
          }
          customFields {
            facetValues {
              id
              code
              facet {
                id
                code
                name
              }
            }
          }
        }
        relatedProducts {
          totalItems
          items {
            id
          }
        }
      }
      options {
        id
        code
        name
        group {
          name
          code
        }
      }
    }
    quantity
    customFields {
      customSizeHeight
      customSizeBust
      customSizeWaist
      customSizeHip
    }
  }
  totalQuantity
  subTotal
  subTotalWithTax
  currencyCode
  shipping
  shippingWithTax
  total
  totalWithTax
  bonus
  discounts {
    adjustmentSource
    type
    description
    amount
    amountWithTax
  }
  customFields {
    comment
    useBonuses
  }
  payments {
    id
    createdAt
    updatedAt
    method
    amount
    state
    transactionId
    errorMessage
    metadata
  }
  shippingLines {
    shippingMethod {
      id
      code
    }
  }
  shippingAddress {
    fullName
    company
    streetLine1
    streetLine2
    city
    province
    postalCode
    country
    countryCode
    phoneNumber
    customFields {
      boxberryPointCode
      cdekPointCode
      cdekCityCode
      suggestion
      point
    }
  }
}
    `;
export const VariantFieldsFragmentDoc = gql`
    fragment variantFields on ProductVariant {
  id
  sku
  name
  price
  stockLevel
  options {
    id
    code
    name
    groupId
  }
  productAssetsFilteredByFacets {
    id
    name
  }
}
    `;
export const ProductFieldsFragmentDoc = gql`
    fragment productFields on Product {
  id
  name
  slug
  description
  customFields {
    isHit
    oldPrice
    seoTitle
    seoDescription
    seoKeywords
    sizes
    materials
    care
    reviewCount
    reviewRating
    optionGroups {
      id
      name
      code
      options {
        id
        name
        code
      }
    }
  }
  featuredAsset {
    preview
    focalPoint {
      x
      y
    }
  }
  assets {
    customFields {
      facetValues {
        id
        code
        facet {
          id
          code
          name
        }
      }
    }
    tags {
      value
    }
    preview
    focalPoint {
      x
      y
    }
  }
  relatedProducts {
    totalItems
    items {
      id
      name
      slug
      description
      customFields {
        isHit
        oldPrice
      }
      featuredAsset {
        preview
        focalPoint {
          x
          y
        }
      }
      assets {
        preview
        focalPoint {
          x
          y
        }
      }
      variants {
        ...variantFields
      }
    }
  }
  variants {
    id
    sku
    name
    price
    stockLevel
    options {
      id
      code
      name
      groupId
    }
    productAssetsFilteredByFacets {
      id
      name
    }
  }
}
    ${VariantFieldsFragmentDoc}`;
export const RegisterDocument = gql`
    mutation register($phone: String!) {
  register(phone: $phone) {
    code
    codeCanRetryIn
    codeExpiredAt
  }
}
    `;
export const AuthenticateDocument = gql`
    mutation authenticate($input: AuthenticationInput!) {
  authenticate(input: $input) {
    ... on CurrentUser {
      id
      identifier
    }
    ... on InvalidCredentialsError {
      errorCode
      message
      authenticationError
    }
  }
}
    `;
export const GetCollectionsDocument = gql`
    query GetCollections($options: CollectionListOptions) {
  collections(options: $options) {
    items {
      id
      name
      slug
      position
      parent {
        id
      }
    }
    totalItems
  }
}
    `;
export const GetCollectionDocument = gql`
    query GetCollection($id: ID, $slug: String) {
  collection(id: $id, slug: $slug) {
    ...collectionFields
    children {
      ...collectionFields
    }
  }
}
    ${CollectionFieldsFragmentDoc}`;
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    ...customerFields
  }
}
    ${CustomerFieldsFragmentDoc}`;
export const UpdateEmailAddressDocument = gql`
    mutation updateEmailAddress($newEmailAddress: String!) {
  updateEmailAddress(newEmailAddress: $newEmailAddress) {
    ... on Success {
      success
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `;
export const ActiveCustomerDocument = gql`
    query activeCustomer {
  activeCustomer {
    ...customerFields
  }
}
    ${CustomerFieldsFragmentDoc}`;
export const UpdateCustomerAddressDocument = gql`
    mutation updateCustomerAddress($input: UpdateAddressInput!) {
  updateCustomerAddress(input: $input) {
    id
  }
}
    `;
export const CreateCustomerAddressDocument = gql`
    mutation createCustomerAddress($input: CreateAddressInput!) {
  createCustomerAddress(input: $input) {
    id
  }
}
    `;
export const ActiveOrderDocument = gql`
    query activeOrder {
  activeOrder {
    ...orderFields
  }
}
    ${OrderFieldsFragmentDoc}`;
export const OrdersDocument = gql`
    query orders($options: OrderListOptions) {
  activeCustomer {
    orders(options: $options) {
      items {
        ...orderFields
        history(
          options: {skip: 0, take: 100, filter: {type: {in: ["ORDER_STATE_TRANSITION"]}}, sort: {createdAt: DESC}}
        ) {
          items {
            createdAt
            type
            data
          }
        }
      }
      totalItems
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const AddItemToOrderDocument = gql`
    mutation addItemToOrder($customFields: OrderLineCustomFieldsInput, $productVariantId: ID!, $quantity: Int!) {
  addItemToOrder(
    quantity: $quantity
    productVariantId: $productVariantId
    customFields: $customFields
  ) {
    ... on Order {
      ...orderFields
    }
    ... on ErrorResult {
      errorCode
      message
    }
    ... on InsufficientStockError {
      errorCode
      message
      quantityAvailable
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const RemoveOrderLineDocument = gql`
    mutation removeOrderLine($orderLineId: ID!) {
  removeOrderLine(orderLineId: $orderLineId) {
    ... on Order {
      ...orderFields
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const AdjustOrderLineDocument = gql`
    mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!) {
  adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
    ... on Order {
      ...orderFields
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const SetOrderShippingAddressDocument = gql`
    mutation setOrderShippingAddress($input: CreateAddressInput!) {
  setOrderShippingAddress(input: $input) {
    ... on Order {
      ...orderFields
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const SetOrderCustomFieldsDocument = gql`
    mutation setOrderCustomFields($input: UpdateOrderInput!) {
  setOrderCustomFields(input: $input) {
    ... on Order {
      ...orderFields
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const SetOrderShippingMethodDocument = gql`
    mutation setOrderShippingMethod($shippingMethodId: ID!) {
  setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
    ... on Order {
      ...orderFields
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const ApplyCouponCodeDocument = gql`
    mutation applyCouponCode($couponCode: String!) {
  applyCouponCode(couponCode: $couponCode) {
    ... on Order {
      ...orderFields
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const RemoveCouponCodeDocument = gql`
    mutation removeCouponCode($couponCode: String!) {
  removeCouponCode(couponCode: $couponCode) {
    ... on Order {
      ...orderFields
    }
  }
}
    ${OrderFieldsFragmentDoc}`;
export const TransitionOrderToStateDocument = gql`
    mutation transitionOrderToState($state: String!) {
  transitionOrderToState(state: $state) {
    ...orderFields
  }
}
    ${OrderFieldsFragmentDoc}`;
export const AddPaymentOrderDocument = gql`
    mutation addPaymentOrder($input: PaymentInput!) {
  addPaymentToOrder(input: $input) {
    ...orderFields
  }
}
    ${OrderFieldsFragmentDoc}`;
export const TextPageDocument = gql`
    query textPage($slug: String!, $key: String!) {
  textPageBySlugOrKey(slug: $slug, key: $key) {
    id
    summary
    body
    slug
    key
    seoTitle
    seoDescription
    seoKeywords
    collection {
      id
      name
    }
  }
}
    `;
export const ProductByIdDocument = gql`
    query productById($id: ID!) {
  product(id: $id) {
    ...productFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export const ProductBySlugDocument = gql`
    query productBySlug($slug: String!) {
  product(slug: $slug) {
    ...productFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export const ProductReleatedDocument = gql`
    query ProductReleated($id: ID!) {
  product(id: $id) {
    id
    relatedProducts {
      totalItems
      items {
        id
        name
        slug
        description
        customFields {
          isHit
          oldPrice
        }
        variants {
          id
          price
        }
        featuredAsset {
          preview
          focalPoint {
            x
            y
          }
        }
      }
    }
  }
}
    `;
export const AddProductsToCustomerWishListDocument = gql`
    mutation addProductsToCustomerWishList($productIds: [ID!]!) {
  addProductsToCustomerWishList(productsIds: $productIds) {
    success
  }
}
    `;
export const RemoveProductsFromCustomerWishListDocument = gql`
    mutation removeProductsFromCustomerWishList($productIds: [ID!]!) {
  removeProductsFromCustomerWishList(productsIds: $productIds) {
    success
  }
}
    `;
export const WishListDocument = gql`
    query wishList {
  wishList {
    items {
      ...productFields
    }
    totalItems
  }
}
    ${ProductFieldsFragmentDoc}`;
export const SubmitReviewDocument = gql`
    mutation submitReview($input: SubmitProductReviewInput!) {
  submitProductReview(input: $input) {
    id
  }
}
    `;
export const ProductReviewsDocument = gql`
    query productReviews($options: ProductReviewListOptions) {
  productReviews(options: $options) {
    items {
      id
      reviewType
      summary
      authorName
      rating
      body
      createdAt
      assets {
        id
        preview
        focalPoint {
          x
          y
        }
      }
    }
    totalItems
  }
}
    `;
export const SalesDocument = gql`
    query sales($options: SaleDescriptionListOptions) {
  saleDescriptions(options: $options) {
    items {
      id
      createdAt
      updatedAt
      summary
      body
      discount
      asset {
        id
        preview
        focalPoint {
          x
          y
        }
      }
      couponCode
      url
    }
    totalItems
  }
}
    `;
export const SearchDocument = gql`
    query Search($input: SearchInput!) {
  search(input: $input) {
    facetValues {
      facetValue {
        id
        code
        name
        facet {
          id
          code
          name
        }
        customFields {
          seoTitle
          seoDescription
          seoKeywords
        }
      }
    }
    products {
      id
      name
      customFields {
        isHit
        oldPrice
      }
      inWishList
      slug
      assets {
        preview
        focalPoint {
          x
          y
        }
      }
      featuredAsset {
        preview
        focalPoint {
          x
          y
        }
      }
    }
    items {
      productId
      price {
        ... on PriceRange {
          min
          max
        }
        ... on SinglePrice {
          value
        }
      }
    }
    totalItems
  }
}
    `;
export const SearchFacetValuesDocument = gql`
    query SearchFacetValues($input: SearchInput!) {
  search(input: $input) {
    facetValues {
      facetValue {
        id
        code
        name
        facet {
          id
          code
          name
        }
        customFields {
          seoTitle
          seoDescription
          seoKeywords
        }
      }
    }
  }
}
    `;
export const FacetValueByCodeDocument = gql`
    query facetValueByCode($code: String!) {
  facetByCode(code: $code) {
    id
    name
    code
    values {
      id
      name
      code
      customFields {
        seoTitle
        seoDescription
        seoKeywords
      }
    }
  }
}
    `;
export const GetShippingMethodsDocument = gql`
    query getShippingMethods {
  eligibleShippingMethods {
    id
    code
    name
  }
}
    `;
export const BoxberryListPointsDocument = gql`
    query boxberryListPoints {
  boxberryListPoints {
    Code
    Name
    Address
    Phone
    WorkShedule
    TripDescription
    DeliveryPeriod
    CityCode
    CityName
    TariffZone
    Settlement
    Area
    Country
    GPS
    AddressReduce
    OnlyPrepaidOrders
    Acquiring
    DigitalSignature
    CountryCode
    NalKD
    Metro
    TypeOfOffice
    VolumeLimit
    LoadLimit
  }
}
    `;
export const CdekListPointsDocument = gql`
    query cdekListPoints {
  cdekListPoints {
    code
    name
    location {
      country_code
      region_code
      region
      city_code
      city
      postal_code
      longitude
      latitude
      address
      address_full
    }
    address_comment
    nearest_station
    nearest_metro_station
    work_time
    phones {
      number
      additional
    }
    email
    note
    type
    owner_code
    take_only
    is_handout
    is_reception
    is_dressing_room
    have_cashless
    have_cash
    allowed_cod
    site
    office_image_list {
      url
      number
    }
    work_time_list {
      day
      time
    }
    work_time_exceptions {
      date
      time
      is_working
    }
    weight_min
    weight_max
    fulfillment
    dimensions {
      width
      height
      depth
    }
    errors {
      code
      message
    }
  }
}
    `;
export const CdekListCitiesDocument = gql`
    query cdekListCities($country_codes: [String!]!, $postal_code: String!) {
  cdekListCities(country_codes: $country_codes, postal_code: $postal_code) {
    code
    errors {
      code
      message
    }
  }
}
    `;
export const SlidesDocument = gql`
    query slides($options: SliderListOptions) {
  sliders(options: $options) {
    items {
      id
      createdAt
      updatedAt
      asset {
        id
        preview
        focalPoint {
          x
          y
        }
      }
      name
      enabled
      sortOrder
      buttonName
      url
      sliderPoints {
        id
        product {
          id
          name
          slug
          variants {
            price
            stockLevel
          }
        }
        point {
          x
          y
        }
        asset {
          id
          preview
          focalPoint {
            x
            y
          }
        }
        facetValues {
          id
          name
          code
          facet {
            id
            name
            code
          }
        }
      }
    }
    totalItems
  }
}
    `;
export const CreateSubscriptionDocument = gql`
    mutation createSubscription($input: CreateSubscriptionInput!) {
  createSubscription(input: $input) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    register(variables: RegisterMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutation>(RegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'register');
    },
    authenticate(variables: AuthenticateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthenticateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthenticateMutation>(AuthenticateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authenticate');
    },
    GetCollections(variables?: GetCollectionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCollectionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionsQuery>(GetCollectionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollections');
    },
    GetCollection(variables?: GetCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionQuery>(GetCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollection');
    },
    updateCustomer(variables: UpdateCustomerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateCustomerMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCustomerMutation>(UpdateCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCustomer');
    },
    updateEmailAddress(variables: UpdateEmailAddressMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateEmailAddressMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateEmailAddressMutation>(UpdateEmailAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateEmailAddress');
    },
    activeCustomer(variables?: ActiveCustomerQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ActiveCustomerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActiveCustomerQuery>(ActiveCustomerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activeCustomer');
    },
    updateCustomerAddress(variables: UpdateCustomerAddressMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateCustomerAddressMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCustomerAddressMutation>(UpdateCustomerAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCustomerAddress');
    },
    createCustomerAddress(variables: CreateCustomerAddressMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateCustomerAddressMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCustomerAddressMutation>(CreateCustomerAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCustomerAddress');
    },
    activeOrder(variables?: ActiveOrderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ActiveOrderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ActiveOrderQuery>(ActiveOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'activeOrder');
    },
    orders(variables?: OrdersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrdersQuery>(OrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'orders');
    },
    addItemToOrder(variables: AddItemToOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddItemToOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddItemToOrderMutation>(AddItemToOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addItemToOrder');
    },
    removeOrderLine(variables: RemoveOrderLineMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveOrderLineMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveOrderLineMutation>(RemoveOrderLineDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeOrderLine');
    },
    adjustOrderLine(variables: AdjustOrderLineMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdjustOrderLineMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdjustOrderLineMutation>(AdjustOrderLineDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adjustOrderLine');
    },
    setOrderShippingAddress(variables: SetOrderShippingAddressMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetOrderShippingAddressMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetOrderShippingAddressMutation>(SetOrderShippingAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setOrderShippingAddress');
    },
    setOrderCustomFields(variables: SetOrderCustomFieldsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetOrderCustomFieldsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetOrderCustomFieldsMutation>(SetOrderCustomFieldsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setOrderCustomFields');
    },
    setOrderShippingMethod(variables: SetOrderShippingMethodMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetOrderShippingMethodMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SetOrderShippingMethodMutation>(SetOrderShippingMethodDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'setOrderShippingMethod');
    },
    applyCouponCode(variables: ApplyCouponCodeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ApplyCouponCodeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApplyCouponCodeMutation>(ApplyCouponCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'applyCouponCode');
    },
    removeCouponCode(variables: RemoveCouponCodeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveCouponCodeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveCouponCodeMutation>(RemoveCouponCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeCouponCode');
    },
    transitionOrderToState(variables: TransitionOrderToStateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TransitionOrderToStateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<TransitionOrderToStateMutation>(TransitionOrderToStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'transitionOrderToState');
    },
    addPaymentOrder(variables: AddPaymentOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddPaymentOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddPaymentOrderMutation>(AddPaymentOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addPaymentOrder');
    },
    textPage(variables: TextPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TextPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TextPageQuery>(TextPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'textPage');
    },
    productById(variables: ProductByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductByIdQuery>(ProductByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'productById');
    },
    productBySlug(variables: ProductBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductBySlugQuery>(ProductBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'productBySlug');
    },
    ProductReleated(variables: ProductReleatedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductReleatedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductReleatedQuery>(ProductReleatedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProductReleated');
    },
    addProductsToCustomerWishList(variables: AddProductsToCustomerWishListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddProductsToCustomerWishListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddProductsToCustomerWishListMutation>(AddProductsToCustomerWishListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addProductsToCustomerWishList');
    },
    removeProductsFromCustomerWishList(variables: RemoveProductsFromCustomerWishListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveProductsFromCustomerWishListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveProductsFromCustomerWishListMutation>(RemoveProductsFromCustomerWishListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeProductsFromCustomerWishList');
    },
    wishList(variables?: WishListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WishListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WishListQuery>(WishListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'wishList');
    },
    submitReview(variables: SubmitReviewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubmitReviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubmitReviewMutation>(SubmitReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'submitReview');
    },
    productReviews(variables?: ProductReviewsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductReviewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductReviewsQuery>(ProductReviewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'productReviews');
    },
    sales(variables?: SalesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SalesQuery>(SalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sales');
    },
    Search(variables: SearchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchQuery>(SearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Search');
    },
    SearchFacetValues(variables: SearchFacetValuesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchFacetValuesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchFacetValuesQuery>(SearchFacetValuesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchFacetValues');
    },
    facetValueByCode(variables: FacetValueByCodeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FacetValueByCodeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FacetValueByCodeQuery>(FacetValueByCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'facetValueByCode');
    },
    getShippingMethods(variables?: GetShippingMethodsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetShippingMethodsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetShippingMethodsQuery>(GetShippingMethodsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getShippingMethods');
    },
    boxberryListPoints(variables?: BoxberryListPointsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BoxberryListPointsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BoxberryListPointsQuery>(BoxberryListPointsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'boxberryListPoints');
    },
    cdekListPoints(variables?: CdekListPointsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CdekListPointsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CdekListPointsQuery>(CdekListPointsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cdekListPoints');
    },
    cdekListCities(variables: CdekListCitiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CdekListCitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CdekListCitiesQuery>(CdekListCitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cdekListCities');
    },
    slides(variables?: SlidesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SlidesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SlidesQuery>(SlidesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'slides');
    },
    createSubscription(variables: CreateSubscriptionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSubscriptionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateSubscriptionMutation>(CreateSubscriptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createSubscription');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type SWRInfiniteKeyLoader<Data = unknown, Variables = unknown> = (
  index: number,
  previousPageData: Data | null
) => [keyof Variables, Variables[keyof Variables] | null] | null;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  const utilsForInfinite = {
    generateGetKey: <Data = unknown, Variables = unknown>(
      id: string,
      getKey: SWRInfiniteKeyLoader<Data, Variables>
    ) => (pageIndex: number, previousData: Data | null) => {
      const key = getKey(pageIndex, previousData)
      return key ? [id, ...key] : null
    },
    generateFetcher: <Query = unknown, Variables = unknown>(query: (variables: Variables) => Promise<Query>, variables?: Variables) => (
        id: string,
        fieldName: keyof Variables,
        fieldValue: Variables[typeof fieldName]
      ) => query({ ...variables, [fieldName]: fieldValue } as Variables)
  }
  return {
    ...sdk,
    useGetCollections(key: SWRKeyInterface, variables?: GetCollectionsQueryVariables, config?: SWRConfigInterface<GetCollectionsQuery, ClientError>) {
      return useSWR<GetCollectionsQuery, ClientError>(key, () => sdk.GetCollections(variables), config);
    },
    useGetCollection(key: SWRKeyInterface, variables?: GetCollectionQueryVariables, config?: SWRConfigInterface<GetCollectionQuery, ClientError>) {
      return useSWR<GetCollectionQuery, ClientError>(key, () => sdk.GetCollection(variables), config);
    },
    useActiveCustomer(key: SWRKeyInterface, variables?: ActiveCustomerQueryVariables, config?: SWRConfigInterface<ActiveCustomerQuery, ClientError>) {
      return useSWR<ActiveCustomerQuery, ClientError>(key, () => sdk.activeCustomer(variables), config);
    },
    useActiveOrder(key: SWRKeyInterface, variables?: ActiveOrderQueryVariables, config?: SWRConfigInterface<ActiveOrderQuery, ClientError>) {
      return useSWR<ActiveOrderQuery, ClientError>(key, () => sdk.activeOrder(variables), config);
    },
    useOrders(key: SWRKeyInterface, variables?: OrdersQueryVariables, config?: SWRConfigInterface<OrdersQuery, ClientError>) {
      return useSWR<OrdersQuery, ClientError>(key, () => sdk.orders(variables), config);
    },
    useTextPage(key: SWRKeyInterface, variables: TextPageQueryVariables, config?: SWRConfigInterface<TextPageQuery, ClientError>) {
      return useSWR<TextPageQuery, ClientError>(key, () => sdk.textPage(variables), config);
    },
    useProductById(key: SWRKeyInterface, variables: ProductByIdQueryVariables, config?: SWRConfigInterface<ProductByIdQuery, ClientError>) {
      return useSWR<ProductByIdQuery, ClientError>(key, () => sdk.productById(variables), config);
    },
    useProductBySlug(key: SWRKeyInterface, variables: ProductBySlugQueryVariables, config?: SWRConfigInterface<ProductBySlugQuery, ClientError>) {
      return useSWR<ProductBySlugQuery, ClientError>(key, () => sdk.productBySlug(variables), config);
    },
    useProductReleated(key: SWRKeyInterface, variables: ProductReleatedQueryVariables, config?: SWRConfigInterface<ProductReleatedQuery, ClientError>) {
      return useSWR<ProductReleatedQuery, ClientError>(key, () => sdk.ProductReleated(variables), config);
    },
    useWishList(key: SWRKeyInterface, variables?: WishListQueryVariables, config?: SWRConfigInterface<WishListQuery, ClientError>) {
      return useSWR<WishListQuery, ClientError>(key, () => sdk.wishList(variables), config);
    },
    useProductReviews(key: SWRKeyInterface, variables?: ProductReviewsQueryVariables, config?: SWRConfigInterface<ProductReviewsQuery, ClientError>) {
      return useSWR<ProductReviewsQuery, ClientError>(key, () => sdk.productReviews(variables), config);
    },
    useSales(key: SWRKeyInterface, variables?: SalesQueryVariables, config?: SWRConfigInterface<SalesQuery, ClientError>) {
      return useSWR<SalesQuery, ClientError>(key, () => sdk.sales(variables), config);
    },
    useSearch(key: SWRKeyInterface, variables: SearchQueryVariables, config?: SWRConfigInterface<SearchQuery, ClientError>) {
      return useSWR<SearchQuery, ClientError>(key, () => sdk.Search(variables), config);
    },
    useSearchFacetValues(key: SWRKeyInterface, variables: SearchFacetValuesQueryVariables, config?: SWRConfigInterface<SearchFacetValuesQuery, ClientError>) {
      return useSWR<SearchFacetValuesQuery, ClientError>(key, () => sdk.SearchFacetValues(variables), config);
    },
    useFacetValueByCode(key: SWRKeyInterface, variables: FacetValueByCodeQueryVariables, config?: SWRConfigInterface<FacetValueByCodeQuery, ClientError>) {
      return useSWR<FacetValueByCodeQuery, ClientError>(key, () => sdk.facetValueByCode(variables), config);
    },
    useGetShippingMethods(key: SWRKeyInterface, variables?: GetShippingMethodsQueryVariables, config?: SWRConfigInterface<GetShippingMethodsQuery, ClientError>) {
      return useSWR<GetShippingMethodsQuery, ClientError>(key, () => sdk.getShippingMethods(variables), config);
    },
    useBoxberryListPoints(key: SWRKeyInterface, variables?: BoxberryListPointsQueryVariables, config?: SWRConfigInterface<BoxberryListPointsQuery, ClientError>) {
      return useSWR<BoxberryListPointsQuery, ClientError>(key, () => sdk.boxberryListPoints(variables), config);
    },
    useCdekListPoints(key: SWRKeyInterface, variables?: CdekListPointsQueryVariables, config?: SWRConfigInterface<CdekListPointsQuery, ClientError>) {
      return useSWR<CdekListPointsQuery, ClientError>(key, () => sdk.cdekListPoints(variables), config);
    },
    useCdekListCities(key: SWRKeyInterface, variables: CdekListCitiesQueryVariables, config?: SWRConfigInterface<CdekListCitiesQuery, ClientError>) {
      return useSWR<CdekListCitiesQuery, ClientError>(key, () => sdk.cdekListCities(variables), config);
    },
    useSlides(key: SWRKeyInterface, variables?: SlidesQueryVariables, config?: SWRConfigInterface<SlidesQuery, ClientError>) {
      return useSWR<SlidesQuery, ClientError>(key, () => sdk.slides(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;