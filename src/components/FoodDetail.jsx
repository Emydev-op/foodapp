import { useEffect, useState } from "react";
import style from "./fooddetail.module.css";
import ItemList from "./ItemList";

const FoodDetail = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "9a24585d050946339166546344989ef1";

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    };
    fetchFood();
  }, [foodId]);

  return (
    <>
      <div className={style.recipecard}>
        <h1 className={style.recipename}>{food.title}</h1>
        <img
          className={style.recipeimage}
          src={food.image}
          alt="image of food"
        />
        <div className={style.recipedetails}>
          <span>
            <strong>🕓 {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👦‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥦 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💵 ${" "}
          <span>
            <strong> {food.pricePerServing} Per Serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={style.recipeinstruction}>
          <ol>
            {isLoading ? (
              <p>Loading Data...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.step}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </>
  );
};

export default FoodDetail;
