import React from "react";
import sellingData from "./sellingData";
import "./sellingOffer.css";

const SellingOffer = () => {
  console.log(sellingData, "hii");
  return (
    <>
      <div>
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
                    >
                      Today Offers
                    </a>
                  </li>
                </ul>
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
                        We've pulled together all our advertised offers into one
                        place, so you won't miss out on a great deal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
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
                                <input type="hidden" name="return" value=" " />
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
      </div>
    </>
  );
};

export default SellingOffer;
