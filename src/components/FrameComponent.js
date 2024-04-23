import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="frame-parent">
      <div className="the-milk-token-is-the-heartbe-parent">
        <h1 className="the-milk-token-container">
          <span>{`The `}</span>
          <span className="milk">$MILK</span>
          <span>{` token is the heartbeat of the Milkparty ecosystem, powering the platform's features and rewarding users for their participation. By holding `}</span>
          <span className="milk1">$MILK</span>
          <span>
            , users can unlock exclusive access to platform perks including
            higher tiered profiles, rewards from platform fees, and users can
            even copytrade friends.
          </span>
        </h1>
        <h1 className="got-milk">
          <span>{`Got `}</span>
          <span className="milk2">$MILK?</span>
        </h1>
      </div>
      <div className="milkinfo-parent">
        <h1 className="milkinfo">What is Milkparty?</h1>
        <h1 className="milkparty-is-a">
          Milkparty is a decentralized exchange built on Solana that seamlessly
          integrates a dynamic social platform. This approach empowers users to
          Connect, Share, and Swap with their friends and the broader crypto
          community all in one place.
        </h1>
      </div>
      <img className="test-icon1" alt="" src="/test@2x.png" />
      <img className="test-icon2" alt="" src="/test-1@2x.png" />
    </section>
  );
};

export default FrameComponent;
