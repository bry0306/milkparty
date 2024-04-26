import FrameComponent2 from "./FrameComponent2";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="swaps-friends-social-platform-wrapper">
      <div className="swaps-friends-social-platform">
        <div className="rectangle-container">
          <div className="frame-inner" />
          <div className="product-resources-company-soci">
            <h1 className="milkparty1">
              <span>m</span>
              <span className="i1">i</span>
              <span className="l1">l</span>
              <span className="k1">k</span>
              <span>party./</span>
            </h1>
          </div>
          <FrameComponent2
            icons8Checkmark242="/icons8checkmark24-1@2x.png"
            icons8Checkmark2411="/icons8checkmark24-1@2x.png"
          />
        </div>
        <div className="rectangle-parent1">
          <div className="rectangle-div" />
          <div className="current-defi-dex-wrapper">
            <h1 className="current-defi-dex">Current Defi Dex</h1>
          </div>
          <FrameComponent2
            icons8Checkmark242="/icons8x30-1@2x.png"
            icons8Checkmark2411="/icons8x30-1@2x.png"
            propWidth="unset"
            propAlignSelf="stretch"
            propPadding="var(--padding-6xs) 0px 0px"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
