import axios from "axios";

axios.create(
      {
            baseURL: "https://api.restcountries.com/",
      });

export const getCountryData = () => {
       return api.get("countries/v5");
};