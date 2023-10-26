import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <>
      {isLoading ? (
        <p>Loading Data...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={item.name} item={item} />
        ))
      )}
    </>
  );
}
