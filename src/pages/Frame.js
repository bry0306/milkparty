import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Frame.css";

const Frame = () => {
  return (
    <div className="data-processor">
      <main className="tree-structure">
        <section className="desktop-1">
          <FrameComponent4 />
          <FrameComponent3 />
          <div className="desktop-1-inner">
            <div className="frame-parent">
              <div className="explore-communities-wrapper">
                <h1 className="explore-communities">Explore Communities</h1>
              </div>
              <img className="test-icon" alt="" src="/test-1@2x.png" />
            </div>
          </div>
          <div className="desktop-1-child">
            <div className="cc-efa206e71-1-parent">
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
              <img className="test-icon1" alt="" src="/test-2@2x.png" />
            </div>
          </div>
          <FrameComponent1 />
          <div className="roadmap-wrapper">
            <div className="roadmap">2024 Roadmap</div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default Frame;
