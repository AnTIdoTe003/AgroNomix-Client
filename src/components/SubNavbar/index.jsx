import "./style.scss";
const SubNavbar = () => {
  const data = [
    {
      title: "Home",
    },
    {
      title: "Brands",
    },
    {
      title: "Seeds",
    },
    {
      title: "Crop Protection",
    },
    {
      title: "Crop Nutrition",
    },
    {
      title: "Machinery",
    },
    {
      title: "Animal Husbandry",
    },
    {
      title: "Segments",
    },
    {
      title: "Services",
    },
    {
      title: "Knowledge Center",
    },
  ];
  return (
    <div className="sub-nav-wrapper">
      <div className="sub-nav-container">
        <div className="sub-nav-content">
          {data.map((ele, index) => {
            return <p key={index}>{ele.title}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
