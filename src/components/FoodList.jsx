import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.title} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
};

export default FoodList;
