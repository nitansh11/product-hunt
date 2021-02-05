import React from "react";
import styles from "./ProductSidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { updateRecommendation } from "../../Redux/ask/actions";
import { AuthContext } from "../../AuthContextProvider";
import { getALLProductsData } from "../../Redux/products/actions";
import { getProducts } from "../../Redux/ask/actions";
import { v4 as uuid } from "uuid";
const ProductSidebar = ({ currentQuestion }) => {
  const [query, setQuery] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const allProducts = useSelector((state) => state.askReducer.allProducts);
  console.log("--------------------------------");
  console.log("all products:", allProducts);
  console.log("filtered products:", filteredProducts);
  console.log("--------------------------------");
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProducts());
    return () => {};
  }, []);

  React.useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  const handleQueryChange = (e) => {
    let myQuery = e.target.value;
    setQuery(myQuery);
    if (myQuery === "") {
      setFilteredProducts(allProducts);
    } else {
      let newFilteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(myQuery.toLowerCase())
      );
      setFilteredProducts(newFilteredProducts);
    }
  };
  const { isOpen, setIsOpen } = React.useContext(AuthContext);
  // dispatch an action to change the recommendation array of a particular askedQuestion
  const handleRecommendClick = (product) => {
    if (!isLoggedIn) {
      setIsOpen(true);
      return;
    }
    const updatedRecommendations = [
      ...currentQuestion.recommendations,
      { id: uuid(), productId: product.id, ...currentUser },
    ];
    // dispatch this updated property to api
    dispatch(updateRecommendation(currentQuestion.id, updatedRecommendations));
  };
  const renderProducts = () => {
    if (filteredProducts.length === 0) return;
    return filteredProducts.map((product) => {
      return (
        <div key={product.id} className={styles.ProductSidebar__productItem}>
          <img src={product.logo} alt="logo" />
          <div>
            <h4>{product.name}</h4>
            <p>{product.tagline}</p>
          </div>
          <div className={styles.ProductSidebar__productItem__button}>
            <button onClick={() => handleRecommendClick(product)}>
              RECOMMEND
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.ProductSidebar}>
      <div className={styles.ProductSidebar__search}>
        <h3>Search Products to Recommend:</h3>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search Products Here.."
        />
      </div>
      <ul>{renderProducts()}</ul>
    </div>
  );
};

export default ProductSidebar;
