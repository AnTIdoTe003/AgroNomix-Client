import './style.scss'
import ProductCard from "../../../../components/ProductCard";
import  {ProductDemo} from '../../../../constants/ProductDemo'
const FoodBestSeller = () => {
  return (
    <div className="food-best-wrapper">
      <div className="food-best-container">
        <div className="food-best-content">
        <div className="food-best-header">
          <p>Best Selling Food</p>
        </div>
        <div className="food-best-products">
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
  )
}

export default FoodBestSeller