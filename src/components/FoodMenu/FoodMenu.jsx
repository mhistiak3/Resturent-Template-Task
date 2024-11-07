import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./FoodMenu.module.css";
import { useEffect, useState } from "react";

const FoodMenu = () => {
  const [menuCards, setMenuCards] = useState([
    {
      id: 1,
      title: "Vegetables Burger",
      img: "/burger.png",
      sub: "Barbecue Italian cuisine pizza",
    },
    {
      id: 2,
      title: "Special Pizza",
      img: "/pizza.png",
      sub: "Barbecue Italian cuisine pizza",
    },
    {
      id: 3,
      title: "Special French Fries",
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

  const changeMenu = () => {
    const updatedCards = [...menuCards];
    const firstCard = updatedCards.shift();
    updatedCards.push(firstCard);
    setMenuCards(updatedCards);
  };
  const changeMenuForward = () => {
    const updatedCards = [...menuCards];
    const firstCard = updatedCards.pop();
    updatedCards.unshift(firstCard);
    setMenuCards(updatedCards);
  };

  useEffect(() => {
    const interval = setInterval(changeMenu, 4000);
    return () => clearInterval(interval);
  }, [menuCards]);

  return (
    <div className={classes.foodMenu_section}>
      <div className={`container ${classes.foodMenu_container}`}>
        <div className={classes.foodMenu_topBar}>
          <div>
            <p>Crispy, Every Bite Taste</p>
            <h2>POPULAR FOOD ITEMS</h2>
          </div>
          <div className="arrows">
            <span className="arrow" onClick={changeMenuForward}>
              <IoIosArrowBack />
            </span>
            <span className="arrow active_arrow" onClick={changeMenu}>
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className={classes.foodMenu_card_container}>
          {menuCards.map((item, index) => (
            <div key={item.id} className={`${classes.foodMenu_card}`}>
              <div className={classes.foodMenu_card_img}>
                <img src={item.img} alt={item.title} />
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
