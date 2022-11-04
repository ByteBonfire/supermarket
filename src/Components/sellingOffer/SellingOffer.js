import React, { useEffect, useState } from "react";
import { useNavigate, useLinkClickHandler } from "react-router-dom";
// import sellingData from "./sellingData";
import "./sellingOffer.css";
// import sellingData1 from "./sellingData2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";

const SellingOffer = () => {
  const Navigate = useNavigate();
  const [offer1, setOffer1] = useState(false);

  const handler1 = () => {
    setOffer1(!offer1);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    if (localStorage.getItem("access_token") !== null) {
      dispatch(addToCart(data));
      Navigate("/mycart");
    } else {
      Navigate("/login");
    }
  };
  const handleAddToCart1 = (data1) => {
    if (localStorage.getItem("access_token") !== null) {
      dispatch(addToCart(data1));
      Navigate("/mycart");
    } else {
      Navigate("/login");
    }
  };

  const [sellingitem, setSellingitem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const hitme = () => {
  useEffect(() => {
    axios
      .get(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1",
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",
          },
        }
      )
      .then((res) => {
        // console.log(
        //   res.data.data
        //     .slice(0, 10)
        //     .map((item) => console.log(item.id, "batti")),
        //   "okay"
        // );
        setSellingitem(res.data.data.slice(0, 6));
        setIsLoading(!isLoading);
        // console.log(sellingitem, "katta");
      })
      .catch((err) => {
        console.log(err, "sorry");
      });
  }, [setSellingitem]);

  // };

  return (
    <div class="top-brands">
      <div class="container">
        <div className="container-offer">
          <h2>Top selling offers</h2>
          <div class="grid_3 grid_5">
            <div
              class="bs-example bs-example-tabs"
              role="tabpanel"
              data-example-id="togglable-tabs"
            >
              <ul id="myTab" class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                  <a
                    href="#expeditions"
                    id="expeditions-tab"
                    role="tab"
                    data-toggle="tab"
                    aria-controls="expeditions"
                    aria-expanded="true"
                    onClick={() => handler1()}
                  >
                    Advertised offers
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#tours"
                    role="tab"
                    id="tours-tab"
                    data-toggle="tab"
                    aria-controls="tours"
                    onClick={() => handler1()}
                  >
                    Today Offers
                  </a>
                </li>
              </ul>
              {isLoading ? (
                <>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "32px",
                    }}
                  >
                    Loading....
                  </p>
                </>
              ) : (
                <>
                  {offer1 === false ? (
                    <div>
                      <div id="myTabContent" class="tab-content">
                        <div
                          role="tabpanel"
                          class="tab-pane fade in active"
                          id="expeditions"
                          aria-labelledby="expeditions-tab"
                        >
                          <div class="agile-tp">
                            <h5>Advertised this week</h5>
                            <p class="w3l-ad">
                              We've pulled together all our advertised offers
                              into one place, so you won't miss out on a great
                              deal.
                            </p>
                          </div>
                        </div>
                      </div>

                      {sellingitem.map((data, index) => {
                        return (
                          <>
                            <div class="col-md-4 top_brand_left product-cart">
                              <div class="hover14 column">
                                <div class="agile_top_brand_left_grid">
                                  <div class="agile_top_brand_left_grid_pos">
                                    <img
                                      src="assets/images/offer.png"
                                      alt=" "
                                      class="img-responsive"
                                    />
                                  </div>
                                  <div class="product-Desc">
                                    <img src="" alt="image" />
                                    <p>{data.title}</p>
                                    <p>{data.categoryTitle}</p>
                                    <p>{data.categorySlug}</p>
                                    {/* <div className="productPrice">
                                    <p>{data1.price}</p>
                                    <p>{data1.discountedprice}</p>
                                  </div> */}
                                    <p>{data.rating}</p>

                                    <div class="snipcart-details top_brand_home_details">
                                      <input
                                        onClick={() => handleAddToCart1(data)}
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        class="button"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <div id="myTabContent" class="tab-content">
                        <div
                          role="tabpanel"
                          class="tab-pane fade in active"
                          id="expeditions"
                          aria-labelledby="expeditions-tab"
                        >
                          <div class="agile-tp">
                            <h5> this week</h5>
                            <p class="w3l-ad">
                              We've pulled together all our advertised offers
                              into one place, so you won't miss out on a great
                              deal.
                            </p>
                          </div>
                        </div>
                      </div>

                      {sellingitem.map((data1, index) => {
                        return (
                          <>
                            <div class="col-md-4 top_brand_left product-cart">
                              <div class="hover14 column">
                                <div class="agile_top_brand_left_grid">
                                  <div class="agile_top_brand_left_grid_pos">
                                    <img
                                      src="assets/images/offer.png"
                                      alt=" "
                                      class="img-responsive"
                                    />
                                  </div>
                                  <div class="product-Desc">
                                    <img src="" alt="image" />
                                    <p>{data1.title}</p>
                                    <p>{data1.categoryTitle}</p>
                                    <p>{data1.categorySlug}</p>
                                    {/* <div className="productPrice">
                                    <p>{data1.price}</p>
                                    <p>{data1.discountedprice}</p>
                                  </div> */}
                                    <p>{data1.rating}</p>

                                    <div class="snipcart-details top_brand_home_details">
                                      <input
                                        onClick={() => handleAddToCart1(data1)}
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        class="button"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingOffer;
