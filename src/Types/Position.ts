export interface Position {
    data: Datum[];
}

export interface Datum {
    latitude:            number;
    longitude:           number;
    name:                string;
    type:                string;
    number:              string;
    street:              string;
    postal_code:         string;
    confidence:          number;
    region:              string;
    region_code:         string;
    administrative_area: null;
    neighbourhood:       string;
    country:             string;
    country_code:        string;
    label:               string;
    map_url:             string;
    country_module:      CountryModule;
    sun_module:          SunModule;
    timezone_module:     TimezoneModule;
}

export interface CountryModule {
    latitude:      string;
    longitude:     string;
    common_name:   string;
    official_name: string;
    capital:       string;
    flag:          string;
    area:          number;
    landlocked:    boolean;
    independent:   boolean;
    global:        Global;
    dial:          Dial;
    currencies:    Currency[];
    languages:     Languages;
}

export interface Currency {
    symbol:     string;
    code:       string;
    name:       string;
    numeric:    number;
    minor_unit: number;
}

export interface Dial {
    calling_code:         string;
    national_prefix:      string;
    international_prefix: string;
}

export interface Global {
    alpha2:         string;
    alpha3:         string;
    numeric_code:   string;
    region:         string;
    subregion:      string;
    region_code:    string;
    subregion_code: string;
    world_region:   string;
    continent_name: string;
    continent_code: string;
}

export interface Languages {
    eng: string;
}

export interface SunModule {
    rise:    Rise;
    set:     Rise;
    transit: number;
}

export interface Rise {
    time:         number;
    astronomical: number;
    civil:        number;
    nautical:     number;
}

export interface TimezoneModule {
    name:          string;
    offset_sec:    number;
    offset_string: string;
}