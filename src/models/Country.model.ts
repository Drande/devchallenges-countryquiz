export interface CountryData {
    name:         Name;
    tld:          string[];
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   Currencies;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations: Record<string, Translation>;
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms:     Record<string, Genre>;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Images;
    coatOfArms:   Images;
    startOfWeek:  string;
    capitalInfo:  CapitalInfo;
    postalCode:   PostalCode;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  string;
}

export interface Images {
    png: string;
    svg: string;
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Genre {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    kal: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export type NativeName = Record<string, Translation>;

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}


export interface Currencies {
    DKK?: Currency;
    USD?: Currency;
    GEL?: Currency;
    GYD?: Currency;
    EUR?: Currency;
    BWP?: Currency;
    LKR?: Currency;
    OMR?: Currency;
    MVR?: Currency;
    WST?: Currency;
    SLL?: Currency;
    BND?: Currency;
    SGD?: Currency;
    JMD?: Currency;
    MWK?: Currency;
    MYR?: Currency;
    XAF?: Currency;
    TWD?: Currency;
    XCD?: Currency;
    DJF?: Currency;
    AUD?: Currency;
    CUC?: Currency;
    CUP?: Currency;
    MUR?: Currency;
    BGN?: Currency;
    XOF?: Currency;
    EGP?: Currency;
    BSD?: Currency;
    LYD?: Currency;
    ARS?: Currency;
    VES?: Currency;
    SSP?: Currency;
    KMF?: Currency;
    BAM?: Currency;
    NIO?: Currency;
    ZMW?: Currency;
    GNF?: Currency;
    CDF?: Currency;
    SAR?: Currency;
    FOK?: Currency;
    COP?: Currency;
    LAK?: Currency;
    KYD?: Currency;
    SZL?: Currency;
    ZAR?: Currency;
    SDG?: Currency;
    TVD?: Currency;
    SYP?: Currency;
    LRD?: Currency;
    CHF?: Currency;
    ISK?: Currency;
    ZWL?: Currency;
    BRL?: Currency;
    RWF?: Currency;
    UZS?: Currency;
    XPF?: Currency;
    BDT?: Currency;
    GIP?: Currency;
    AWG?: Currency;
    PAB?: Currency;
    PHP?: Currency;
    RUB?: Currency;
    MZN?: Currency;
    GBP?: Currency;
    SHP?: Currency;
    IRR?: Currency;
    CAD?: Currency;
    AFN?: Currency;
    FKP?: Currency;
    RON?: Currency;
    AZN?: Currency;
    GGP?: Currency;
    KHR?: Currency;
    SRD?: Currency;
    DZD?: Currency;
    AMD?: Currency;
    MAD?: Currency;
    BBD?: Currency;
    AOA?: Currency;
    SBD?: Currency;
    FJD?: Currency;
    MXN?: Currency;
    MOP?: Currency;
    BHD?: Currency;
    YER?: Currency;
    MRU?: Currency;
    CKD?: Currency;
    NZD?: Currency;
    PEN?: Currency;
    RSD?: Currency;
    TZS?: Currency;
    PKR?: Currency;
    BYN?: Currency;
    MMK?: Currency;
    SCR?: Currency;
    BMD?: Currency;
    UAH?: Currency;
    GMD?: Currency;
    PYG?: Currency;
    STN?: Currency;
    KRW?: Currency;
    TND?: Currency;
    KWD?: Currency;
    PGK?: Currency;
    HKD?: Currency;
    KID?: Currency;
    MGA?: Currency;
    BOB?: Currency;
    IMP?: Currency;
    KGS?: Currency;
    KZT?: Currency;
    MKD?: Currency;
    TOP?: Currency;
    CLP?: Currency;
    BIF?: Currency;
    DOP?: Currency;
    LSL?: Currency;
    KPW?: Currency;
    BTN?: Currency;
    INR?: Currency;
    SOS?: Currency;
    TJS?: Currency;
    LBP?: Currency;
    ANG?: Currency;
    UGX?: Currency;
    GHS?: Currency;
    ALL?: Currency;
    JEP?: Currency;
    NAD?: Currency;
    VND?: Currency;
    ILS?: Currency;
    JOD?: Currency;
    TRY?: Currency;
    MDL?: Currency;
    JPY?: Currency;
    HRK?: Currency;
    IDR?: Currency;
    TMT?: Currency;
    VUV?: Currency;
    BZD?: Currency;
    ETB?: Currency;
    HNL?: Currency;
    PLN?: Currency;
    QAR?: Currency;
    HTG?: Currency;
    UYU?: Currency;
    KES?: Currency;
    THB?: Currency;
    CRC?: Currency;
    NPR?: Currency;
    CVE?: Currency;
    TTD?: Currency;
    ERN?: Currency;
    NGN?: Currency;
    NOK?: Currency;
    SEK?: Currency;
    IQD?: Currency;
    CNY?: Currency;
    AED?: Currency;
    MNT?: Currency;
    GTQ?: Currency;
    CZK?: Currency;
    HUF?: Currency;
}