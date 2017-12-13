const fs = require('fs');
const data = require('iso3166-2-db/i18n/dispute/UN/en.json');

fs.writeFileSync('../index.json', JSON.stringify(data));

fs.writeFileSync('../list.json', JSON.stringify(compact(data)));


function compact(data) {
  let result = {};
  Object.keys(data).forEach(countryKey => {
    const dataCountry = data[countryKey];
    const country = {
      name: dataCountry.name,
      regions: dataCountry.regions.map(region => ({
        name: region.name,
        iso: region.iso
      }))
    };
    result[countryKey] = country;
  });

  return result;
}
