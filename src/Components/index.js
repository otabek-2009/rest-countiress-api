let countries = [
    { name: "Uzbekistan", region: 'Americas' },
    { name: "USA", region: "Asia" },
    { name: "Uzbekistan", region: 'Americas' },
    { name: "USA", region: "Asia" },

]

let inputQuery = 'U'
let selectRegion = 'Americas'
const filderdData = countries.filter(country => console.log(country.name.toLocaleLowerCase().includes(inputQuery.toLocaleLowerCase())));
const filderdedRegion countries.filter(country => console.region.toLocaleLowerCase().includes(selectRegion.toLocaleLowerCase()));