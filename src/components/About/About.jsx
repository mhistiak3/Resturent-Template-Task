import { LiaPhoneVolumeSolid } from "react-icons/lia";
import classes from "./About.module.css";
import { useState, useRef } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeClass, setFadeClass] = useState(
    `${classes.fade} ${classes.fade_active}`
  );

  let percentage = 80;
  const handleTabClick = (index) => {
    setFadeClass(classes.fade);
    setTimeout(() => {
      setActiveTab(index);
      setFadeClass(`${classes.fade} ${classes.fade_active}`);
    }, 200);
  };

  return (
    <div className={classes.about_section}>
      <div className={`${classes.about_container} container`}>
        <div className={classes.about_img}>
          <div className={classes.about_img_experience_element}>
            <div className={classes.about_img_experience_circle}>
              <svg width="80" height="80" viewBox="0 0 36 36">
                {/* Background Circle */}
                <path
                  className={classes.circle_bg}
                  d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className={classes.circle_progress}
                  strokeDasharray={`${percentage}, 100`}
                  d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <circle
                  className={classes.circle_indicator}
                  cx="18"
                  cy="2"
                  r="2"
                  transform={`rotate(${(percentage / 100) * 360} 18 18)`}
                />
                <circle
                  className={classes.inner_circle}
                  cx="18"
                  cy="2"
                  r="0.8"
                  transform={`rotate(${(percentage / 100) * 360} 18 18)`}
                />
              </svg>
              <span>{percentage}%</span>
            </div>
            <div className={classes.about_img_experience_text}>
              Market
              <br />
              Experiences
            </div>
          </div>
        </div>

        <div className={classes.about_info}>
          {/* Tabs */}
          <div className={classes.info_tabs}>
            {["About", "Experiences", "Contact"].map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={index === activeTab ? classes.active_tab : ""}
              >
                {item}
              </button>
            ))}
          </div>

          <div className={`${classes.all_info_boxes} ${fadeClass}`}>
            {/* Tab Content */}
            {activeTab === 0 && (
              <div className={classes.info_box}>
                <h2>Exceptional culinary experience and delicious food</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
                </p>
                <div className={classes.info_box_footer}>
                  <a href="#" className="btn">
                    About More
                  </a>
                  <span>
                    <LiaPhoneVolumeSolid />
                    <b> +88 3426 739 485</b>
                  </span>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className={classes.info_box}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus.
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div className={classes.info_box_footer}>
                  <a href="#" className="btn">
                    About More
                  </a>
                  <span>
                    <LiaPhoneVolumeSolid />
                    <b> +88 3426 739 485</b>
                  </span>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className={classes.info_box}>
                <h2>Exceptional culinary experience and delicious food</h2>
                <div className={classes.info_box_footer}>
                  <a href="#" className="btn">
                    About More
                  </a>
                  <span>
                    <LiaPhoneVolumeSolid />
                    <b> +88 3426 739 485</b>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <img
          src="/about-element.png"
          alt="element-pizza"
          className={classes.about_element}
        />
      </div>
      <div className={classes.services + " container"}>
        <div className={classes.service_box}>
          <img src="/delivery.png" alt="icon" />
          <div>
            <h4>fast delivery</h4>
            <p>Within 30 minutes</p>
          </div>
        </div>
        <div className={classes.service_box}>
          <img src="/dining.png" alt="icon" />
          <div>
            <h4>absolute dining</h4>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className={classes.service_box}>
          <img src="/pickup.png" alt="icon" />
          <div>
            <h4>pickup delivery</h4>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
