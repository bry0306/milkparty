import FrameComponent from "./FrameComponent";
import "./Procedures.css";

const Procedures = () => {
  return (
    <div className="procedures">
      <img className="wave-2-1-icon" loading="lazy" alt="" src="/wave2-1.svg" />
      <div className="rectangle-group">
        <div className="frame-inner" />
        <div className="state-machines">
          <div className="rectangle-container">
            <div className="rectangle-div" />
            <div className="graphs">
              <h1 className="milkparty1">
                <span>m</span>
                <span className="i1">i</span>
                <span className="l1">l</span>
                <span className="k1">k</span>
                <span>party./</span>
              </h1>
            </div>
            <FrameComponent
              icons8Checkmark242="/icons8checkmark24-1@2x.png"
              icons8Checkmark2411="/icons8checkmark24-1@2x.png"
            />
          </div>
          <div className="rectangle-parent1">
            <div className="frame-child1" />
            <div className="current-defi-dex-wrapper">
              <h1 className="current-defi-dex">Current Defi Dex</h1>
            </div>
            <FrameComponent
              icons8Checkmark242="/icons8x30-1@2x.png"
              icons8Checkmark2411="/icons8x30-1@2x.png"
              propWidth="unset"
              propAlignSelf="stretch"
              propPadding="var(--padding-6xs) 0px 0px"
            />
          </div>
        </div>
        <div className="image-bank-wrapper">
          <div className="image-bank">
            <div className="roadmap-wrapper">
              <div className="roadmap">2024 Roadmap</div>
            </div>
            <h1 className="launch-marketing-campaign-container">
              <ul className="launch-marketing-campaign-milk">
                <li className="launch-marketing-campaign">
                  Launch Marketing Campaign
                </li>
                <li className="milk-token-presale">Milk Token Presale</li>
                <li className="integrate-launchpad-for">
                  Integrate Launchpad for new tokens
                </li>
                <li className="launch-on-milkparty">
                  Launch on Milkparty and other Dex’s
                </li>
                <li className="optimize-social-platform">
                  Optimize Social platform
                </li>
                <li className="get-listed-on">Get listed on Cex’s</li>
                <li className="start-platform-rewards">
                  Start platform rewards
                </li>
                <li className="first-community-airdrop">
                  First Community Airdrop
                </li>
                <li className="milkparty-nft-collection">
                  Milkparty NFT collection
                </li>
                <li className="wallet-chrome-extension">
                  Wallet Chrome Extension
                </li>
                <li className="desktop-apps-for">{`Desktop Apps for Mac & Windows`}</li>
                <li>Mobile apps for iOS and Android </li>
              </ul>
            </h1>
          </div>
        </div>
        <footer className="frame-footer">
          <div className="frame-child2" />
          <h1 className="milkparty2">
            <span> m</span>
            <span className="i2">i</span>
            <span className="l2">l</span>
            <span className="k2">k</span>
            <span>party./</span>
          </h1>
          <div className="frame-parent1">
            <div className="rectangle-parent2">
              <div className="frame-child3" />
              <h1 className="enter-you-email">Enter you email</h1>
              <div className="icon-inventory">
                <div className="symbol-set">
                  <div className="sign-up-for">
                    Sign up for our newsletter and join the growing Milkparty
                    community.
                  </div>
                </div>
                <button className="frame-button">
                  <div className="frame-child4" />
                  <div className="sign-up">Sign up</div>
                </button>
              </div>
            </div>
            <div className="fill-fill">
              <div className="font-family">
                <div className="product">Product</div>
                <div className="download-parent">
                  <div className="download">Download</div>
                  <div className="security">Security</div>
                  <div className="support">Support</div>
                  <div className="feature-requests">Feature Requests</div>
                </div>
              </div>
              <div className="font-family1">
                <div className="resources">Resources</div>
                <div className="explore-parent">
                  <div className="explore">Explore</div>
                  <div className="learn">Learn</div>
                  <div className="newsletter">Newsletter</div>
                  <div className="docs">Docs</div>
                </div>
              </div>
              <div className="font-family2">
                <div className="company">Company</div>
                <div className="about-parent">
                  <div className="about">About</div>
                  <div className="terms">Terms</div>
                  <div className="privacy">Privacy</div>
                  <div className="status">Status</div>
                  <div className="careers">Careers</div>
                </div>
              </div>
              <div className="font-family3">
                <div className="socials">Socials</div>
                <div className="twitter-parent">
                  <div className="twitter">Twitter</div>
                  <div className="discord">Discord</div>
                  <div className="telegram">Telegram</div>
                  <div className="instagram">Instagram</div>
                  <div className="reddit">Reddit</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Procedures;