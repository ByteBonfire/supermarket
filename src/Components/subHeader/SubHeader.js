import React from "react";

const SubHeader = () => {
  return (
    <div>
      <div class="navigation-agileits">
        <div class="container">
          <nav class="navbar navbar-default">
            <div class="navbar-header nav_2">
              <button
                type="button"
                class="navbar-toggle collapsed navbar-toggle1"
                data-toggle="collapse"
                data-target="#bs-megadropdown-tabs"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="index.html" class="act">
                    Home
                  </a>
                </li>

                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Groceries<b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu multi-column columns-3">
                    <div class="row">
                      <div class="multi-gd-img">
                        <ul class="multi-column-dropdown">
                          <h6>All Groceries</h6>
                          <li>
                            <a href="groceries.html">Dals & Pulses</a>
                          </li>
                          <li>
                            <a href="groceries.html">Almonds</a>
                          </li>
                          <li>
                            <a href="groceries.html">Cashews</a>
                          </li>
                          <li>
                            <a href="groceries.html">Dry Fruit</a>
                          </li>
                          <li>
                            <a href="groceries.html"> Mukhwas </a>
                          </li>
                          <li>
                            <a href="groceries.html">Rice & Rice Products</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Household<b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu multi-column columns-3">
                    <div class="row">
                      <div class="multi-gd-img">
                        <ul class="multi-column-dropdown">
                          <h6>All Household</h6>
                          <li>
                            <a href="household.html">Cookware</a>
                          </li>
                          <li>
                            <a href="household.html">Dust Pans</a>
                          </li>
                          <li>
                            <a href="household.html">Scrubbers</a>
                          </li>
                          <li>
                            <a href="household.html">Dust Cloth</a>
                          </li>
                          <li>
                            <a href="household.html"> Mops </a>
                          </li>
                          <li>
                            <a href="household.html">Kitchenware</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Personal Care<b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu multi-column columns-3">
                    <div class="row">
                      <div class="multi-gd-img">
                        <ul class="multi-column-dropdown">
                          <h6>Baby Care</h6>
                          <li>
                            <a href="personalcare.html">Baby Soap</a>
                          </li>
                          <li>
                            <a href="personalcare.html">
                              Baby Care Accessories
                            </a>
                          </li>
                          <li>
                            <a href="personalcare.html">Baby Oil & Shampoos</a>
                          </li>
                          <li>
                            <a href="personalcare.html">Baby Creams & Lotion</a>
                          </li>
                          <li>
                            <a href="personalcare.html"> Baby Powder</a>
                          </li>
                          <li>
                            <a href="personalcare.html">Diapers & Wipes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Packaged Foods<b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu multi-column columns-3">
                    <div class="row">
                      <div class="multi-gd-img">
                        <ul class="multi-column-dropdown">
                          <h6>All Accessories</h6>
                          <li>
                            <a href="packagedfoods.html">Baby Food</a>
                          </li>
                          <li>
                            <a href="packagedfoods.html">Dessert Items</a>
                          </li>
                          <li>
                            <a href="packagedfoods.html">Biscuits</a>
                          </li>
                          <li>
                            <a href="packagedfoods.html">Breakfast Cereals</a>
                          </li>
                          <li>
                            <a href="packagedfoods.html"> Canned Food </a>
                          </li>
                          <li>
                            <a href="packagedfoods.html">Chocolates & Sweets</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Beverages<b class="caret"></b>
                  </a>
                  <ul class="dropdown-menu multi-column columns-3">
                    <div class="row">
                      <div class="multi-gd-img">
                        <ul class="multi-column-dropdown">
                          <h6>Tea & Coeffe</h6>
                          <li>
                            <a href="beverages.html">Green Tea</a>
                          </li>
                          <li>
                            <a href="beverages.html">Ground Coffee</a>
                          </li>
                          <li>
                            <a href="beverages.html">Herbal Tea</a>
                          </li>
                          <li>
                            <a href="beverages.html">Instant Coffee</a>
                          </li>
                          <li>
                            <a href="beverages.html"> Tea </a>
                          </li>
                          <li>
                            <a href="beverages.html">Tea Bags</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li>
                  <a href="gourmet.html">Gourmet</a>
                </li>
                <li>
                  <a href="offers.html">Offers</a>
                </li>
                <li>
                  <a href="/contactus">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
