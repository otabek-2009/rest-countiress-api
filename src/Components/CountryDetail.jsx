import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
  const [country, setCountry] = useState([]);

  let { countryName } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();
      setCountry(data[0]);
    };
  
    getCountry()
  }, []);

  let nativeName = country?.name?.nativeName
  ? Object.values(country.name.nativeName)[0].official
  : "N/A";
let currency = country?.currencies
  ? Object.values(country.currencies)[0].name
  : "N/A";
let language = country?.languages
  ? Object.values(country.languages).join(", ")
  : "N/A";

  return (
    <section className=" container mt-12 lg:mt-20">
      <div>
        <button
          onClick={() => history.back()}
          className=" bg-white dark:bg-black dark:text-white shadow-xl px-4 py-3 rounded flex gap-4 items-center justify-around hover:shadow-sm active:shadow-2xl active:scale-105 hover:bg-slate-300 transition-all duration-300 text-lg w-32"
        >
          <FaArrowLeft /> <span>Back</span>
        </button>
      </div>

      <main className="detail-country  dark:text-gray-50 mt-9 flex lg:flex-row flex-col gap-8">
        <img
          loading="lazy"
          className=" lg:w-1/2 h-[300px] md:h-[400px] border-2 border-slate-400"
          src={country.flags?.svg}
          alt="img"
        />

        <div className=" lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-5">{ country.name?.common }</h1>

          <figure className=" flex flex-col sm:flex-row max-w-[540px] gap-12 justify-between">
            <figcaption className=" text-xl">
              <ul className=" flex-col flex gap-3 ">
                <li>
                  <span className=" font-bold mr-3 ">Native Name:</span>
                  { nativeName }
                </li>
                <li>
                  <span className=" font-bold mr-3 ">Population:</span>
                  98989898
                </li>
                <li>
                  <span className=" font-bold mr-3 ">Region:</span>
                  Europa
                </li>
                <li>
                  <span className=" font-bold mr-3 ">Sub Region:</span>
                  Northern Europe
                </li>
                <li>
                  <span className=" font-bold mr-3 ">Capital:</span>
                  Stockholm
                </li>
              </ul>
            </figcaption>

            <figcaption className=" text-xl">
              <ul className=" flex-col flex gap-3">
                <li>
                  <span className=" font-bold mr-3 ">Top Level Domain:</span>
                  .se
                </li>
                <li>
                  <span className=" font-bold mr-3 ">Currency:</span>
                  Swedish krona
                </li>
                <li>
                  <span className=" font-bold mr-3 ">Languages:</span>
                  Swedish
                </li>
              </ul>
            </figcaption>
          </figure>

          <div className=" my-12 flex flex-wrap items-center gap-5">
            <h1 className=" text-black dark:text-white font-semibold text-xl">
              Border countries:{" "}
            </h1>
            <button className=" bg-white dark:bg-black shadow-xl px-4 py-3 rounded flex gap-4 items-center justify-around hover:shadow-sm active:shadow-2xl active:scale-105 hover:bg-slate-300 transition-all duration-300 text-lg w-32">
              KDS
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
