import { FaClock, FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import classes from "./Footer.module.css";
import { FaMapLocation } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className={classes.footer_section}>
      <div className={`${classes.footer_container} container`}>
        <h1>We ready to have you the best dining experiences</h1>
        <div className={classes.footer_items}>
          <div className={classes.footer_item}>
            <FaClock />
            <h4>Opening Hours</h4>
            <div>
              <p>Monday - Sunday</p>
              <p>9:00 AM to 11:30 PM</p>
            </div>
          </div>
          <div className={classes.footer_item}>
            <FaPhone />
            <h4>Let's Talk</h4>
            <div>
              <p>Monday - Sunday</p>
              <p>9:00 AM to 11:30 PM</p>
            </div>
          </div>
          <div className={classes.footer_item}>
            <FaMailBulk />
            <h4>Book a Table</h4>
            <div>
              <p>Monday - Sunday</p>
              <p>9:00 AM to 11:30 PM</p>
            </div>
          </div>
          <div className={classes.footer_item}>
            <FaMapLocation />
            <h4>Our Address</h4>
            <div>
              <p>Monday - Sunday</p>
              <p>9:00 AM to 11:30 PM</p>
            </div>
          </div>
        </div>
        <footer className={classes.footer_bottom}>
          <div className={classes.icon_box}>
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaLinkedin />
            </div>
          </div>
          <p>
            © 2023 <b>Niomax</b> All Rights Reserved{" "}
          </p>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
