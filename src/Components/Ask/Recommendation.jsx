import React from "react";
import styles from "./Recommendation.module.css";
import { useSelector, useDispatch } from "react-redux";
const Recommendation = ({ id, productId, name, imageUrl }) => {
  const allProducts = useSelector((state) => state.productsReducer.productData);

  const currentProduct = allProducts.filter(
    (product) => product.id == productId
  )[0];
  console.log("current product", currentProduct);
  const renderCurrentProduct = () => {
  
    if (!currentProduct) {
      return (
        <div className={styles.Recommendation}>
          <h4></h4>
        </div>
      );
    }
    return (
      <div className={styles.Recommendation}>
        <div className={styles.Recommendation__product}>
          <img src={currentProduct.logo} alt="logo" />
          <div>
            <h2>{currentProduct.name}</h2>
            <p>{currentProduct.tagline}</p>
            <div>
              <img src={imageUrl} alt="user" />
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{renderCurrentProduct()}</>;
};
export default Recommendation;
