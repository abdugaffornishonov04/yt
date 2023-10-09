import { NavLink } from "react-router-dom";

import homeicon from "../../assets/images/youtube-home-icon.svg";
import shortsicon from "../../assets/images/youtube-shorts-icon.svg";
import subsicon from "../../assets/images/youtube-sub-icon.svg";
import libraryicon from "../../assets/images/youtube-library-icon.svg";
import historyicon from "../../assets/images/youtube-history-icon.svg";
import watchicon from "../../assets/images/youtube-watchlater-icon.svg";
import likedicon from "../../assets/images/likedvideosyoutube.png";
import browschannels from "../../assets/images/broswse-channels.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        {/* HSS Stands for home, shorts subscriiptions */}
        <div className="hss hss-wrapper">
          <button type="button" className="hss-home ss-accounts-active">
            <img src={homeicon} alt="" />
            Home
          </button>
          <button type="button" className="hss-shorts">
            <img src={shortsicon} alt="" />
            Shorts
          </button>
          <button type="button" className="hss-subs">
            <img src={subsicon} alt="" />
            Subscriptions
          </button>
        </div>
        {/* LHWL stands for library, history, watch, liked */}

        <div className="lhwl lhwl-wrapper">
          <button type="button" className="lhwl-library">
            <img src={libraryicon} alt="" />
            Library
          </button>
          <button type="button" className="lhwl-watch lhwl-history">
            <img src={historyicon} alt="" />
            History
          </button>
          <button type="button" className="lhwl-watch">
            <img src={watchicon} alt="" />
            Watch later
          </button>
          <button type="button" className="lhwl-liked">
            <img src={likedicon} alt="" />
            Liked
          </button>
        </div>

        {/* subscriptions */}

        <div className="sidebar-subscriptions">
          <h3>Subscriptions</h3>
          <div className="ss-accounts-wrapper">
            <NavLink className="ss-accounts">
              <div className="ss-accounts-image">
                <img
                  src="https://pbs.twimg.com/profile_images/1468001914302390278/B_Xv_8gu_400x400.jpg"
                  alt=""
                />
              </div>
              <p className="ss-accounts-name">Marques Brownlee</p>
            </NavLink>
            <NavLink className="ss-accounts">
              <div className="ss-accounts-image">
                <img
                  src="https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <p className="ss-accounts-name">Mr Beast</p>
            </NavLink>
            <NavLink className="ss-accounts">
              <div className="ss-accounts-image">
                <img
                  src="https://yt3.googleusercontent.com/EOL3RsUdEDu2H0T3WAb7iDcE3nvSXROUIPOYzRmYrsHNBa6OX5MH9IlBjv971J1TuzOVOW4ywA=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <p className="ss-accounts-name">MIT</p>
            </NavLink>
            <NavLink className="ss-accounts">
              <div className="ss-accounts-image">
                <img
                  src="https://yt3.googleusercontent.com/ytc/APkrFKZVR3F5vlAYUrif6BL7famIDnM3qyy1nfyT6GRaXA=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <p className="ss-accounts-name">Harvard University</p>
            </NavLink>
            <NavLink className="ss-accounts">
              <div className="ss-accounts-image">
                <img
                  src="https://yt3.googleusercontent.com/ytc/APkrFKb5JCzdpuNJqDUuoTiaxukXYosQS5pEOkvRqt7p4ts=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <p className="ss-accounts-name">Tesla</p>
            </NavLink>
          </div>
          <NavLink className="ss-browsechannels">
            <img src={browschannels} alt="browschannels" />
            Browse channels
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
