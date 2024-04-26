import "./FrameComponent5.css";

const FrameComponent5 = () => {
  return (
    <header className="dropdown-menu-wrapper">
      <div className="dropdown-menu">
        <div className="frame-group">
          <nav className="frame-wrapper">
            <nav className="swap-parent">
              <div className="swap">{`Swap `}</div>
              <div className="liquidity-wrapper">
                <div className="liquidity">Liquidity</div>
              </div>
              <div className="nfts-wrapper">
                <div className="nfts">NFTs</div>
              </div>
              <div className="snipe">Snipe</div>
              <div className="bridge">Bridge</div>
            </nav>
          </nav>
          <h1 className="milkparty">
            <span> m</span>
            <span className="i">i</span>
            <span className="l">l</span>
            <span className="k">k</span>
            <span>party./</span>
          </h1>
        </div>
        <div className="slider">
          <div className="icons8-magnifying-glass-1-wrapper">
            <img
              className="icons8-magnifying-glass-1"
              loading="lazy"
              alt=""
              src="/icons8magnifyingglass-1.svg"
            />
          </div>
          <button className="rectangle-parent">
            <div className="frame-child" />
            <b className="connect">Connect</b>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
