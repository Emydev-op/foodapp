import { useEffect, useState } from "react";
import style from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "9a24585d050946339166546344989ef1";

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    fetchFood();
  }, [query]);

  return (
    <div className={style.searchcontainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={style.input}
      />
    </div>
  );
};

export default Search;
("");
