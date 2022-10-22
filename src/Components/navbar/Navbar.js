import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="agileits_header">
        <div class="container">
          <div class="w3l_offers">
            <p>
              SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
              <a href="products.html">SHOP NOW</a>
            </p>
          </div>
          <div class="agile-login">
            <ul>
              <li>
                <a href="/signup"> Create Account </a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/contactUs">Help</a>
              </li>
            </ul>
          </div>
          <div class="product_list_header">
            <form action="#" method="post" class="last">
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <button class="w3view-cart" type="submit" name="submit" value="">
                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
