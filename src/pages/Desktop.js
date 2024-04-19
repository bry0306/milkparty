import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <img
        className="tempimagekiwdlt-1-icon"
        alt=""
        src="/tempimagekiwdlt-1@2x.png"
      />
      <div className="desktop-1-child" />
      <div className="desktop-1-item" />
      <div className="desktop-1-inner" />
      <div className="ellipse-div" />
      <div className="rectangle-div" />
      <div className="desktop-1-child1" />
      <div className="desktop-1-child2" />
      <img
        className="tempimage6tjyif-1-icon"
        alt=""
        src="/tempimage6tjyif-1@2x.png"
      />
      <div className="desktop-1-child3" />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Desktop;
