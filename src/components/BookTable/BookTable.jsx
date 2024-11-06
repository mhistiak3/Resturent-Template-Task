import classes from "./BookTable.module.css";
const BookTable = () => {
  return (
    <div className={classes.bookTable_section}>
      <div className={` container`}>
        <div className={classes.bookTable_container}>
          <div>
            <p>Book now</p>
            <h2>Book your table</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              quae! Minima.
              <br /> consectetur adipisicing elit. Magnam, enim sunt.{" "}
            </span>
          </div>
          <form action="" className={classes.bookTable_form}>
            <div className={classes.input_group}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className={classes.input_group}>
              <input type="date" placeholder="Reservation date" />
              <input type="number" placeholder="Number of Guests" />
            </div>
            <div>
              <textarea placeholder="Message"></textarea>
            </div>
            <div>
              <button className="btn">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BookTable;