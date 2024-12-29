import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        if (response.status == 200) {
          setCountries(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  const filterdData = countries.filter(country => {
    const matchesCountryName = country.name.common.toLowerCase().includes(countryName.toLocaleLowerCase());
    const matchesRegionName = country.region.toLowerCase().includes(regionName.toLocaleLowerCase());
    return matchesCountryName && matchesRegionName;
  })

  if (loading) {
    return (
      <h1 className="mt-5 text-center text-4xl text-bold">
        Loading... <span className=" animate-spin inline-block">⭕️</span>
      </h1>
    );
  }

  return (
    <section className=" max-w-7xl mx-auto ">
      <div>{/* inputlar */}</div>

      <section class="dark:text-gray-400 text-black body-font">
        <div class="container px-5 py-24 mx-auto">
        <main className="flex justify-between items-center my-8 bg-slate-200 dark:bg-gray-600 sticky w-full top-16 p-4 z-50 shadow-md rounded-md">
            <div className="flex items-center bg-white dark:bg-slate-700 dark:text-gray-100 shadow-sm rounded-md h-10 gap-3 px-5 border border-slate-500">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                id="searchInput"
                placeholder="Search for a country..."
                className="focus:outline-none text-lg w-full  dark:bg-slate-700 dark:text-gray-100"
                type="text"
                value={countryName}
                onChange={({ target }) => setCountryName(target.value)}
              />
            </div>
            <select
              onChange={({ target }) => setRegionName(target.value)}
              id="selectedRegion"
              className="h-10 px-4 py-2  dark:text-gray-100 border border-slate-400 rounded-md bg-white dark:bg-slate-700"
            >
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </main>

          <div class="flex flex-wrap -m-4">
            {filterdData.length > 0 &&
              filterdData.map((country, index) => {
                return (
                  <Link to={`/country/${ country.name.common }`} key={index} class="card.... xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-white dark:bg-gray-800 shadow-lg p-2 rounded-lg">
                      <img
                        class="h-[180px] rounded w-full object-cover mb-4"
                        src={country.flags.svg}
                        alt={country.name.common}
                      />
                      <div className="px-3">
                        <h3 class="tracking-widest text-indigo-400 text-xl font-semibold title-font">
                          { country.name.common }
                        </h3>
                        <figure class="leading-relaxed text-base">
                          <p className="flex justify-between items-center font-semibold text-lg"><span>Population:</span> <span className=" font-medium font-mono text-gray-500">{ country.population }</span></p>
                          <p className="flex justify-between items-center font-semibold text-lg"><span>Region:</span> <span className=" font-medium font-mono text-gray-500">{ country.region }</span></p>
                          <p className="flex justify-between items-center font-semibold text-lg"><span>Capital:</span> <span className=" font-medium font-mono text-gray-500">{ country.capital}</span></p>
                        </figure>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </section>
  );
}
