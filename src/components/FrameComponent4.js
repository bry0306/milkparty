import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <div className="frame-container">
      <div className="frame-div">
        <div className="circles-parent">
          <img className="circles-icon" alt="" src="/circles.svg" />
          <div className="rectangle-group">
            <div className="frame-item" />
            <div className="icon">
              <div className="column-layout">
                <div className="column-layout-child" />
                <div className="swap1">
                  <p className="blank-line">&nbsp;</p>
                  <p className="swap2">{`Swap                     `}</p>
                </div>
              </div>
              <div className="limit-wrapper">
                <div className="limit">
                  <p className="blank-line1">&nbsp;</p>
                  <p className="limit1">{`Limit                    `}</p>
                </div>
              </div>
              <div className="dca-wrapper">
                <div className="dca">
                  <p className="blank-line2">&nbsp;</p>
                  <p className="dca1">{`DCA                     `}</p>
                </div>
              </div>
              <div className="send-wrapper">
                <div className="send">Send</div>
              </div>
              <div className="buy-wrapper">
                <div className="buy">Buy</div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="frame-parent1">
                <div className="rectangle-container">
                  <div className="frame-inner" />
                  <div className="layout-wrapper">
                    <div className="layout">
                      <div className="you-pay">You pay</div>
                      <div className="fill">
                        <div className="div">1</div>
                      </div>
                    </div>
                  </div>
                  <div className="constraints">
                    <div className="constraints-child" />
                    <div className="solana-logo-2-1-wrapper">
                      <img
                        className="solana-logo-2-1-icon"
                        alt=""
                        src="/solana-logo2-1@2x.png"
                      />
                    </div>
                    <div className="sol">SOL</div>
                    <div className="proximity">
                      <img
                        className="icons8-down-arrow-50-2-1"
                        alt=""
                        src="/icons8downarrow502-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="logic-splitter">
                  <div className="transform">
                    <div className="transform-child" />
                    <div className="you-receive-parent">
                      <div className="you-receive">You receive</div>
                      <div className="blending">
                        <div className="div1">0</div>
                      </div>
                    </div>
                    <div className="distribution">
                      <div className="distribution-child" />
                      <div className="select-token">Select Token</div>
                      <div className="canvas">
                        <img
                          className="icons8-down-arrow-50-2-2"
                          alt=""
                          src="/icons8downarrow502-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <img
                className="icons8-down-arrow-50-1"
                loading="lazy"
                alt=""
                src="/icons8downarrow50-1@2x.png"
              />
            </div>
            <div className="frame-child1" />
            <div className="input-filter-wrapper">
              <button className="input-filter">
                <div className="input-filter-child" />
                <div className="connect-wallet">Connect Wallet</div>
              </button>
            </div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <div className="swaps-parent">
            <h1 className="swaps">Swaps with</h1>
            <h1 className="friends">friends</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
