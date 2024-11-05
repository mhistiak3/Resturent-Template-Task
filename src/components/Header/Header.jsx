import { FaBars, FaTimes } from "react-icons/fa";
import classes from "./Header.module.css";
import { useRef } from "react";
const Header = () => {
  const menuRef = useRef(null);
  const showMenu = () => {
    menuRef.current.classList.add(classes.active_menu);

  };
  const hideMenu = () => {
    menuRef.current.classList.remove(classes.active_menu);
  };
  return (
    <header className={classes.header_section}>
      <nav className={classes.nav}>
        <div className={`${classes.nav_container} container`}>
          <img src="/logo.png" alt="logo" className={classes.logo} />
          <menu className={classes.menu_container} ref={menuRef}>
            <span className={classes.hide_icon} onClick={hideMenu}>
              <FaTimes />
            </span>
            <div className={classes.menu_items}>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Portfolio</a>
              <a href="#">Clients</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
            <a href="#" className="btn">
              Book A Table
            </a>
          </menu>
          <span className={classes.hamberger_icon} onClick={showMenu}>
            <FaBars />
          </span>
        </div>
      </nav>
      <div className={classes.hero_section}>
        <div className={`${classes.hero_container} container`}>
          <div className={classes.hero_info}>
            <h1>Taste the authentic Saudi cuisine</h1>
            <p>
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.{" "}
            </p>
            <a href="#" className="btn">
              Explore Menu
            </a>
          </div>
          <div className={classes.hero_img}>
            <img
              src="/star-img.png"
              alt="star"
              className={classes.hero_star_element}
            />
            <div className={classes.hero_offer_element}>
              <div>
                <p>Today Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
