import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./Review.module.css";
import { useState } from "react";
const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/95.jpg", // Random image of a person
      review:
        "Amazing food! The pizza was fresh and delicious. The crust was perfect, and the toppings were flavorful. Highly recommend this place for a quick bite.",
      address: "123 Main St, Cityville, Country",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/44.jpg", // Another random image of a person
      review:
        "The service was great and the atmosphere was cozy. The staff was very friendly, and the decor was charming. Would visit again for sure!",
      address: "456 Oak Ave, Townsville, Country",
    },
  ];
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevReview = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className={classes.review_section}>
      <div className={`${classes.review_container} container`}>
        <div className={classes.review_topBar}>
          <div>
            <p>Crispy, Every Bite Taste</p>
            <h2>what some of my customers say</h2>
          </div>
          <div className="arrows">
            <span className="arrow" onClick={prevReview}>
              <IoIosArrowBack />
            </span>
            <span className="arrow active_arrow" onClick={nextReview}>
              <IoIosArrowForward />
            </span>
          </div>
        </div>

        {/* review cards */}
        <div className={classes.review_cards}>
          <div className={classes.review_card}>
            <div className={classes.review_content}>
              <p>{reviews[index].review}</p>
              <div className={classes.user_info}>
                <div>
                  <h4>{reviews[index].name}</h4>
                  <span>{reviews[index].address}</span>
                </div>
                <div>
                  <img src={reviews[index].image} alt="avatar" />
                  <div className={classes.divider}></div>
                </div>
              </div>
            </div>
            <div className={classes.review_img}>
              <img src="/play.png" alt="" />
            </div>
          </div>
        </div>
        <div className="arrows-bottom" onClick={prevReview}>
          <span className="arrow">
            <IoIosArrowBack />
          </span>
          <span className="arrow active_arrow" onClick={nextReview}>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Review;
