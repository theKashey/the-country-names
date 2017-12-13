this is a small (40-120kb gziped) part of [iso3166-2-db](https://github.com/esosedi/3166) library.
Contains only English names for the world from UN point of view

```typescript
  // get major export. 120kb gzipped
  import countryNames from 'the-country-names';
  // as long the-country-names is a simple json file
  // countryNames will be a simple js object, with good autocomplete
  
  // get minor export, 40kb gzipped
  import countryNames from 'the-country-names/list';
  // to get a reduced object, without references. Just names and codes
  
```

The exported types are
```typescript
interface countryNames {    
   [iso3166_1: string]: Country;    
}

interface Country {      
    name: string, // name of a country
    iso: string,  // 2 letter ISO3166-1 code, same as the key
    iso3: string, // 3 letter ISO3166-1 code
    numeric: 20,  // numeric ISO3166-1 code
    fips: "AN",   // FIPS code
    reference: Reference,
    regions: Array<Region>
}

interface Region {
    name: string,
    iso: string,    // iso3166-2 code
    fips: string,   // fips code
    admin: string,  // national code
    reference: Reference,
}

interface Reference {
    geonames: number,      // geonames id
    openstreetmap: number, // OSM relation Id
    wikipedia: string      // wikipedia article
    wof?: number            // whosonfirst id
}
```

Please refer to the `bin/create.js`, if you have any questions.