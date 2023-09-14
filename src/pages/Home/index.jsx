import Categories from "../../components/Categories";
import FoodBestSeller from "./BestSellers/FootBestSeller";
import HomeBanner from "./HomeBanner";
import HomeBrands from "./HomeBrands";
import TodaysOffer from "./TodaysOffer";
import "./style.scss";
import {useAuth} from "../../context/auth";

const Home = () => {
    const [user]= useAuth()
    console.log(user)
  return (
    <div>
      <Categories />
      <HomeBanner />
      <TodaysOffer />
      <HomeBrands />
      <FoodBestSeller />
    </div>
  );
};

export default Home;
