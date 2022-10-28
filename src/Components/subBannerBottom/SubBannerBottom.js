import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubBannerButtomData from "./SubBannerBottomData";

const SubBannerBottom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {SubBannerButtomData.map((dataa, index) => {
          return (
            <div>
              <div>
                <img className="image-slider" src={dataa.image} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SubBannerBottom;
