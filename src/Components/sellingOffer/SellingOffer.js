import React, { useState } from "react";
import { useLinkClickHandler } from "react-router-dom";
import sellingData from "./sellingData";
import "./sellingOffer.css";
import sellingData1 from "./sellingData2";
import axios from "axios";

const SellingOffer = () => {
  const [offer1, setOffer1] = useState(false);
  const handler1 = () => {
    setOffer1(!offer1);
  };
  const hitme = () => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/config", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        },
      })
      .then((res) => {
        console.log(res, "ok");
      })
      .catch((err) => {
        console.log(err, "sorry");
      });
  };

  return (
    <>
      <div>
        <button onClick={hitme}>hitme</button>
        <div class="top-brands">
          <div class="container">
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

                {offer1 === false ? (
                  <>
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
                            We've pulled together all our advertised offers into
                            one place, so you won't miss out on a great deal.
                          </p>
                        </div>
                      </div>
                    </div>

                    {sellingData.map((data, index) => {
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
                                  <p>{data.text}</p>
                                  <div className="productPrice">
                                    <p>{data.price}</p>
                                    <p>{data.discountedprice}</p>
                                  </div>
                                  <p>{data.rating}</p>
                                </div>

                                <div class="agile_top_brand_left_grid1">
                                  <figure>
                                    <div class="snipcart-item block">
                                      <div class="snipcart-details top_brand_home_details">
                                        <form action="#" method="post">
                                          <fieldset>
                                            <input
                                              type="hidden"
                                              name="cmd"
                                              value="_cart"
                                            />
                                            <input
                                              type="hidden"
                                              name="add"
                                              value="1"
                                            />
                                            <input
                                              type="hidden"
                                              name="business"
                                              value=" "
                                            />
                                            <input
                                              type="hidden"
                                              name="item_name"
                                              value="Fortune Sunflower Oil"
                                            />
                                            <input
                                              type="hidden"
                                              name="amount"
                                              value="20.99"
                                            />
                                            <input
                                              type="hidden"
                                              name="discount_amount"
                                              value="1.00"
                                            />
                                            <input
                                              type="hidden"
                                              name="currency_code"
                                              value="USD"
                                            />
                                            <input
                                              type="hidden"
                                              name="return"
                                              value=" "
                                            />
                                            <input
                                              type="hidden"
                                              name="cancel_return"
                                              value=" "
                                            />
                                            <input
                                              type="submit"
                                              name="submit"
                                              value="Add to cart"
                                              class="button"
                                            />
                                          </fieldset>
                                        </form>
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
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
                            We've pulled together all our advertised offers into
                            one place, so you won't miss out on a great deal.
                          </p>
                        </div>
                      </div>
                    </div>

                    {sellingData1.map((data1, index) => {
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
                                  <p>{data1.text}</p>
                                  <div className="productPrice">
                                    <p>{data1.price}</p>
                                    <p>{data1.discountedprice}</p>
                                  </div>
                                  <p>{data1.rating}</p>
                                </div>

                                <div class="agile_top_brand_left_grid1">
                                  <figure>
                                    <div class="snipcart-item block">
                                      <div class="snipcart-details top_brand_home_details">
                                        <form action="#" method="post">
                                          <fieldset>
                                            <input
                                              type="hidden"
                                              name="cmd"
                                              value="_cart"
                                            />
                                            <input
                                              type="hidden"
                                              name="add"
                                              value="1"
                                            />
                                            <input
                                              type="hidden"
                                              name="business"
                                              value=" "
                                            />
                                            <input
                                              type="hidden"
                                              name="item_name"
                                              value="Fortune Sunflower Oil"
                                            />
                                            <input
                                              type="hidden"
                                              name="amount"
                                              value="20.99"
                                            />
                                            <input
                                              type="hidden"
                                              name="discount_amount"
                                              value="1.00"
                                            />
                                            <input
                                              type="hidden"
                                              name="currency_code"
                                              value="USD"
                                            />
                                            <input
                                              type="hidden"
                                              name="return"
                                              value=" "
                                            />
                                            <input
                                              type="hidden"
                                              name="cancel_return"
                                              value=" "
                                            />
                                            <input
                                              type="submit"
                                              name="submit"
                                              value="Add to cart"
                                              class="button"
                                            />
                                          </fieldset>
                                        </form>
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellingOffer;
