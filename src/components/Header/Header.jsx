import { FaBars, FaTimes } from "react-icons/fa";
import classes from "./Header.module.css";
import { memo, useEffect, useRef } from "react";
const Header = memo(() => {
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const showMenu = () => {
    menuRef.current.classList.add(classes.active_menu);
  };
  const hideMenu = () => {
    menuRef.current.classList.remove(classes.active_menu);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navRef.current.classList.add(classes.sticky_nav);
    } else {
      navRef.current.classList.remove(classes.sticky_nav);
    }
  };
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <header className={classes.header_section}>
      <nav className={classes.nav} ref={navRef}>
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
            <div className={classes.hero_title}>
              <h1>Taste the authentic Saudi cuisine</h1>
            </div>
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
})
export default Header;
