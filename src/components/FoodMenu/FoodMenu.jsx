import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./FoodMenu.module.css";
import { useState } from "react";
const FoodMenu = () => {
  const [MenuCards,setMenuCards] = useState([
    {
      id: 1,
      title: "vegetables burger",
      img: "/burger.png",
      sub: "Barbecue Italian cuisine pizza",
    },
    {
      id: 2,
      title: "special pizza",
      img: "/pizza.png",
      sub: "Barbecue Italian cuisine pizza",
    },
    {
      id: 3,
      title: "Spacial French fries ",
      img: "/french-fries.png",
      sub: "Barbecue Italian cuisine",
    },
    {
      id: 4,
      title: "Cuisine Chicken",
      img: "/chicken.png",
      sub: "Japanese Cuisine Chicken",
    },
  ]);



  return (
    <div className={classes.foodMenu_section}>
      <div className={`container ${classes.foodMenu_container}`}>
        <div className={classes.foodMenu_topBar}>
          <div>
            <p>Crispy, Every Bite Taste</p>
            <h2>POPULAR FOOD ITEMS</h2>
          </div>
          <div className="arrows">
            <span className="arrow">
              <IoIosArrowBack />
            </span>
            <span className="arrow active_arrow">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className={classes.foodMenu_card_container}>
          {MenuCards.map((item) => (
            <div className={classes.foodMenu_card} key={item.id}>
              <div className={classes.foodMenu_card_img}>
                <img src={item.img} alt="menu" />
              </div>
              <div className={classes.divider}></div>
              <div className={classes.foodMenu_card_info}>
                <h3>{item.title}</h3>
                <p>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows-bottom">
          <span className="arrow">
            <IoIosArrowBack />
          </span>
          <span className="arrow active_arrow">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </div>
  );
};
export default FoodMenu;
