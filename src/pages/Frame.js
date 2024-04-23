import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import "./Frame.css";

const Frame = () => {
  return (
    <div className="data-processor">
      <main className="desktop-1">
        <FrameComponent3 />
        <FrameComponent2 />
        <section className="wrapper-group-3-parent">
          <div className="wrapper-group-3">
            <img
              className="wrapper-group-3-child"
              alt=""
              src="/group-3@2x.png"
            />
          </div>
          <img
            className="cc-efa206e71-6-icon"
            loading="lazy"
            alt=""
            src="/cc-efa206e71-6@2x.png"
          />
          <img
            className="gold-coin-money-cartoon-vector-icon"
            loading="lazy"
            alt=""
            src="/goldcoinmoneycartoonvectoriconillustrationbusinessfinanceiconisolatedflatvector-13867611044-1@2x.png"
          />
          <img
            className="gold-coin-money-cartoon-vector-icon1"
            loading="lazy"
            alt=""
            src="/goldcoinmoneycartoonvectoriconillustrationbusinessfinanceiconisolatedflatvector-13867611044-2@2x.png"
          />
          <img
            className="cb267118e1d449e5e51845ed0cdbe-icon"
            loading="lazy"
            alt=""
            src="/836cb267118e1d449e5e51845ed0cdbe-1@2x.png"
          />
        </section>
        <FrameComponent />
      </main>
    </div>
  );
};

export default Frame;
