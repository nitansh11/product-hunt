import React, { useState, useRef } from "react";
import styles from "./Deals.module.css";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import Confetti from "react-confetti";
const Deals = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const confettiRef = useRef(null);
  const [product, setProduct] = React.useState({
    name: "Founder Club Membership",
    price: 799,
  });
  const history = useHistory();
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
        setShowConfetti(true);
        // history.push("/");
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);
  return (
    <div className={styles.Deals} ref={confettiRef}>
      <div className={styles.Deals__banner}>
        <div className={styles.Deals__bannerEmoji}>✨</div>
        <div className={styles.Deals__bannerHeader}>
          <h1>Founder Club</h1>
          <p>
            Your access to big savings on tools that help kick start your
            business. Join now for access to >$100,000 in savings for only$60/mo
          </p>
        </div>
        <div className={styles.Deals__bannerJoin}>
          <StripeCheckout
            stripeKey="pk_test_yUCJVPDmx1rlsgHAGtdqGkzw"
            token={makePayment}
            name={`Founder Club @$${product.price}`}
            amount={product.price * 100}
            // shippingAddress
            // billingAddress
          >
            {showConfetti ? (
              <button>CONGRATULATIONS!</button>
            ) : (
              <button>JOIN FOUNDER CLUB</button>
            )}
          </StripeCheckout>
          {/* <button>JOIN FOUNDER CLUB</button> */}
          <p>Got an invite code?</p>
        </div>
        {/* <div className={styles.Deals__bannerSort}>
          <p>Sort by:</p>
          <select>
            <option value="">Recommended</option>
            <option value="">Most Popular</option>
            <option value="">Newest</option>
          </select>
          <div className={styles.Deals__bannerSort__Search}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              placeholder="Discover your next favourite thing..."
              type="text"
            />
          </div>
        </div> */}
      </div>
      {showConfetti ? (
        <Confetti
          recycle={show}
          numberOfPieces={1000}
          width={width}
          height={height}
        />
      ) : null}
    </div>
  );
};

export default Deals;
