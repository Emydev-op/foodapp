import style from "./fooditem.module.css";

const FoodItem = ({ food, setFoodId }) => {
  return (
    <div className={style.itemcontainer}>
      <img src={food.image} className={style.itemimage} alt="food-img" />
      <div className={style.itemcontent}>
        <p className={style.itemname}>{food.title}</p>
        <div className={style.buttoncontainer}>
          <button
            onClick={() => setFoodId(food.id)}
            className={style.itembutton}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
