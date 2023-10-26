import style from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={style.itemcontainer}>
      <div className={style.imagecontainer}>
        <img
          className={style.image}
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
        />
      </div>
      <div class={style.namecontainer}>
        <p class={style.name}>{item.name}</p>
        <p class={style.amount}>
          {item.amount} {item.unit}
        </p>
      </div>
    </div>
  );
}
