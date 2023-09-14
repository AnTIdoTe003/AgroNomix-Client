import { Link } from "react-router-dom";
import "./style.scss";
/* eslint-disable react/prop-types */
const Categories = () => {
  const data = [
    {
      title: "Offers",
      img: "https://cdn2.vectorstock.com/i/1000x1000/39/26/shopping-special-offers-vector-20543926.jpg",
      slug: "/",
    },
    {
      title: "Offers",
      img: "https://cdn2.vectorstock.com/i/1000x1000/39/26/shopping-special-offers-vector-20543926.jpg",
      slug: "/",
    },
    {
      title: "Offers",
      img: "https://cdn2.vectorstock.com/i/1000x1000/39/26/shopping-special-offers-vector-20543926.jpg",
      slug: "/",
    },
    {
      title: "Offers",
      img: "https://cdn2.vectorstock.com/i/1000x1000/39/26/shopping-special-offers-vector-20543926.jpg",
      slug: "/",
    },
    {
      title: "Offers",
      img: "https://cdn2.vectorstock.com/i/1000x1000/39/26/shopping-special-offers-vector-20543926.jpg",
      slug: "/",
    },
    {
      title: "Offers",
      img: "https://cdn2.vectorstock.com/i/1000x1000/39/26/shopping-special-offers-vector-20543926.jpg",
      slug: "/",
    },
    {
      title: "Offers",
      img: "https://cdn2.vectorstock.com/i/1000x1000/39/26/shopping-special-offers-vector-20543926.jpg",
      slug: "/",
    },
    {
      title: "Offers",
      img: "https://cdn2.vectorstock.com/i/1000x1000/39/26/shopping-special-offers-vector-20543926.jpg",
      slug: "/",
    },
  ];
  return (
    <div className="category-wrapper">
      <div className="category-container">
        <div className="category-content">
          {data.map((ele, index) => {
            return (
              <CategoryCard
                key={index}
                title={ele.title}
                img={ele.img}
                slug={ele.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const CategoryCard = ({ title, img, slug }) => {
  return (
    <div className="category-card-wrapper">
      <Link to={slug}>
        <div className="category-card-content">
          <div className="category-card-img">
            <img width={50} height={50} src={img} alt="" />
          </div>
          <div className="category-card-text">
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Categories;
