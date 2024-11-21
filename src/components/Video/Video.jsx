import { IoMdClose } from "react-icons/io";
import classes from "./Video.module.css";
const Video = ({ closeVideo,isVideoOpen }) => {

    
  return (
    <div className={`${classes.video_section} `}>
      <div
        className={`${classes.video_container} ${
          isVideoOpen ? classes.active : ""
        }`}
      >
        <IoMdClose className={classes.close} onClick={closeVideo} />
        <iframe
          src="https://www.youtube.com/embed/kRCH8kD1GD0?si=SqV5S3ottoL58vWT"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>{" "}
    </div>
  );
};
export default Video;
