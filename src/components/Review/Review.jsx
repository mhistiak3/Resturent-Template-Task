import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./Review.module.css";
const Review = () => {
  return (
    <div className={classes.review_section}>
      <div className={`${classes.review_container} container`}>
        <div className={classes.review_topBar}>
          <div>
            <p>Crispy, Every Bite Taste</p>
            <h2>what some of my customers say</h2>
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

        {/* review cards */}
        <div className={classes.review_cards}>
          <div className={classes.review_card}>
            <div className={classes.review_content}>
              <p>
                You can't go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would defiantly recommend it.
              </p>
              <div className={classes.user_info}>
                <div>
                  <h4>Khalid Al Dawsry</h4>
                  <span>Jeddah, Saudi</span>
                </div>
                <div>
                  <img src="/user-1.png" alt="avatar" />
                  <div className={classes.divider}></div>
                </div>
              </div>
            </div>
            <div className={classes.review_img}></div>
          </div>
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
export default Review;
