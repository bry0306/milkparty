import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="frame-section">
      <div className="dex-parent">
        <h1 className="dex">dex +</h1>
        <button className="rectangle-parent1">
          <div className="frame-child11" />
          <b className="b">{`<      >`}</b>
        </button>
      </div>
      <div className="frame-wrapper2">
        <div className="rectangle-parent2">
          <div className="frame-child12" />
          <div className="frame-child13" />
          <div className="frame-child14" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
