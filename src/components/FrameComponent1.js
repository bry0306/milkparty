import { useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  icons8Checkmark242,
  icons8Checkmark2411,
  propWidth,
  propAlignSelf,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="frame-parent7" style={frameDivStyle}>
      <div className="frame-wrapper4" style={frameDiv1Style}>
        <div className="icons8-checkmark-24-1-parent">
          <img
            className="icons8-checkmark-24-1"
            loading="lazy"
            alt=""
            src="/icons8checkmark24-1@2x.png"
          />
          <img
            className="icons8-checkmark-24-2"
            loading="lazy"
            alt=""
            src={icons8Checkmark242}
          />
          <img
            className="icons8-checkmark-24-11"
            alt=""
            src={icons8Checkmark2411}
          />
        </div>
      </div>
      <h1 className="swaps-friends-container">
        <p className="swaps1">Swaps</p>
        <p className="friends-social">Friends + Social Platform</p>
        <p className="communities1">Communities</p>
      </h1>
    </div>
  );
};

export default FrameComponent1;
