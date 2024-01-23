import getPrice from "../utils/getPrice";
import styles from "./product-card.module.css";
import LikeButton from "./Like";
const ProductCard = ({ img, title, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img height={293} src={img} alt="" />
        <div className={styles.card__like__icon}>
          <LikeButton/>
        </div>
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <div className={styles.card__footer}>
          <div className={styles.card__price}>
            <span>{getPrice(price).qimmat} so'm</span>
            <span>{getPrice(price).sum} so'm</span>
          </div>
          <div className={styles.add__to__cart__icon}>
            <svg
              className={styles.cart__svg}
              data-v-40da8b10=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                fill="#1f2026"
              ></path>
              <path
                d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                fill="#1f2026"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;