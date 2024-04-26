import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  icons8Checkmark242,
  icons8Checkmark2411,
  propWidth,
  propAlignSelf,
  propPadding,
}) => {
  const securityLearnTermsDiscordStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const supportNewsletterPrivacyTelStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="security-learn-terms-discord"
      style={securityLearnTermsDiscordStyle}
    >
      <div
        className="support-newsletter-privacy-tel"
        style={supportNewsletterPrivacyTelStyle}
      >
        <div className="feature-requests-docs-status-i">
          <img
            className="icons8-checkmark-24-1"
            loading="lazy"
            alt=""
            src="/icons8checkmark24-1@2x.png"
          />
          <img
            className="icons8-checkmark-24-2"
            loading="lazy"
            alt=""
            src={icons8Checkmark242}
          />
          <img
            className="icons8-checkmark-24-11"
            alt=""
            src={icons8Checkmark2411}
          />
        </div>
      </div>
      <h1 className="swaps-friends-container">
        <p className="swaps1">Swaps</p>
        <p className="friends-social">Friends + Social Platform</p>
        <p className="communities">Communities</p>
      </h1>
    </div>
  );
};

export default FrameComponent2;
