/* eslint-disable react/no-unescaped-entities */
import ProductCard from "../../../components/ProductCard";
import  {ProductDemo} from '../../../constants/ProductDemo'
import { Link } from "react-router-dom";
import "./style.scss";
const TodaysOffer = () => {
  return (
    <div className="todays-offer-wrapper">
      <div className="todays-offer-container">
        <div className="todays-offer-content">
          <div className="todays-offer-header">
            <p>Today's Offer</p>
          </div>
          <div className="todays-offer-products">
            {
                ProductDemo.map((ele,index)=>{
                    return(
                      <Link to={'/product/123'}>
                      <ProductCard
                      key={index}
                      title={ele.title}
                      rating={ele.rating}
                      ratingNumber={ele.ratingNumber}
                      brand={ele.brand}
                      img={ele.img}
                      price={ele.price}
                      offerPrice={ele.offerPrice}
                    />
                      </Link>
                    )
                })
            }
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysOffer;
