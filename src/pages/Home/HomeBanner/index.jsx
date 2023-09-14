import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from '../../../assets/images/banner.jpg'
import './style.scss'
const HomeBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      img:banner
    },
    {
      img:banner
    },
    {
      img:banner
    },
    {
      img:banner
    },
    {
      img:banner
    },
  ]
  return (
    <div className="home-banner-wrapper">
      <div className="home-banner-container">
        <div className="home-banner-content">
          <Slider {...settings}>
          {
            data.map((ele, index)=>{
              return(
                <img key={index} src={ele.img} alt="" />
              )
            })
          }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
