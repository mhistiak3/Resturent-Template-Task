import classes from "./BookTable.module.css";
const BookTable = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      date: formData.get("date"),
      guests: formData.get("guests"),
      message: formData.get("message"),
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "https://formspree.io/f/xkgnrzeb";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    if (response.ok) {
      e.target.reset();
      alert("Form successfully submitted");
    } else {
      alert("Something went wrong");
    }
  };
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
          <form onSubmit={handleSubmit} className={classes.bookTable_form}>
            <div className={classes.input_group}>
              <input type="text" placeholder="Your Name" required name="name" />
              <input
                type="email"
                placeholder="Your Email"
                required
                name="email"
              />
            </div>
            <div className={classes.input_group}>
              <input
                type="date"
                placeholder="Reservation date"
                required
                name="date"
              />
              <input
                type="number"
                placeholder="Number of Guests"
                required
                name="guests"
              />
            </div>
            <div>
              <textarea placeholder="Message" required name="message">
            
              </textarea>
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
