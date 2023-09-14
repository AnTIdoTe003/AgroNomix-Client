/* eslint-disable react/no-unescaped-entities */
import ProductCard from "../../../components/ProductCard";
import  {ProductDemo} from '../../../constants/ProductDemo'
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
