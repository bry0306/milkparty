import { useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import WaveIcon from "../components/WaveIcon";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Frame.css";

const Frame = () => {
  const onLogInSignClick = useCallback(() => {
    // Please sync "Desktop - 2" to the project
  }, []);

  return (
    <div className="data-processor">
      <main className="desktop-1">
        <FrameComponent3 />
        <WaveIcon />
        <img className="circles-icon" alt="" src="/circles.svg" />
        <div className="friends-parent">
          <h1 className="friends">friends</h1>
          <h1 className="swaps">Swaps with</h1>
        </div>
        <img
          className="icons8-magnifying-glass-1"
          loading="lazy"
          alt=""
          src="/icons8magnifyingglass-1.svg"
        />
        <header className="log-in-sign-up-parent">
          <div className="log-in-sign" onClick={onLogInSignClick}>
            Log in. Sign up
          </div>
          <h1 className="milkparty">
            <span> m</span>
            <span className="i">i</span>
            <span className="l">l</span>
            <span className="k">k</span>
            <span>party./</span>
          </h1>
          <div className="swap-liquidity-nfts">{`Swap            Liquidity              NFTs             Snipe            Bridge                                     `}</div>
        </header>
        <div className="gold-coin-icon">
          <div className="create-community-button" />
          <h1 className="dex-friends">dex + friends</h1>
          <img
            className="icons8-arrow-50-1"
            loading="lazy"
            alt=""
            src="/icons8arrow50-1@2x.png"
          />
          <img
            className="icons8-arrow-50-2-1"
            loading="lazy"
            alt=""
            src="/icons8arrow502-1@2x.png"
          />
        </div>
        <div className="desktop-1-inner">
          <FrameComponent2 />
        </div>
        <FrameComponent1 />
        <div className="milkparty-wrapper">
          <h1 className="milkparty1">
            <span>m</span>
            <span className="i1">i</span>
            <span className="l1">l</span>
            <span className="k1">k</span>
            <span>party./</span>
          </h1>
        </div>
        <section className="decision-maker">
          <img
            className="cc-efa206e71-1-icon"
            loading="lazy"
            alt=""
            src="/cc-efa206e71-1@2x.png"
          />
          <img
            className="cc-efa206e71-2-icon"
            alt=""
            src="/cc-efa206e71-2@2x.png"
          />
          <img
            className="star-vector-16852698-removebg-icon"
            loading="lazy"
            alt=""
            src="/starvector16852698removebgpreview-1@2x.png"
          />
          <img
            className="star-vector-16852698-removebg-icon1"
            loading="lazy"
            alt=""
            src="/starvector16852698removebgpreview-2@2x.png"
          />
        </section>
        <FrameComponent />
      </main>
      <div className="explore-communities-parent">
        <h1 className="explore-communities">Explore Communities</h1>
        <h1 className="create-an-exclusive">
          create an exclusive, invite-only community that fosters a strong sense
          of belonging for its members.
        </h1>
        <img className="test-icon" alt="" src="/test-2@2x.png" />
      </div>
      <div className="milkparty-parent">
        <h1 className="milkparty2">
          <span>m</span>
          <span className="i2">i</span>
          <span className="l2">l</span>
          <span className="k2">k</span>
          <span>party./</span>
        </h1>
        <h1 className="swaps-friends-container">
          <p className="swaps1">Swaps</p>
          <p className="friends-social">Friends + Social Platform</p>
          <p className="communities">Communities</p>
        </h1>
        <img
          className="icons8-checkmark-24-1"
          loading="lazy"
          alt=""
          src="/icons8checkmark24-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Frame;
