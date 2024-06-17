import { CountryCode } from 'libphonenumber-js';

export interface LayoutBaseProps {
  children: React.ReactNode;
}

export interface NextImageImport {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}

export interface GeoData {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: CountryCode;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string | null;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}
