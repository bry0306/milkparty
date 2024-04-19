import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="form-container">
      <div className="form-container-child" />
      <div className="sub-connect-button-parent">
        <textarea className="sub-connect-button" rows={18} cols={27} />
        <textarea className="sub-connect-button1" rows={18} cols={27} />
      </div>
      <div className="form-container-item" />
    </section>
  );
};

export default FrameComponent;
