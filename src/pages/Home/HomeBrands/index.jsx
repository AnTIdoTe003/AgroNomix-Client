import './style.scss'
import { Brands } from '../../../constants/Brands'
const HomeBrands = () => {
  return (
  <div className="home-brand-wrapper">
    <div className="home-brand-container">
        <div className="home-brand-content">
            <div className="home-brand-heading">
                <p>Brands</p>
            </div>
            <div className="home-brand-logos">
                {
                    Brands.map((ele,index)=>{
                        return(
                            
                                <img key={index}  width={200} height={200} src={ele.img} alt="" />
                       
                        )
                    })
                }
            </div>
        </div>
    </div>
  </div>
  )
}

export default HomeBrands