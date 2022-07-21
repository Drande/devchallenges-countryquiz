import type { CountryData } from "@/models/Country.model";

let countryCache: Record<string, any> = {};

export const getCountries = async (): Promise<CountryData[]> => {
    return new Promise((resolve, reject) => {
        const apiRequest = 'all';
        const cache = countryCache[apiRequest];
        if(cache) { resolve(cache); return; }
        fetch(`https://restcountries.com/v3.1/${apiRequest}`)
        .then(response => response.json())
        .then(data => {
            countryCache[apiRequest] = data;
            resolve(data);
        });
    })
}
