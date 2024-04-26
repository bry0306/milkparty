import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <div className="graphs">
      <div className="twitter-logo">
        <div className="security-tab-label">
          <h1 className="milkinfo">What is Milkparty?</h1>
          <div className="terms-tab-label">
            <h1 className="milkparty-is-a">
              Milkparty is a decentralized exchange built on Solana that
              seamlessly integrates a dynamic social platform. This approach
              empowers users to Connect, Share, and Swap with their friends and
              the broader crypto community all in one place.
            </h1>
          </div>
        </div>
        <div className="support-tab-label">
          <div className="docs-tab-label">
            <h1 className="got-milk">
              <span>{`Got `}</span>
              <span className="milk">$MILK?</span>
            </h1>
          </div>
          <div className="procedures">
            <h1 className="the-milk-token-container">
              <span>{`The `}</span>
              <span className="milk1">$MILK</span>
              <span>{` token is the heartbeat of the Milkparty ecosystem, powering the platform's features and rewarding users for their participation. By holding `}</span>
              <span className="milk2">$MILK</span>
              <span>
                , users can unlock exclusive access to platform perks including
                higher tiered profiles, rewards from platform fees, and users
                can even copytrade friends.
              </span>
            </h1>
            <div className="milk-token-presale">
              <img
                className="test-icon2"
                loading="lazy"
                alt=""
                src="/test@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
