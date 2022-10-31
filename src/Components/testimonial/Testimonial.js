import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialData from "./TestimonialData";

const Testimonial = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div class="col-md-4 about-wthree-grids">
      <div class="offic-time">
        <div class="time-top">
          <h4>Praesentium :</h4>
        </div>
        <div class="time-bottom">
          <h5>At vero eos </h5>
          <h5>Accusamus et</h5>
          <p>
            Dignissimos at vero eos et accusamus et iusto odio ducimus qui
            accusamus et.{" "}
          </p>
        </div>
      </div>
      <div class="testi">
        <h3 class="w3_agile_header">Testimonial</h3>
        <div class="rslides" id="slider5">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => {
              return (
                <div>
                  <div
                    style={{
                      backgroundColor: "lightblue",
                      height: "200px",
                      widht: "800px",
                    }}
                  >
                    <h3
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "24px",
                      }}
                    >
                      {data.heading}
                    </h3>
                    <p>{data.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div>
  //       <div class="testi">
  //         <h3 class="w3_agile_header">Testimonial</h3>

  //         <div id="top" class="callbacks_container">
  //           <ul class="rslides" id="slider5">
  //             <li>
  //               <div class="testi-slider">
  //                 <h4>" I AM VERY PLEASED.</h4>
  //                 <p>
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //                   Suspendisse eu magna dolor, quisque semper.
  //                 </p>
  //                 <div class="testi-subscript">
  //                   <p>
  //                     <a href="#">John Doe,</a>Adipiscing
  //                   </p>
  //                   <span class="w3-agilesub"> </span>
  //                 </div>
  //               </div>
  //             </li>
  //             <li>
  //               <div class="testi-slider">
  //                 <h4>" I AM LOREM IPSUM.</h4>
  //                 <p>
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //                   Suspendisse eu magna dolor, quisque semper.
  //                 </p>
  //                 <div class="testi-subscript">
  //                   <p>
  //                     <a href="#">elit semper,</a>Dolor Elit
  //                   </p>
  //                   <span class="w3-agilesub"> </span>
  //                 </div>
  //               </div>
  //             </li>
  //             <li>
  //               <div class="testi-slider">
  //                 <h4>" CONSECTETUR PIMAGNA.</h4>
  //                 <p>
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //                   Suspendisse eu magna dolor, quisque semper.
  //                 </p>
  //                 <div class="testi-subscript">
  //                   <p>
  //                     <a href="#">Amet Doe,</a>Suspendisse
  //                   </p>
  //                   <span class="w3-agilesub"> </span>
  //                 </div>
  //               </div>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Testimonial;
