import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, addToCart } from "../../redux/cart";

const Try = () => {
  const selector = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <button>callme</button> */}
      <p>count:{selector}</p>
      <button onClick={() => dispatch(addToCart(console.log("clicked")))}>
        hello one
      </button>
    </div>
  );
};

export default Try;

// import React from "react";

// const Try = () => {
//   return (
//     <div>
//       <p>helll</p>
//     </div>
//   );
// };

// export default Try;
